var $ = require ('./ajax.js'),
		React = require ('react');
module.exports=React.createClass({
	getInitialState: function() {
		var defult={
			img_main: 'H234S_14509286908824.jpg',
			country: '北京优孕行',
			city:'',
			name_abbr:'系统故障 ! 无法访问数据   ~...丶  程序猿正在 加 紧 修 复 中.....',
			summary:''
		};
    return {
      	d:[defult]
    };
  },
  GetQueryString:function (name){
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null) return  unescape(r[2]); return null;
	},
	componentDidMount:function(){
		var id=this.GetQueryString('age'),t=this,url='/index.php/mobile_hospitalCtr/search';
			if(!!id) url+='?age='+id;
			$.GET(url,function(d){
					t.setState({d:d});
			})
	},
	render:function(){
		return (
				<div>
				{this.state.d.map(function(item, i) {
					var img_src='http://7xp79e.com2.z0.glb.qiniucdn.com/'+item.img_main,

					href=item.id?'./hospital.html?id='+item.id:'javascript:;';
          return(
          	<div className='hos-item' key={i}>
          		<a href={href}>
          		<img src={img_src} />
          		<p><i className='icon_location'></i><span>{item.city}</span></p>
          		<div>
          			<p>{item.name_abbr}</p>
          			<p className='ft12'>{item.summary}</p>
          		</div>
          		</a>
          	</div>
          )
          
				},this)}
				</div>
		)
	}
})