/**
 * Created by Administrator on 2016/9/18 0018.
 */
//声明一个电梯对象
//  点击右侧li按钮跳转到某个楼层
  //或者向上滑跳转到下一个page页
  //楼层跳转示例中竖轮播对象的属性方法有moveSteps和初始化init以及属性steps
/*****v1版*****/
/*var Carousel={
  steps:window.innerHeight,
  //timer:null,
  index:null,
  indexElem:null,
  movepeIndex:null,
  init:function(){
    //将this保存下来 self-->Carousel
    var self=this;
    $.each($('.page'),function(){
      this.style.height=self.steps+"px";
      //遍历page数组为每个page添加height样式
    })
  },
  move:function(e){
    //点击按钮时切换至不同的page页面
    var target= e.target;
    //点击切换按钮的状态
    //不同的page也显示需要改变其top值，增加top，删除top
    //不同的页面添加而top值也不同
    //page1: top:0
    //page2: top:-window.innerHeight*target.dataset.i
    this.index=target.dataset.i;
    this.indexElem=$($("#webView div")[this.index])
    this.indexElem.css("top",-(this.steps*this.index));
    this.indexElem.css("z-index",5);
    this.moveInit();
    $(target).addClass('hover');
    $(target).siblings().removeClass('hover');
  },
  moveInit:function(){
    this.movepeIndex=$(".hover")[0].dataset.i;
    $($("#webView div")[this.movepeIndex]).css("top",this.steps*this.movepeIndex);
    this.indexElem.siblings("div").css("z-index",0);
  }

}
window.onload=function(){
  Carousel.init();
  $('.btn').on('click',function(e){
    Carousel.move(e);
  })
}
*/
/*****v2*****/
var Elevator={
  steps:window.innerHeight,
  index:null,
  init:function(){
    //将this保存下来 self-->Carousel
    var self=this;
    $.each($('.page'),function(){
      this.style.height=self.steps+"px";
      //遍历page数组为每个page添加height样式
    })
  },
  moveSteps:function(e){
    var target= e.target;
    this.index=target.dataset.i;
    $("#webView").css("top",-this.index*this.steps);
    $(target).addClass('hover');
    $(target).siblings().removeClass('hover');
  }
}
window.onload=function(){
  Elevator.init();
  $('.btn').on('click',function(e){
    Elevator.moveSteps(e);
  })
}