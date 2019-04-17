$('#slider li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	switch($(this).attr("data-id")){
		case "jianguandongtai":$("#changeImg").attr('src',"../image/jianuandongtai.jpg"); $(".ab").css("display","none");$(".open").removeClass('open');
			return;break;
		case "zhengcejiedu":$("#changeImg").attr('src',"../image/zhengcejiedu.jpg"); $(".ab").css("display","none");$(".open").removeClass('open');
			return;break;
		case "lingdaohuodongjijianghua":$("#changeImg").attr('src',"../image/lingdaohuodongjijianghua.jpg"); $(".ab").css("display","none");$(".nei_she").attr("display","block");$(".open").removeClass('open');
			return;break;
		case "xinwenfayanren":$("#changeImg").attr('src',"../image/xinwenfayanren.jpg"); $(".ab").css("display","none");$(".nei_she").attr("display","block");$(".open").removeClass('open');
			return;break;
		case "xinwenfabujifangtan":$("#changeImg").attr('src',"../image/xinwenfabujifangtan.jpg"); $(".ab").css("display","none");$(".nei_she").attr("display","block");$(".open").removeClass('open');$(".fabujifangtan").css("display","block")
			return;break;
		default:
			break;
	}
})
$('._xinwenfabuzhongxin').click(function(){
	$('.zhibo').addClass('smallFont');
	$('.newMan').removeClass('smallFont');
	$("#changeImg").attr('src',"../image/xinwenfabujifangtan.jpg");
})
$('.zhibo').click(function(e){
	e.stopPropagation();
	$('.newMan').removeClass('smallFont');
	$('.zhibo').addClass('smallFont');
	$("#changeImg").attr('src',"../image/xinwenfabujifangtan.jpg");
})
$('.newMan').click(function(e){
	e.stopPropagation();
	$('.zhibo').removeClass('smallFont');
	$('.newMan').addClass('smallFont');
	$("#changeImg").attr('src',"../image/xinwenfayanren.jpg");
})
var name = GetRequest().name;
console.log(name)
if(name === 'xinwenfabu'){
	$('.active').removeClass('active');
	$('._xinwenfabuzhongxin').addClass('active');
	$('.zhibo').addClass('smallFont');
	$('.newMan').removeClass('smallFont');
	$("#changeImg").attr('src',"../image/xinwenfabujifangtan.jpg");
}
else if(name === 'xinwenfayanren'){
	$('.active').removeClass('active');
	$('._xinwenfabuzhongxin').addClass('open').addClass('active');
	$('.zhibo').addClass('smallFont');
	$('.newMan').removeClass('smallFont');
	$('.zhibo').removeClass('smallFont');
	$('.newMan').addClass('smallFont');
	$("#changeImg").attr('src',"../image/xinwenfayanren.jpg");
}
else if(name === "fabujifangtan"){
	$(".cont_left").css("display","none");
	$('.active').removeClass('active');
	$("#changeImg").attr('src',"../image/fabujifangtan.jpg");
}
switch(name){
		case "jianguandongtai":$("#changeImg").attr('src',"../image/jianuandongtai.jpg"); $(".ab").css("display","none");$(".open").removeClass('open');addActive();
			break;
		case "zhengcejiedu":$("#changeImg").attr('src',"../image/zhengcejiedu.jpg"); $(".ab").css("display","none");$(".open").removeClass('open');addActive();
			break;
		case "lingdaohuodongjijianghua":$("#changeImg").attr('src',"../image/lingdaohuodongjijianghua.jpg").css({
			"width":"859px"
		}); $(".ab").css("display","none");$(".nei_she").attr("display","block");$(".open").removeClass('open');addActive();
			break;
		case "xinwenfayanren":$("#changeImg").attr('src',"../image/xinwenfayanren.jpg"); $(".ab").css("display","none");$(".open").removeClass('open');addActive();
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
