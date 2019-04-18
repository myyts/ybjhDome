$('#slider li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	switch($(this).attr("data-id")){
		case "zhengcefagui":
			$("#changeImage").attr('src',"../image/zhengcefagui.jpg"); $(".ab").css("display","none");
			$("#changeJigou").attr('src',"../image/zhengcefaguitt.jpg");
			break;
		case "gonggaotongzhi":$("#changeImage").attr('src',"../image/gonggaotongzhi.jpg"); $(".ab").css("display","none");$(".nei_she").attr("display","block")
			break;
		case "zhengcefagui":$("#changeImage").attr('src',"../image/zhengcefagui.jpg"); $(".ab").css("display","none");
			break;
		case "xingzhengxuke":
			$("#changeImage").attr('src',"../image/xingzhengxuke.jpg"); $(".ab").css("display","none");
			$("#changeJigou").attr('src',"../image/xingzhengxuket.jpg");
			break;
		case "xingzhengchufa":
			$("#changeImage").attr('src',"../image/xingzhengchufa.jpg"); $(".ab").css("display","none");
			$("#changeJigou").attr('src',"../image/xingzhengchufat.jpg");
			break;
		case "xingzhengjianguancuoshi":$("#changeImage").attr('src',"../image/xingzhengjianguancuoshi.jpg"); $(".ab").css("display","none");
			break;
		case "renshixinxi":$("#changeImage").attr('src',"../image/renshixinxi.jpg"); $(".ab").css("display","none");
			break;
		case "lianxifangshi":$("#changeImage").attr('src',"../image/lianxifangshi.jpg"); $(".ab").css("display","none");
			break;
		case "lianxifangshi":$("#changeImage").attr('src',"../image/lianxifangshi.jpg"); $(".ab").css("display","none");
			break;
		default:
			break;
	}
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
	$('.xingzhengxuke').addClass('active').addClass('active');
	$("#changeImage").attr('src',"../image/xingzhengxuke.jpg");
	$("#changeJigou").attr('src',"../image/xingzhengxuket.jpg");
}
else if(name === 'xingzhengchufa'){
	$('.active').removeClass('active');
	$('.xingzhengchufa').addClass('active');
	$("#changeImage").attr('src',"../image/xingzhengchufa.jpg");
	$("#changeJigou").attr('src',"../image/xingzhengchufat.jpg");
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
	$('.zhengcefagui').addClass('active');
	$("#changeImage").attr('src',"../image/zhengcefagui.jpg");
	$("#changeJigou").attr('src',"../image/zhengcefaguitt.jpg");
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