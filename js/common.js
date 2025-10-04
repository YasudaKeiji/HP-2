$(".h-open").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass('active');
  //ボタン自身に activeクラスを付与する
  $("#h-nav").toggleClass('panelactive');
  //ナビゲーションにpanelactiveクラスを付与する
});

$("#h-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".h-open").removeClass('active');
  //ボタンの activeクラスを除去して
  $("#h-nav").removeClass('panelactive');
  //ナビゲーションのpanelactiveクラスも除去する
});

// 画像要素を取得
const img = document.querySelector('.service-wrapper__body__right__con__img img');

// 画像の縦幅(px)
const height = img.clientHeight;

// CSSのカスタム変数にセット
document.documentElement.style.setProperty('--img-height', `${height}px`);
