$(function () {
  $("#jnProitem ul.imgList li a").bind("click", function () {
    var imgSrc = $(this).find("img").attr("src");
    var i = imgSrc.lastIndexOf(".");
    var unit = imgSrc.substring(i);
    imgSrc = imgSrc.substring(0, i);
    var imgSrcBbig = imgSrc + "_big" + unit;
    $("#thickImg").attr("href", imgSrcBbig);
  });
});