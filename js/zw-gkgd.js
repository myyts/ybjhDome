$('#slider li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	switch($(this).attr("data-id")){
		case "gongkaiguiding":$("#changeImage").attr('src',"../image/gongkaiguiding.jpg"); $(".ab").css("display","none");
			break;
		case "gongkaizhinan":$("#changeImage").attr('src',"../image/gongkaizhinan.jpg"); $(".ab").css("display","none");
			break;
		case "gongkaimulu":$("#changeImage").attr('src',"../image/gongkaimulu.jpg"); $(".ab").css("display","none");
			break;
		case "yishenqinggongkai":$("#changeImage").attr('src',"../image/yishenqinggongkai.jpg"); $(".ab").css("display","none");
			break;
		case "niandubaogao":$("#changeImage").attr('src',"../image/niandubaogao.jpg"); $(".ab").css("display","none");
			break;
		default:
			break;
	}
})
//$(".lssj").css("display","none")
$("#gkml").click(function(){
	$(".lssj").css("display","block")
})
var name = GetRequest().name;
console.log(name)
if(name === 'gongkaimulu'){
	$('.active').removeClass('active');
	$("#changeImage").attr('src',"../image/gongkaimulu.jpg");
}
else if(name === 'gongkaiguiding'){
	$('.active').removeClass('active');
	$("#changeImage").attr('src',"../image/gongkaiguiding.png");
}
else if(name === 'gongkaizhinan'){
	$('.active').removeClass('active');
	$("#changeImage").attr('src',"../image/gongkaizhinan.jpg");
}
else if(name === 'niandubaogao'){
	$('.active').removeClass('active');
	$("#changeImage").attr('src',"../image/niandubaogao.jpg");
}
else if(name === 'xingzhengxuke'){
	$('.active').removeClass('active');
	$('.xingzhengxuke').addClass('active');
	$("#changeImage").attr('src',"../image/xingzhengxuke.jpg");
}
else if(name === 'xingzhengchufa'){
	$('.active').removeClass('active');
	$('.xingzhengchufa').addClass('active');
	$("#changeImage").attr('src',"../image/xingzhengchufa.jpg");
}
else if(name === 'xingzhengjianguancuoshi'){
	$('.active').removeClass('active');
	$('.xingzhengjianguancuoshi').addClass('active').addClass('active');
	$("#changeImage").attr('src',"../image/xingzhengjianguancuoshi.jpg");
}
else if(name === 'gonggaotongzhi'){
	$('.active').removeClass('active');
	$('.gonggaotongzhi').addClass('active').addClass('active');
	$("#changeImage").attr('src',"../image/gonggaotongzhi.jpg");
}
else if(name === 'zhengcefagui'){
	$('.active').removeClass('active');
	$('.zhengcefagui').addClass('active').addClass('active');
	$("#changeImage").attr('src',"../image/zhengcefagui.jpg");
}
else if(name === 'renshixinxi'){
	$('.active').removeClass('active');
	$('.renshixinxi').addClass('active').addClass('active');
	$("#changeImage").attr('src',"../image/renshixinxi.jpg");
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