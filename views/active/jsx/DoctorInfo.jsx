var React = require ('react');
module.exports=React.createClass({
		render:function(){
				return (
					<div className='doctorInfo clearfix'>
						<img src={this.props.src} />
						<div>
							<p>{this.props.name}</p>
							<div>{this.props.info}</div>
						</div>
					</div>
				)
		}
})