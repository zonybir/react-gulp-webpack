var React = require ('react');
module.exports=React.createClass({
	render:function(){
		if(this.props.href){
				return (
					<div className='load-more'>
						<a href={this.props.href}>{this.props.text}</a>
					</div>
				)
		}else{ //is button 
			return (
				<div></div>
			)
		}
		
	}
})