var React = require ('react'),
		Header = require ('../../../lib/component/Header.jsx'),
		$ = require ('../../../lib/component/ajax.js'),
		Footer = require ('../../../lib/component/Footer.jsx');
module.exports=React.createClass({
	getInitialState:function(){
			return {
				d:{
					title:'前沿资讯详情页面标题',
					author:'优孕行',
					timeu:'2016-1-26',
					content:"<img src='../images/banner1.jpg' width='100%'/><br /><br />前沿资前沿资题前沿资讯详情页面标题"
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
				$.GET('/index.php/mobile_newsCtr/search?id='+id,function(d){
						t.setState({d:d});
				})
	},
	render:function(){
		var outbox={backgroundColor:'#fff',padding:'20px 15px'},
				title={color:'#333',fontWeight:'normal',padding:'0 10px',fontSize:'18px'},
				authorTime={color:'#333',fontSize:'14px',padding:'5px 5px',paddingBottom:'10px'},
				content={color:'#555',fontSize:'14px'};
		return (
				<div className='container'>
					<Header ic='<'>前沿资讯详情</Header>
					<div style={outbox}>
						<h4 className='t-center' style={title}>{this.state.d.title}</h4>
						<p className='t-right' style={authorTime}><span>文/</span><span>{this.state.d.author}</span><span>{this.state.d.timeu}</span></p>
						<div style={content} dangerouslySetInnerHTML={{__html: this.state.d.content}} className='autoImgImpor'/>
					</div>
					<Footer></Footer>
				</div>
		);
	}
});