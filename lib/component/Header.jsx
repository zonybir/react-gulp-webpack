var 	PubSub = require ('./pubsub.js'),
			React = require ('react');

module.exports=React.createClass({
		getInitialState:function(){
			return {
				show:true
			}
		},
		showNav:function(e){
			e=e||window.event;
			PubSub.publish('toggleNav', this.state.show);
			e.preventDefault();
			e.stopPropagation();
		},
		componentDidMount: function () {
		  this.pubsub_token = PubSub.subscribe('toggleNav', function (topic, showNav) {
		    	showNav=!showNav
		    	this.setState({
		      	show: showNav
		    	});
		  }.bind(this));
		},
		componentWillUnmount: function () {
		  PubSub.unsubscribe(this.pubsub_token);
		},
  	render:function(){
  		var back = this.props.ic=='<'?'show':'hide',
  				nav = back == 'hide' ? 'navbtn show':'navbtn hide',
  				homes='hide';
  		if(typeof this.props.home == 'string'){
  			nav='hide';
  			homes='show';
  		}
    	return (
    			<div className='u-header'>
    				<a href='javascript:history.go(-1);' className={back}><img src='images/icon_back.png' style={{width:11,height:'auto',marginTop:1}} /></a>
    				<a href='./index.html' className={homes}><img src='images/icon_share.png' style={{width:20,height:'auto',marginTop:'-1px'}} /></a>
    				<div className={nav} onClick={this.showNav}><span /><span /><span /></div>
    				<p>{this.props.children}</p>
    			</div>
    	)
 }
});