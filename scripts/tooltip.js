$(function () {
  var x = 10;
  var y = 20;
  $("a.tooltip").mouseover(function (e) {
    this.myTitle = this.title;
    this.title = "";
    var tooltip = "<div id='tooltip'>" + this.myTitle + "</div>"; //创建 div 元素
    $("body").append(tooltip); //把 div 元素追加到文档中
    $("#tooltip")
      .css({
        "top": (e.pageY + y) + "px",
        "left": (e.pageX + x) + "px"
      }).show("fast"); //设置 x 坐标和 y 坐标，并且显示
  }).mouseout(function () {
    this.title = this.myTitle;
    $("#tooltip").remove(); //移除
  }).mousemove(function (e) {
    $("#tooltip")
      .css({
        "top": (e.pageY + y) + "px",
        "left": (e.pageX + x) + "px"
      });
  });
})