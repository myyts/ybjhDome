$('#slider li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$(".open").removeClass('open')
})
$("._zhengwuzixun").click(function(){
	$(this).addClass('open').css("height","9rem").siblings().removeClass('smallFont');
	$('._zixun').addClass('smallFont');
	$("#changeImg").attr('src',"../image/zixun1.jpg");
})
$("._zhengjidiaocha").click(function(){
	$("._zhengwuzixun").css("height","3.0625rem")
	$(this).addClass('open').siblings().removeClass('smallFont');
	$('._yijian').addClass('smallFont');
	$("#changeImg").attr('src',"../image/zixun5.jpg");
})
$("._yijian").click(function(e){
	e.stopPropagation();
	$("._zhengwuzixun").css("height","3.0625rem")
	$('._yijian').addClass('smallFont');
	$('._jieguo').removeClass('smallFont');
	$("#changeImg").attr('src',"../image/zixun5.jpg");
})
$("._jieguo").click(function(e){
	e.stopPropagation();
	$("._zhengwuzixun").css("height","3.0625rem")
	$('._jieguo').addClass('smallFont');
	$('._yijian').removeClass('smallFont');
	$("#changeImg").attr('src',"../image/zixun6.jpg");
})


$("._zixun").click(function(e){
	e.stopPropagation();
	$('._zixun').addClass('smallFont').siblings().removeClass('smallFont');
	$("#changeImg").attr('src',"../image/zixun1.jpg");
})

$("._liuyan").click(function(e){
	e.stopPropagation();
	$('._liuyan').addClass('smallFont').siblings().removeClass('smallFont');
	$("#changeImg").attr('src',"../image/zixun3.jpg");
})

$("._tongji").click(function(e){
	e.stopPropagation();
	$('._tongji').addClass('smallFont').siblings().removeClass('smallFont');
	$("#changeImg").attr('src',"../image/zixun4.jpg");
})

$("._xiaofeizhetousu").click(function(e){
	e.stopPropagation();
	$("._zhengwuzixun").css("height","3.0625rem")
	$('._xiaofeizhetousu').addClass('smallFont').siblings().removeClass('smallFont');
	$("#changeImg").attr('src',"../image/xiaofeizhe.jpg");
})
$("._xinfang").click(function(e){
	e.stopPropagation();
	$("._zhengwuzixun").css("height","3.0625rem")
	$('._xinfang').addClass('smallFont').siblings().removeClass('smallFont');
	$("#changeImg").attr('src',"../image/xinfang.jpg");
})
$("._jijian").click(function(e){
	e.stopPropagation();
	$('._jijian').addClass('smallFont').siblings().removeClass('smallFont');
	$("#changeImg").attr('src',"../image/xinfang.jpg");
})

var name = GetRequest().name;

if(name === 'zhengqiuyijian'){
	$("._zhengwuzixun").css("height","3.0625rem")
	$('._yijian').addClass('smallFont');
	$('._jieguo').removeClass('smallFont');
	$("#changeImg").attr('src',"../image/zixun5.jpg");
	$("._zhengjidiaocha").addClass('active open').siblings().removeClass('active')
}
else if(name === 'zhengjijieguo'){
	$("._zhengwuzixun").css("height","3.0625rem")
	$('._jieguo').addClass('smallFont');
	$('._yijian').removeClass('smallFont');
	$("#changeImg").attr('src',"../image/zixun6.jpg");
	$("._zhengjidiaocha").addClass('active open').siblings().removeClass('active')
}
else if(name === 'zhengwuzixun'){
	$('._zhengwuzixun').addClass('open').css("height","9rem");
	$('._zixun').addClass('smallFont');
	$("#changeImg").attr('src',"../image/zixun1.jpg");
}
else if(name === 'jijianjianchajubao'){
	$(".active").removeClass('active');
	$('._jijian').addClass('active').addClass('smallFont').siblings().removeClass('smallFont');
	$("#changeImg").attr('src',"../image/xinfang.jpg");
}
else if(name === 'xiaofeizhetousu'){
	$(".active").removeClass('active');
	$("._zhengwuzixun").css("height","3.0625rem")
	$('._xiaofeizhetousu').addClass('smallFont active').siblings().removeClass('smallFont');
	$("#changeImg").attr('src',"../image/xiaofeizhe.jpg");
}
else if(name === 'xinfang'){
	$(".active").removeClass('active');
	$("._zhengwuzixun").css("height","3.0625rem")
	$('._xinfang').addClass('smallFont active').siblings().removeClass('smallFont');
	$("#changeImg").attr('src',"../image/xinfang.jpg");
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
