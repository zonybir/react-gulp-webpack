var PubSub = require ('./pubsub.js'),
React = require ('react');
module.exports=React.createClass({
	getInitialState: function() {
    return {
      width:0
    };
  },
  componentDidMount: function () {
    this.pubsub_token = PubSub.subscribe('toggleNav', function (topic, showNav) {
    	var width= showNav ? '70%' : '0%';
      this.setState({
        width: width
      });
    }.bind(this));
  },
  componentWillUnmount: function () {
    PubSub.unsubscribe(this.pubsub_token);
  },
	render:function(){
		return(
			<div className='leftNav' style={{width:this.state.width}}>
					<div className='redLine'/>
					<img src='./images/uyx_nav_banner.png' />
					<ul className='nav-head'>    
						<li><a href='./index.html'>首页-推荐医院</a></li>
						<li><a href='./guides.html'>就医指南</a></li>
						<li><a href='./news.html'>前沿资讯</a></li>
						<li style={{borderBottom:'1px solid #ccc',marginBottom:20}}></li>
						<li className='hide'><a href='./hospitals.html' style={{color:'red'}}>常见问题</a></li>
						<li className='hide'><a href='./hospital.html' style={{color:'red'}}>关于优孕行</a></li>
						<li className='hide'><a href='./active.html' style={{color:'red'}}>媒体报道</a></li>
					</ul>
			</div>
		)
	}
})