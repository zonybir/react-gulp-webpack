var React = require ('react');
module.exports=React.createClass({
	render:function(){
		return (
				<div className='bannerboxz'>
					<a href='./active.html'>
					<img src={this.props.zrc} className='bannerImg' />
					</a>
				</div>
		);
	}
})