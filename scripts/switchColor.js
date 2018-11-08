$(function () {
  $(".color_change ul li img").click(function () {
    $(this).addClass("hover")
      .parent().siblings().find("img").removeClass("hover");
    var imgSrc = $(this).attr("src");
    var i = imgSrc.lastIndexOf(".");
    var unit = imgSrc.substring(i);
    imgSrc = imgSrc.substring(0, i);
    var imgSrcBsmall = imgSrc + "_one_small" + unit;
    var imgSrcBbig = imgSrc + "_one_big" + unit;
    $("#bigImg").attr({
      "src": imgSrcBsmall
    });
    $("#thickImg").attr("href", imgSrcBbig);
    var alt = $(this).attr("alt");
    $(".color_change strong").text(alt);
    var newImgSrc = imgSrc.replace("images/pro_img/", "");
    $("#jnProitem .imgList li").hide();
    $("#jnProitem .imgList").find(".imgList_" + newImgSrc).show();
  });
});