/**
 * Created by Administrator on 2016/10/8 0008.
 */
(function($){
  console.log(Elevator.steps);
  var startTouch=0;
  var moveTouch=0;
  $('#webView').bind("touchstart",function(event){
    var touchpros =event.touches[0];
    startTouch=touchpros.clientY;
  });
  $('#webView').bind("touchmove",function(event){
    var touchpros =event.touches[0];
    //console.log(touchpros);
    moveTouch=touchpros.clientY;
    var offsetTouch=moveTouch-startTouch;
    var tops= parseFloat($("#webView").css("top"));
    console.log(tops);
    if(offsetTouch>0){
      console.log("向下移动");
    }else if(offsetTouch<0){
      console.log("向上移动");
      $("#webView").css("top",-Elevator.steps+"px");
    }
  });
  $('#webView').bind("touchend",function(){
    var touchpros =event.touches[0];

  });
  $('#webView').bind("touchcancel",function(){
    var touchpros =event.touches[0];

  });
})(Zepto);