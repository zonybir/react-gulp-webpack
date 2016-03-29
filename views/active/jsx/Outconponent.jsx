var React = require ('react'),
		Header = require ('../../../lib/component/Header.jsx'),
		HosBanner = require ('./HosBanner.jsx'),
		AddForm = require ('./infoForm.jsx'),
		DoctorInfo = require ('./DoctorInfo.jsx'),
		PubSub = require ('../../../lib/component/pubsub.js');
module.exports=React.createClass({
	getInitialState:function(){
			return {
				title:'zonybir',
				src:'http://7xp79e.com2.z0.glb.qiniucdn.com/H254S_14556752184126.jpg',
				name:'美国生育科学医学中心试管婴儿介绍答疑会',
				name_en:'主讲人: David Harari院长',
				doctor:{src:'http://7xp79h.com2.z0.glb.qiniucdn.com/D452C_14508386363874.jpg',name:'David Harari',info:'院长 医学博士'},
				meeting:"<p>1. 美国生育科学医学中心 (RSMC) 简介</p><br/><p>2. 生育科学医学中心试管婴儿技术介绍<br/>-RSMC一站式试管婴儿解决方案<br/>-RSMC成功率vs. 全美成功率<br/>-赴美试管婴儿流程及注意事项<br/>-赴RSMC中国客户成功案例</p><br/><p>3.互动答疑</p>",
				doctInfo:"<p style='text-align: justify; text-indent: 2em;'>戴维·哈拉里博士将自己28年来积累的医疗专业实践带到了PHYSICIAN’S SURROGACY美国代孕中心和RSMC生育科学医疗中心。哈拉里博士1986年获得妇产医师协会认证，从此开始了自己为不孕不育患者圆生儿育女之梦的职业生涯。针对子宫内膜异位症、子宫肌瘤等各种不孕的病因，哈拉里博士能灵活运用机器人、微创等一系列前沿手术技术加以治疗，显著的疗效再佐以RSMC体外受精、代孕等齐全服务，无数夫妇终能为人父母。</p>"+
									"<p style='text-align: justify; text-indent: 2em;'>哈拉里博士在圣地亚哥的Scripps Mercy医疗中心完成住院医师培训后，在Mercy和Sharp系列医院的多个院委会均有任职。他曾是Sharp Mary Birch妇产科监督委员会和微创手术卓越委员会成员，现为美国妇产科医师协会和美国妇科腹腔镜学会成员。</p>",
				hosInfo:"<p style='text-align: justify; text-indent: 2em;'>RSMC生育科学医学中心是一家业界领先的试管婴儿医疗集团。总部坐落在南加州美丽温暖的圣地亚哥，在洛杉矶等地拥有分诊所、手术中心等。无论患者的国籍，性取向或婚姻状况如何，RSMC都欢迎前来就医。自1995年成立以来，RSMC团队已完成超过4000例试管婴儿病例，超过1500例捐卵、代理病例。RSMC 提供30余种治疗方案，以确保所有患者得到最适合的诊疗。<br/></p>"+
								"<p style='text-align: justify; text-indent: 2em;'>RSMC提供全面的、系统的生育问题解决方案。服务包括经验丰富的诊断,治疗方案,体外受精,代孕,产科/妇科护理和法律顾问。你可以放心,你会有最好的和系统的护理而不必从一个专家转到另一个。此外,RSMC提供保成功/退款计划，这项计划可以在预支付较低的固定费用的情况下最大限度的保证患者的受孕成功率。<br/></p>"+
								"<br /><p style='text-align: justify; text-indent: 2em;'>更多有关RSMC的信息，请<a href='./hospital.html?id=254' style='padding-left:5px;padding-right:5px;color:#00f'>点击此处</a>。<br/></p>",
				showNav:false
			}
	},
	showDialog:function(){
		PubSub.publish('toggleNav', this.state.showNav);
	},
	render:function(){
		return (
				<div className='clearfix'>
				<div className='container'>
					<Header ic='' home='zony'>美国RSMC试管婴儿介绍答疑会</Header>
					<HosBanner src={this.state.src} name_cn={this.state.name} name_en={this.state.name_en} />
					<div className='hosBlock'>
						<p style={{fontSize:'16px',paddingBottom:10}}>会议议程</p>
						<div dangerouslySetInnerHTML={{__html: this.state.meeting}}/>
					</div>
					<div className='hosBlock'>
						<p style={{fontSize:'16px',paddingBottom:10}}>主讲人</p>
						<DoctorInfo src={this.state.doctor.src} name={this.state.doctor.name} info={this.state.doctor.info} />
						<div dangerouslySetInnerHTML={{__html: this.state.doctInfo}} style={{paddingTop:15}} />
					</div>
					<div className='hosBlock'>
						<p style={{fontSize:'16px',paddingBottom:10}}>机构介绍</p>
						<div dangerouslySetInnerHTML={{__html: this.state.hosInfo}}/>
					</div>
					<div className='footer' onClick={this.showDialog}><div style={{width:'100%',backgroundColor:'rgb(234, 98, 144)',textAlign:'center',paddingTop:12}}>点击报名</div></div>
				</div>
				<AddForm />
			</div>

		);
	}
});