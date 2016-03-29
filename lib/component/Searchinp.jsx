var $_GET = require ('./query.js'),
		React = require ('react');
module.exports=React.createClass({
	getInitialState:function(){
			return {
				age:''
			}
	},
	componentDidMount: function () {
				var age=$_GET('age');
				this.handleCheackForm(age);
	},
	handleChange:function(event){
		var value=event.target.value;
		this.setState({age:value});
	},
	handleCheackForm:function(event){
		if(event==null || event == '') return;
		else if(typeof event == 'string') var value=event;
		else if(event.target) var value=(!event.target.age?event.target.value:event.target.age.value)+'';
		value=!value.match(/\D+/g)?value:value.replace(/\D+/g,'');
		if(value == ''){
			value=35;
		}
		if(value<18 ||value>60){
			event.preventDefault();
			event.stopPropagation();
			alert('小优无法识别您的年龄,请输入18-60之间的数字');
			return;
		}
		this.setState({age:value+'岁'});
	},
	render:function(){
		return (
				<form action='./hospitals.html' method='get' onSubmit={this.handleCheackForm}>
				<input placeholder={this.props.pleacHolder} name='age' value={this.state.age} onChange={this.handleChange} type='text' />
				<button type='submit'>{this.props.btnText}</button>
				</form>
		)
	}

})