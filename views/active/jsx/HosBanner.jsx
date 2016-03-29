var React = require ('react');
module.exports=React.createClass({
	getInitialState:function(){
		console.log(this);
			return {
				titil2e:'chrilder'
			}
	},
	 render:function(){
	 			return (
	 					<div className='hosOutbox'>
	 						<div className='hosBanner'>
	 						<img src={this.props.src} />
	 						<div>
	 							<p className='tName'>{this.props.name_cn}</p>
	 							<p style={{fontSize:'12px'}}>{this.props.name_en}</p>
	 						</div>
	 						</div>
	 					</div>
	 			)
	 }
})