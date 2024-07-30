$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    position += -8vh;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
 下から飛び出るスムーススクロール
//$(function(){
//  var pageTop = $(".pagetop");
//  pageTop.click(function(){
//    $('body, html').animate({ scrollTop: 0 }, 500);
//    return false;
//  });
//  $(window).scroll(function(){
//    if($(this).scrollTop() >= 200){
//      pageTop.css( "bottom", "25px" );
//    } else{
//      pageTop.css( "bottom", "-80px" );
//    }
//  });
//});

//ふわっと出てくるスム－ス
//$(function(){
//  var pagetop = $("#pagetop");
//  $(window).scroll(function(){
//    if($(this).scrollTop() > 300){
//      pagetop.fadeIn();
//    }else{
//      pagetop.fadeOut();
//    }
//  });
//  pagetop.click(function(){
//    $("body,html").animate({scrollTop:0},800);
//    return false;
//  });
//});
 
    $(function() {
      var pagetop = $('#pagetop'); //.pagetopを変数pageTopに格納
      $(window).scroll(function() { //スクロールをすると{}の中を実行
        if ($(this).scrollTop() > 100) { //$(this).scrollTop()でスクロール位置の値を取得。位置が100pxより大きければ
          pagetop.fadeIn(); //pageTopをフェードイン表示
        } else { //位置が100より大きくなければ
          pagetop.fadeOut(); //pageTopをフェードアウト非表示
        }
      });
      pagetop.click(function() { //pageTopをクリックすると{}の中を実行
        $('body, html').animate({
          scrollTop: 0
        }, 300); //animate()で500ミリ秒後にscrollTopを0位置に
        return false; //a要素を無効化
      });
    });
  