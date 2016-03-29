var React = require ('react');
module.exports=React.createClass({
	getInitialState:function(){
			var newsItem={
					imgSrc:'../images/banner1.jpg',
					title:'zonybir news title',
					summary:'zonybir githubt address is zonybir @ githubt . com'
			};
			return{
					newsList:[newsItem,newsItem,newsItem,newsItem,newsItem,newsItem]
			}
	},
	render:function(){
			return (
					<div>
						{this.state.newsList.map(function(val,key){
								return (
										<div className='news-list'>
												<img src={val.imgSrc} />
												<p>{val.title}</p>
												<div>{val.summary}</div>
										</div>
								)
						})}
					</div>
			)
	}
})