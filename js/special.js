$('#slider li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	switch($(this).attr("data-id")){
		case "zhichiweiqiye":$("#changeImg").attr('src',"../image/special_03.jpg");$(".open").removeClass("open");$(".xiaofeizhebaohu").css("height","49px");
			break;
		case "zhichisannong":$("#changeImg").attr('src',"../image/special_03.jpg");$(".open").removeClass("open");$(".xiaofeizhebaohu").css("height","49px");
			break;
		case "chuzhi":$("#changeImg").attr('src',"../image/special_03.jpg");$(".open").removeClass("open");$(".xiaofeizhebaohu").css("height","49px");
			break;
		case "zhengfuwangzhan":$("#changeImg").attr('src',"../image/zhengcejiedu.jpg");$(".open").removeClass("open");$(".xiaofeizhebaohu").css("height","49px");
			break;
		case "xiaofeibaohu":$("#changeImg").attr('src',"../image/xiaofeizhejiaoyu.jpg");$(".xiaofeizhebaohu").css("height","169px").addClass("open");
			break;
		case "buchangjizhi":$("#changeImg").attr('src',"../image/special_03.jpg");$(".open").removeClass("open");$(".xiaofeizhebaohu").css("height","49px");
			break;
		case "guojiaxianfa":$("#changeImg").attr('src',"../image/special_03.jpg");$(".open").removeClass("open");$(".xiaofeizhebaohu").css("height","49px");
			break;
		default:
			break;
	}
})
$('._xinwenfabuzhongxin').click(function(){
	$(this).addClass('open');
	$('.zhibo').addClass('smallFont');
	$('.newMan').removeClass('smallFont');
	$("#changeImg").attr('src',"../image/new1.jpg");
})
$('.zhibo').click(function(e){
	e.stopPropagation();
	$('.newMan').removeClass('smallFont');
	$('.zhibo').addClass('smallFont');
	$("#changeImg").attr('src',"../image/new1.jpg");
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
	$('._xinwenfabuzhongxin').addClass('open').addClass('active');
	$('.zhibo').addClass('smallFont');
	$('.newMan').removeClass('smallFont');
	$("#changeImg").attr('src',"../image/new1.jpg");
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
switch(name){
		case "jianguandongtai":$("#changeImg").attr('src',"../image/jianuandongtai.jpg"); $(".ab").css("display","none");$(".open").removeClass('open');addActive();
			break;
		case "zhengcejiedu":$("#changeImg").attr('src',"../image/zhengcejiedu.jpg"); $(".ab").css("display","none");$(".open").removeClass('open');addActive();
			break;
		case "lingdaohuodongjijianghua":$("#changeImg").attr('src',"../image/neishejigou.jpg"); $(".ab").css("display","none");$(".nei_she").attr("display","block");$(".open").removeClass('open');
			break;
		case "xiaofeibaohu":$("#changeImg").attr('src',"../image/xiaofeizhejiaoyu.jpg");$(".ab").css("display","none");$(".open").removeClass('open');addActive();$(".xiaofeizhebaohu").css("height","169px").addClass("open");
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
