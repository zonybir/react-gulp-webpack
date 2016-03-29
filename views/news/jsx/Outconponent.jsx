var React = require ('react'),
		Header = require ('../../../lib/component/Header.jsx'),
		Footer = require ('../../../lib/component/Footer.jsx'),
		LeftNav = require ('../../../lib/component/LeftNav.jsx'),
		PubSub = require ('../../../lib/component/pubsub.js'),
		NewsItem = require ('./NewsItem.jsx');
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
			showNav:true
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
				<div>
					<LeftNav />
					<div className='container' onClick={this.toggleNav}>
						<Header ic=''>前沿资讯</Header>
						<NewsItem></NewsItem>
						<Footer></Footer>
					</div>
				</div>
		);
	}
});
