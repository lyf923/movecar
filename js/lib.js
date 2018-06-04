// 公共js
$(function(){

});
//一张轮播(不自动轮播)
function oneSlide(obj){
	obj.slick({
		dots:false,
		arrows:false,
		lazyLoad : 'ondemand'
	});
	
}
// 选项卡切换
function tab(obj){
	obj.each(function(){
		var that=$(this);
		that.find("li").click(function(){
			var item=$(this);
			var tab=item.parents("ul");
	        var con='.'+tab.attr("id");
	        var on=tab.find("li").index(this);
	        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
	        $(con).eq(on).show().siblings(con).hide();
		});
	});
}