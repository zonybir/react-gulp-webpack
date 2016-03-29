var React = require ('react'),
		Header = require ('../../../lib/component/Header.jsx'),
		$ = require ('../../../lib/component/ajax.js'),
		Footer = require ('../../../lib/component/Footer.jsx');
module.exports=React.createClass({
	getInitialState:function(){
			return {
				d:{
					title:'优孕行 赴美试管婴儿流程',
					content:"<p>1.优孕行 赴美试管婴儿流程优孕行......</p>"
				}
				
			}
	},
	GetQueryString:function (name){
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null) return  unescape(r[2]); return null;
	},
	componentDidMount: function () {
				var id=this.GetQueryString('id'),t=this;				
				$.GET('/index.php/mobile_guideCtr/model?id='+id,function(d){
						t.setState({d:d});
				})
	},
	render:function(){
		return (
				<div className='container' style={{color:'#333'}}>
					<Header ic='<'>就医指南详情</Header>
					<div style={{padding:'20px 15px',color:'#555',fontSize:'14px',backgroundColor:'#fff'}}>
						<p style={{color:'#333',padding:'5px 0 15px',fontSize:'16px'}}>{this.state.d.title}</p>
						<div dangerouslySetInnerHTML={{__html: this.state.d.content}} className='autoImgImpor'/>
					</div>
					<Footer></Footer>
				</div>
		);
	}
});