var React = require ('react');
module.exports=React.createClass({
	getInitialState:function(){
			return {
				title:''
			}
	},
	render:function(){
		return (
				<div style={{padding:'20px 15px',fontSize:'16px',marginBottom:'15px',backgroundColor:'#fff'}}>
					<p className='blineTitle'>{this.props.title}</p>
					<ul className='ul-list'>
						<li><a href='#'>优孕行 赴美试管婴儿流程</a></li>
						<li><a href='#'>优孕行 赴美试管婴儿流程</a></li>
						<li><a href='#'>优孕行 赴美试管婴儿流程</a></li>
						<li><a href='#'>优孕行 赴美试管婴儿流程</a></li>
						<li><a href='#'>优孕行 赴美试管婴儿流程</a></li>
					</ul>
					<div className='t-right'><botton className='btn'>查看更多</botton></div>
				</div>
		)
	}
})