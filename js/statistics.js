$('#slider li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	switch($(this).attr("data-id")){
		case "tongjixinxi":
			$("#changeImg").attr('src',"../image/statistics_03.jpg");
			$("#changeJigou").attr('src',"../image/tonjitit_03.jpg");
			break;
		case "shujutubiao":
			$("#changeImg").attr('src',"../image/shujutubiao.jpg");
			$("#changeJigou").attr('src',"../image/shujutit.jpg");
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
if(name === 'shujutubiao'){
	$('.active').removeClass('active');
	$('.shujutubiao').addClass('active');
	$("#changeImg").attr('src',"../image/shujutubiao.jpg");
}
else if(name === 'tongjixinxi'){
	$('.active').removeClass('active');
	$('.tongjixinxi').addClass('active');
	$("#changeImg").attr('src',"../image/tongjixinxi.jpg");
}
switch(name){
		case "shujutubiao":
			$("#changeImg").attr('src',"../image/shujutubiao.jpg"); $(".ab").css("display","none");$(".open").removeClass('open');addActive();
			$("#changeJigou").attr('src',"../image/shujutit.jpg");
			break;
		case "tongjixinxi":
			$("#changeImg").attr('src',"../image/statistics_03.jpg"); $(".ab").css("display","none");$(".open").removeClass('open');addActive();
			$("#changeJigou").attr('src',"../image/tonjitit_03.jpg");
			break;
		case "lingdaohuodongjijianghua":$("#changeImg").attr('src',"../image/neishejigou.jpg"); $(".ab").css("display","none");$(".nei_she").attr("display","block");$(".open").removeClass('open');
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
