var React = require ('react'),
		Searchinp = require ('../../../lib/component/Searchinp.jsx');
module.exports=React.createClass({
		render:function(){
			return (
				<div className='searchBox'>
					<p>{this.props.title}</p>
					<Searchinp btnText='智能推荐' pleacHolder='请输入女士的年龄'></Searchinp>
				</div>
			)
		}
})