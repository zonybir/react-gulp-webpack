var $ = require ('../../../lib/component/ajax.js'),
		React = require ('react');
module.exports=React.createClass({
	getInitialState:function(){
			var newsItem={
					img:'../images/banner1.jpg',
					title:'zonybir news title',
					summary:'zonybir githubt address is zonybir @ githubt . com'
			};
			return{
					d:[newsItem,newsItem,newsItem,newsItem,newsItem,newsItem]
			}
	},
	componentDidMount: function () {
				var t=this;				
				$.GET('/index.php/mobile_newsCtr/search',function(d){
						console.log(d);
						t.setState({d:d[0]});
						t.item=d[1];
				})
	},
	item:0,
	flag:true,
	handleLoadMore:function(event){
		var scrollTop=event.target.scrollTop,t=this;
		if(scrollTop >= this.item*333-1000 && this.flag){
			this.flag=false;
			$.GET('/index.php/mobile_newsCtr/search?page='+this.item,function(d){
						console.log(d);
						var div=t.loadMoreData(d[0]);
						var box=document.getElementById('outBoxNews');
						box.appendChild(div);
						t.item=d[1];
						t.flag=true;
				})
		}
	},
	loadMoreData:function(d){
		var _HTML='',div=document.createElement('div');
		d.map(function(val,key){
			_HTML+="<div class='news-list'>"+
						"<a href='./news_detail.html?id="+val.id+"'>"+
							"<img src='"+val.img+"'>"+
							"<p>"+val.title+"</p>"+
							"<div>"+val.summary+"</div>"+
						"</a>"+
					"</div>"
		});
		div.innerHTML=_HTML;
		return div;
	},
	render:function(){
			return (
					<div onScroll={this.handleLoadMore} style={{height:800,overflow:'scroll'}} id='outBoxNews'>
						{this.state.d.map(function(val,key){
								var href='./news_detail.html?id='+val.id;
								return (
										<div className='news-list' key={val.id}>
											<a href={href}>
												<img src={val.img} />
												<p>{val.title}</p>
												<div>{val.summary}</div>
											</a>
										</div>
								)
						})}
					</div>
			)
	}
})