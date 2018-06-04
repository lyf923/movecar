$(function(){
	//弹出选择地区遮罩
	popSelArea();
	//弹出框点击关闭
	closePopBox();
	//点击右侧栏滚动到对应位置
	scrollToView();
	//搜索结果选择
	selSearchResult();
	//热门地区选择
	selHotPlace();
	//当前定位选择
	selLocation();
	//获取验证码
	getCode();
});
//弹出框点击关闭
function closePopBox(){
	$(".m-popBox .back").click(function(){
		var that=$(this);
		if(that.parents(".m-popBox").attr("data-name")=="buycar"){
			closePop1(that);
		}else{
			closePop(that);
		}
	});
}
// 关闭弹出层
function closePop(obj){
	$("body").removeClass("ovh");
	obj.parents(".m-popBox").css("transform","translate3d(100%, 0px, 0px)");
}
// 关闭弹出层
function closePop1(obj){
	$(".m-filter a").removeClass("on");
	$("body").removeClass("ovh");
	obj.parents(".m-popBox").css("transform","translate3d(100%, 0px, 0px)");
}
function closePop2(obj){
	obj.parents(".m-popBox").css("transform","translate3d(100%, 0px, 0px)");
}
//弹出选择地区遮罩
function popSelArea(){
	var obj=$(".js-popSelArea");
	obj.focus(function(event) {
		obj.blur();
	});
	obj.click(function(){
		var that=$(this);
		$("body").addClass("ovh");
		$(".m-selCity").css("transform","translate3d(0, 0px, 0px)");
	});
}
//选择城市后赋值
function changeCity(){
	$(".m-selCity .ul-arealist a").click(function(){
		var that=$(this);
		var cityName;
		if(that.hasClass('js-all')){
			cityName=that.parents(".m-selCity").find("h1").text();
		}else{
			cityName=that.text();
		}
		var popBtn=$(".js-popSelArea");
		if(popBtn.attr("type")=="text"){
			popBtn.val(cityName);
		}else{
			popBtn.text(cityName);
		}
		closePop(that);
	});
}

//点击右侧栏滚动到对应位置
function scrollToView(){
	$(".js-tagTab li").click(function(){
		var that=$(this);
		var popBox=that.parents(".m-popBox");
		var viewId='#'+that.data("id");
		var hd_H=popBox.find(".g-header2").outerHeight();
		var scrollBox=popBox.find(".g-main");
		var scrollT=$(viewId).offset().top+scrollBox.scrollTop()-hd_H;
		console.log(scrollT);
		scrollBox.animate({
			'scrollTop':scrollT
		}, 0);
	});
}
//搜索结果选择
function selSearchResult(){
	$(".m-result1").on("click","li a",function(){
		var that=$(this);
		var cityName=that.text();
		var popBtn=$(".js-popSelArea");
		if(popBtn.attr("type")=="text"){
			popBtn.val(cityName);
		}else{
			popBtn.text(cityName);
		}
		closePop(that);
	});
}
//热门地区选择
function selHotPlace(){
	$(".ul-hot").on("click","li a",function(){
		var that=$(this);
		var cityName=that.text();
		var popBtn=$(".js-popSelArea");
		if(popBtn.attr("type")=="text"){
			popBtn.val(cityName);
		}else{
			popBtn.text(cityName);
		}
		closePop(that);
	});
}
//当前定位选择
function selLocation(){
	$(".m-cityBox .location").on("click","a",function(){
		var that=$(this);
		var cityName=that.text();
		var popBtn=$(".js-popSelArea");
		if(popBtn.attr("type")=="text"){
			popBtn.val(cityName);
		}else{
			popBtn.text(cityName);
		}
		closePop(that);
	});
}
