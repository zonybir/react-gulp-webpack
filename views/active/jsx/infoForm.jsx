var React = require ('react'),
		$ = require ('../../../lib/component/ajax.js'),
		PubSub = require ('../../../lib/component/pubsub.js');
module.exports=React.createClass({
		getInitialState:function(){
				return {
					showDialog:false,
					ErrPhone:{},
					ErrName:{}
				}
		},
		componentDidMount:function(){

		},
		componentDidMount: function () {
		  this.pubsub_token = PubSub.subscribe('toggleNav', function (topic, showNav) {
		    	this.setState({showDialog: true});
		  }.bind(this));
		},
		componentWillUnmount: function () {
		  PubSub.unsubscribe(this.pubsub_token);
		},
		hasSubmit:false,
		data:{
			sex:'0',
			name:'',
			phone:''
		},
		handleSex:function(event){
				this.data.sex=event.target.value;
		},
		handleName:function(event){
				var name=event.target.value;
				if(!/[\d\w\s]+/gi.test(name) && name.length>1 && name.length<9){
					this.setState({ErrName:{}});
					this.data.name=name;
				}else{
					this.setState({ErrName:{color:'red',border:'1px solid red'}});
					this.data.name='';
				}
		},
		handlePhone:function(event){
				var phone=event.target.value;
				if(/^1\d{10}$/.test(phone)){
					this.setState({ErrPhone:{}});
					this.data.phone=phone;
				}else{
					this.setState({ErrPhone:{color:'red',border:'1px solid red'}});
					this.data.phone='';
				}
		},
		handleSubmit:function(){
				var t=this;
				if(this.hasSubmit){
					alert('你已成功报名,请勿重复提交');
					t.handleHideDialog();
					return;
				}
				if(this.data.sex && this.data.phone && this.data.name){
						$.GET('/index.php/activeCtr/model?name='+t.data.name+'&sex='+t.data.sex+'&phone='+t.data.phone,function(e){
							console.log(e);
							if(e.cord == 'ok'){
								t.handleHideDialog();
								t.hasSubmit=true;
							}else{
								alert('网络错误请稍后再试')
							}
						})
				}else{
					alert('请检查填写内容是否正确!')
				}
		},
		handleHideDialog:function(){
			this.setState({showDialog:false})
		},
		render:function(){
				var body=document.getElementsByTagName('body')[0],showDialog=this.state.showDialog?
					(function(){
							body.style.width='100%';
							body.style.height='100%';
							body.style.overflow='hidden';
							return 'show';
					}()):
					(function(){
							body.style.cssText='';
							return 'hide';
					}());
				return (
					<div className={'dialogCoaver '+showDialog}>
					<div className='close_icon' onClick={this.handleHideDialog} />
					<div className='formBox'>
							<div className='inputbox-line'>
								<label>称谓:</label>
								<select name='sex' onChange={this.handleSex} >
									<option value='0'>女士</option>
									<option value='1'>男士</option>
								</select>
							</div>
							<div className='inputbox-line'>
								<label htmlFor='name'>姓名:</label>
								<input type='text' name='name' style={this.state.ErrName} onBlur={this.handleName}/>
							</div>
							<div className='inputbox-line'>
								<label htmlFor='phone'>电话:</label>
								<input type='text' name='phone' style={this.state.ErrPhone} onBlur={this.handlePhone} />
							</div>
							<div className='btnbox'>
								<input type='submit' value='提交' onClick={this.handleSubmit} />
							</div>
					</div>
					</div>
				)
		}
})