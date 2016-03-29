var React = require ('react'),
		Header = require ('../../../lib/component/Header.jsx'),
		Footer = require ('../../../lib/component/Footer.jsx'),
		LeftNav = require ('../../../lib/component/LeftNav.jsx'),
		$ = require ('../../../lib/component/ajax.js'),
		PubSub = require ('../../../lib/component/pubsub.js'),
		GuideItem = require ('./GuideItem.jsx');
module.exports=React.createClass({
	toggleNav:function(e){
			if(!this.state.showNav){
				this.setState({
	      	showNav: false
	    	});
				PubSub.publish('toggleNav', this.state.showNav);
				e.preventDefault();
				e.stopPropagation();
			}
	},
	getInitialState:function(){
		return {
			showNav:true,
			datalist1:{info:[]},
			datalist2:{info:[]},
			datalist3:{info:[]},
			datalist4:{info:[]},
			hidef:'hide',
			hideDatalist3:''
		}
	},
	componentDidMount: function () {
	  this.pubsub_token = PubSub.subscribe('toggleNav', function (topic, showNav) {
	    	showNav=!showNav;
	    	this.setState({showNav: showNav});
	  }.bind(this));
	  var t=this;
	  $.GET('/index.php/mobile_guideCtr/search',function(data){
	  		console.log(data);
	  		t.setState({
	  			datalist1:data['1'],
	  			datalist2:data['2'],
	  			datalist3:data['3'],
	  			datalist4:data['4']
	  		});
	  		
	  })
	},
	componentWillUnmount: function () {
	  PubSub.unsubscribe(this.pubsub_token);
	},
	handleLoadMore:function(){
		var t=this;
		$.GET('/index.php/mobile_guideCtr/checkmore',function(data){
			var d=data;
			data={};
			data.info=d;
				t.setState({
						datalist2:data,
						hideDatalist3:'hide'
				})
		})
	},
	render:function(){
		var t=this;
		return (
				<div>
					<LeftNav />
					<div className='container' style={{color:'#333'}} onClick={this.toggleNav}>
						<Header ic=''>就医指南</Header>
						<div style={{padding:'20px 15px',fontSize:'16px',marginBottom:'15px',backgroundColor:'#fff'}}>
							<p className='blineTitle'>就医流程</p>
							<ul className='ul-list'>
								{
									this.state.datalist1.info.map(function(val,key){
											var href='./guide.html?id='+val.id;
											return (
												<li key={val.id}><a href={href}>{val.title}</a></li>
											)
									})
								}
							</ul>
							<div className='t-right hide'><botton className='btn'>查看更多</botton></div>
						</div>
						<div style={{padding:'20px 15px',fontSize:'16px',marginBottom:'15px',backgroundColor:'#fff'}}>
							<p className='blineTitle'>医疗程序</p>
							<ul className='ul-list'>
								{
									this.state.datalist2.info.map(function(val,key){
											var href='./guide.html?id='+val.id;
											return (
												<li key={val.id}><a href={href}>{val.title}</a></li>
											)
									})
								}
							</ul>
							<div className={'t-right loadmorenew '+this.state.hideDatalist3}><botton className='btn' onClick={this.handleLoadMore}>查看更多</botton><div /></div>
						</div>
						<div style={{padding:'20px 15px',fontSize:'16px',marginBottom:'15px',backgroundColor:'#fff'}}>
							<p className='blineTitle'>成功率解读</p>
							<ul className='ul-list'>
								{
									this.state.datalist3.info.map(function(val,key){
											var href='./guide.html?id='+val.id;
											return (
												<li key={val.id}><a href={href}>{val.title}</a></li>
											)
									})
								}
							</ul>
							<div className='t-right hide'><botton className='btn'>查看更多</botton></div>
						</div>
						<div style={{padding:'20px 15px',fontSize:'16px',marginBottom:'15px',backgroundColor:'#fff'}} >
							<p className='blineTitle'>常见问题</p>
							<ul className='ul-list'>
								{
									this.state.datalist4.info.map(function(val,key){
											var href='./guide.html?id='+val.id;
											return (
												<li key={val.id}><a href={href}>{val.title}</a></li>
											)
									})
								}
							</ul>
							<div className='t-right hide'><botton className='btn'>查看更多</botton></div>
						</div>
						<Footer />
					</div>
				</div>
		);
	}
});