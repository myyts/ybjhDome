$('#slider li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	switch($(this).attr("data-id")){
		case "zhuyaozhize":$("#changeImg").attr('src',"../image/zhuyaozhize.jpg"); $(".ab").css("display","none");
			break;
		case "huilingdao":$("#changeImg").attr('src',"../image/huilingdao.jpg"); $(".ab").css("display","none"); $("._huilingdao").css("display","block")
			break;
		case "neishejigou":$("#changeImg").attr('src',"../image/neishejigou.jpg"); $(".ab").css("display","none");$(".nei_she").css("display","block")
			break;
		case "paichujigou":$("#changeImg").attr('src',"../image/paichujigou.jpg"); $(".ab").css("display","none");
			break;
		case "lianxifangshi":$("#changeImg").attr('src',"../image/lianxifangshi.jpg"); $(".ab").css("display","none");
			break;
		default:
			break;
	}
})


var name = GetRequest().name;
console.log(name);
if(name === 'header'){
	$(".cont_left").css("display","none");
	$(".jumpNew").css("display","block !important");
	$("#changeImg").attr("src","../image/jg_head.jpg")
}
switch(name){
	case "zhuyaozhize":$("#changeImg").attr('src',"../image/zhuyaozhize.jpg");$(".ab").css("display","none");addActive() 
		break;
	case "huilingdao":$("#changeImg").attr('src',"../image/huilingdao.jpg");$(".ab").css("display","none");$("._huilingdao").css("display","block"); addActive() 
		break;
	case "neishejigou":$("#changeImg").attr('src',"../image/neishejigou.jpg");$(".ab").css("display","none"); addActive();$(".nei_she").css("display","block") 
		break;
	case "paichujigou":$("#changeImg").attr('src',"../image/paichujigou.jpg");$(".ab").css("display","none"); addActive() 
		break;
	case "lianxifangshi":$("#changeImg").attr('src',"../image/lianxifangshi.jpg");$(".ab").css("display","none"); addActive() 
		break;
	case "bangongting":$("#changeImg").attr('src',"../image/bangongting.jpg");$(".cont_left").css("display","none");
	$(".jumpNew").css("display","block !important");$(".ab").css("display","none"); addActive() 
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

