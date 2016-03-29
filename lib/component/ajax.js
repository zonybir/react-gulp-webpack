      
function zony(){
    this.xmlHttpRequest='';
    t=this;
    //XmlHttpRequest对象    
    this.createXmlHttpRequest=function(){    
        if(window.ActiveXObject){ //如果是IE浏览器    
            return new ActiveXObject("Microsoft.XMLHTTP");    
        }else if(window.XMLHttpRequest){ //非IE浏览器    
            return new XMLHttpRequest();    
        }    
    }    
        
    this.ajax=function(callback){    
       // userName = document.f1.username.value;    
        //passWord = document.f1.password.value;      
            
        //var url = "LoginServlet?username="+userName+"&password="+passWord+"";         
        //1.创建XMLHttpRequest组建    
        t.xmlHttpRequest = t.createXmlHttpRequest();    
            
        //2.设置回调函数    
        t.xmlHttpRequest.onreadystatechange =function(){    
            if(t.xmlHttpRequest.readyState == 4 && t.xmlHttpRequest.status == 200){    
                var result = t.xmlHttpRequest.responseText;
                result=eval('(' + result + ')')
                callback(result);        
            }    
        } ;    
              
    }
}  
    
//回调函数    
 
module.exports={
    GET:function(url,callback){
            var t=new zony();
            t.ajax(callback);
    //3.初始化XMLHttpRequest组建    
            t.xmlHttpRequest.open("GET",url,true);    
        
    //4.发送请求    
            t.xmlHttpRequest.send(null);
    },
    POST:function(url,data,callback){
            var t=new zony();
            t.ajax(callback);
            t.xmlHttpRequest.open("POST",url,true);      
            t.xmlHttpRequest.send(data);

    }
};