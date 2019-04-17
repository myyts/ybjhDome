$('#slider li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	switch($(this).attr("data-id")){
		case "xingzhengxuke":$("#changeImg").attr('src',"../image/fuwu1.jpg");
			break;
		case "chaxunfuwu":$("#changeImg").attr('src',"../image/fuwu2.jpg");
			break;
		default:
			break;
	}
})

var name = GetRequest().name;
if(name === 'renshenxian'){
    $("#changeImg").attr('src',"../image/renshenxian.jpg");
}
else if(name === 'gongkaiguiding'){
    $('.active').removeClass('active');
    $("#changeImage").attr('src',"../image/gongkaiguiding.png");
}
switch(name){
		case "xingzhengxuke":$("#changeImg").attr('src',"../image/fuwu1.jpg");addActive();
			break;
		case "chaxunfuwu":$("#changeImg").attr('src',"../image/fuwu2.jpg");addActive();
			break;
   		 case "renshenxian":$("#changeImg").attr('src',"../image/renshenxian.jpg");
       		 break;
		default:
			break;
	}


function addActive(){
	$('#slider li').each(function(i,v){
		$(this).removeClass('active');
		if($(this).attr("data-id") === name){
			$(this).addClass('active')
		}
	})
}
function GetRequest() {  
   var url = location.search; //获取url中"?"符后的字串  
   var theRequest = new Object();  
   if (url.indexOf("?") != -1) {  
	  var str = url.substr(1);  
	  strs = str.split("&");  
	  for(var i = 0; i < strs.length; i ++) {  
		 theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
	  }  
   }  
   return theRequest;  
}  
