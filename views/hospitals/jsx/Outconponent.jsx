var React = require ('react'),
		Header = require ('../../../lib/component/Header.jsx'),
		HosList = require ('../../../lib/component/HosList.jsx'),
		UGround = require ('../../../lib/component/UGround.jsx'),
		Footer = require ('../../../lib/component/Footer.jsx'),
		Searchinp = require ('../../../lib/component/Searchinp.jsx');
module.exports=React.createClass({
	render:function(){
		return (
				<div className='container'>
					<Header ic='<'>推荐医院</Header>
					<div className='searchBox list-inp'>
						<Searchinp btnText='确定' pleacHolder='请输入女士的年龄'></Searchinp>
					</div>
					<div className='hos-list-box'>
						<h5 className='hos-title t-center hide'><span>共为你推荐</span><span className='red'>{21}</span><span>所生育机构</span></h5>
						<HosList></HosList>
					</div>
					<UGround></UGround>
					<Footer></Footer>
				</div>
		);
	}
});