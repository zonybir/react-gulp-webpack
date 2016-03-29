var React = require ('react');
module.exports=React.createClass({
	componentDidMount:function(){
			(function(m, ei, q, i, a, j, s) {
	        m[a] = m[a] || function() {
	                (m[a].a = m[a].a || []).push(arguments)
	            };
	        j = ei.createElement(q),
	            s = ei.getElementsByTagName(q)[0];
	        j.async = true;
	        j.charset = 'UTF-8';
	        j.src = i;
	        s.parentNode.insertBefore(j, s)
	    })(window, document, 'script', '//eco-api.meiqia.com/dist/meiqia.js', '_MEIQIA');
			_MEIQIA('entId', 4764);
			_MEIQIA('withoutBtn', true);
	},
	showMQ:function(){
			_MEIQIA._SHOWPANEL();
	},
	render:function(){
		return (
				<div className='footer clearfix'>
						<div className='share'>
								<a href='./index.html'> </a>
						</div>
						<div className='phone'>
								<a href="tel:4006120020"></a>
						</div>
						<div className='connect'>
								<a href="javascript:void(0)" onClick={this.showMQ} />
						</div>
				</div>
		)
	}
})