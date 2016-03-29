var React = require ('react'),
		Header = require ('../../../lib/component/Header.jsx'),
		$ = require ('../../../lib/component/ajax.js'),
		Footer = require ('../../../lib/component/Footer.jsx'),
		HosBanner = require ('./HosBanner.jsx'),
		DoctorInfo = require ('./DoctorInfo.jsx');
module.exports=React.createClass({
	getInitialState:function(){
			return {
				hos:{
					cases:'',
					name_abbr:'',
					en_name:'',
					img_main:'',
					introduction:'',
					description:'',
					img_panorama:''
				},
				title:'zonybir',
				src:'../images/banner1.jpg',
				name:'加州大学旧金山分校医学中心',
				name_en:'zonybir english name haha',
				hosgreat:['40岁以上周期200例','加州地区最大的综合医院','国际部提供专业中文服务'],
				height:[44,44,44,44,44],
				medicalData:{
					num:'223',
					content:"<p>网络链接异常,数据加载失败</p>"			
				},
				hosfw:{
					num:3
				},
				doctor:[
					{image_url:'../images/doc_test.jpg',dname:'zonybir zhang11',title:'zonybir zony zy'}
				],
				spc:['../images/banner1.jpg'],
				spcImg:'',
				spcNavClass:['active','','']

			}
	},
	GetQueryString:function (name){
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null) return  unescape(r[2]); return null;
	},
	componentDidMount: function () {
	  var id=this.GetQueryString('id'),t=this;
	  $.GET('/index.php/mobile_hospitalCtr/model?id='+id,function(data){
	  		console.log(data);
	  		t.setState({
	  			hos:data.hospital,
	  			doctor:data.doctors,
	  			spc:data.spc,
	  			spcImg:data.spc[0]
	  		});
	  })
	},
	handleShow:function(i){
			var _t=this;
			var hlist=this.state.height;
			h=hlist[i];
			if(h==44){
				hlist[i]=150;
				this.setState({height:hlist});
				//setTimeout(function(){
					hlist[i]='';
					_t.setState({height:hlist});
				//},100);
			}else{
				hlist[i]=44;
				this.setState({height:hlist})
			}
	},
	handleSpc:function(i){
		var a=['','',''],src=this.state.spc[i];
		a[i]='active';
		this.setState({spcImg:src,spcNavClass:a});
	},
	render:function(){
		var t=this;
		return (
				<div className='container'>
					<Header ic='<'>{this.state.hos.name_abbr}</Header>
					<HosBanner src={this.state.hos.img_main} name_cn={this.state.hos.name_abbr} name_en={this.state.hos.en_name} />
					<div className='hosgreatout'>
						<p>医院优势</p>
						<div className='clearfix hostgreat hide'>
							<div>
								<span />
								<p>{this.state.hosgreat[0]}</p>
							</div>
							<div>
								<span />
								<p>{this.state.hosgreat[1]}</p>
							</div>
							<div>
								<span />
								<p>{this.state.hosgreat[2]}</p>
							</div>
						</div>
						<div className='hostgreat autoImgImpor'><img src={"http://7xp79e.com2.z0.glb.qiniucdn.com/"+this.state.hos.img_panorama} /></div>
					</div>
					<div className='hosBlock' style={{height:this.state.height[0]}}>
							<p onClick={this.handleShow.bind(this,0)}>医院概况<i /></p>
							<div dangerouslySetInnerHTML={{__html: this.state.hos.introduction}} className='forVideoSize'></div>
					</div>
					<div className='hosBlock' style={{height:this.state.height[1]}}>
							<p onClick={this.handleShow.bind(this,1)}>
								<span>医疗数据</span><i />
								<span className='data'><b>{this.state.hos.cases}</b>例权威数据</span>
							</p>
							<div dangerouslySetInnerHTML={{__html: this.state.hos.description}}/>
					</div>
					<div className='hosBlock' style={{height:this.state.height[2]}}>
							<p onClick={this.handleShow.bind(this,2)}>主治医生<i /></p>
							<div>
								{this.state.doctor.map(function(val,key){
										return <DoctorInfo src={"http://7xp79h.com2.z0.glb.qiniucdn.com/"+val.image_url} name={val.dname} info={val.title} key={key}/>
								})
								}
							</div>
					</div>
					<div className='hosBlock' style={{height:this.state.height[3]}}>
							<p onClick={this.handleShow.bind(this,3)}>
								<span>医院医疗服务及流程</span><i />
								<span className='data'><b>{this.state.hosfw.num}</b>个医疗服务</span>
							</p>
							<div>
								<ul className='nav'>
									<li onClick={this.handleSpc.bind(this,0)} className={this.state.spcNavClass[0]}>冷冻卵子</li>
									<li onClick={this.handleSpc.bind(this,1)} className={this.state.spcNavClass[1]}>试管婴儿</li>
									<li onClick={this.handleSpc.bind(this,2)} className={this.state.spcNavClass[2]}>代孕</li>
								</ul>
								<img className='autoImg' src={'http://7xqi2i.com2.z0.glb.qiniucdn.com/'+this.state.spcImg.process_img}/>
							</div>
					</div>
					<div className='hosBlock' style={{height:this.state.height[4]}}>
							<p onClick={this.handleShow.bind(this,4)}>优孕行服务<i /></p>
							<div className='t-center'>
								<div className='serveBox'>
									<div>机构选择</div>
									<p>1. 多家机构专业对比分析</p>
									<p>2. 推荐最适合你的机构&nbsp;&nbsp;&nbsp;&nbsp;</p>
								</div>
							</div>
							<div className='t-center'><div className='i_arrowTip' /></div>
							<div className='t-center'>
								<div className='serveBox'>
									<div>前期准备</div>
									<p>1. 国内检查项目指导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
									<p>2. 身体调理指导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
									<p>3. 病史收集与整理&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
									<p>4. 病史及文件翻译&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
									<p>5. 国外专家远程会诊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
									<p>6. 签证办理指导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
									<p>7. 行程规划和食住行预定</p>
								</div>
							</div>
							<div className='t-center'><div className='i_arrowTip' /></div>
							<div className='t-center'>
								<div className='serveBox'>
									<div>赴美就医</div>
									<p>1. 专车接送&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
									<p>2. 治疗过程全程跟踪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
									<p>3. 专业配诊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
									<p>4. 目的地旅游指导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
									<p>5. 专业地陪全程服务&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
									<p></p>
								</div>
							</div>
							<div className='t-center'><div className='i_arrowTip' /></div>
							<div className='t-center'>
								<div className='serveBox'>
									<div>孕期指导</div>
									<p>孕期跟进孕期全程健康指导</p>
								</div>
							</div>
					</div>
					<Footer />
				</div>
		);
	}
});