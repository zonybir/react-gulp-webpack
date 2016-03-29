var React = require ('react'),
		Header = require ('../../../lib/component/Header.jsx'),
		LeftNav = require ('../../../lib/component/LeftNav.jsx'),
		PubSub = require ('../../../lib/component/pubsub.js'),
		BannerImg = require ('./Banner.jsx'),
		IndexSearch = require ('./Search.jsx'),
		HosList = require ('../../../lib/component/HosList.jsx'),
		LoadMore= require ('./LoadMore.jsx'),
		UGround = require ('../../../lib/component/UGround.jsx'),
		Footer = require ('../../../lib/component/Footer.jsx');
		
module.exports=React.createClass({
	getInitialState:function(){
		return {
			showNav:true
		}
	},
	toggleNav:function(e){
			if(!this.state.showNav){
				this.setState({
	      	showNav: false
	    	});
				PubSub.publish('toggleNav', this.state.showNav);
				e=e||window.event;
				e.preventDefault();
				e.stopPropagation();
			}
	},
	componentDidMount: function () {
	  this.pubsub_token = PubSub.subscribe('toggleNav', function (topic, showNav) {
	    	showNav=!showNav;
	    	this.setState({showNav: showNav});
	  }.bind(this));
	},
	componentWillUnmount: function () {
	  PubSub.unsubscribe(this.pubsub_token);
	},
	render:function(){
		return (
				<div className='clearfix'>
					<LeftNav />
					<div className='container' onTouchEnd={this.toggleNav}>
						<Header ic=''>优孕行</Header>
						<BannerImg zrc='./images/banner2.jpg'></BannerImg>
						<IndexSearch title='我们只推荐最适合您的医院'></IndexSearch>
						<div className='hos-list-box'>
							<h5 className='hos-title t-center'>国际知名辅助生殖机构</h5>
							<HosList></HosList>
							<LoadMore href='./hospitals.html?age=35' text='查看更多'></LoadMore>
						</div>
						<UGround></UGround>
						<Footer></Footer>
					</div>
				</div>
		);
	}
});