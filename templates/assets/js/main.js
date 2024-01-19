// 变黑函数
function setDark() {
  localStorage.setItem("isDarkMode", "1");
  document.documentElement.classList.add("dark");
}
// 变白函数
function removeDark() {
  localStorage.setItem("isDarkMode", "0");
  document.documentElement.classList.remove("dark");
}
// switch按钮
function switchDarkMode() {
  let isDark = localStorage.getItem("isDarkMode");
  if (isDark == '1') {
    removeDark();
  } else {
    setDark();
  }
}


//到某个高度后，给某个div加class
$(window).scroll(function () {
  if ($(window).scrollTop() > 900) {
    $('.headbox').addClass('fixednav');
  }
  else {
    $('.headbox').removeClass('fixednav');
  }
});



//table预设calss
$('.meapost table').addClass("table");

const isDark= localStorage.getItem("isDarkMode");
if(isDark==="1"){
  document.documentElement.classList.add('dark');
}else{
  document.documentElement.classList.remove('dark');
}

// 返回顶部
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;

function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  // 计算整屏的高度
  const oneScreenHeight = rootElement.clientHeight;

  if (rootElement.scrollTop > oneScreenHeight) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);



//锚点
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 10;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

$(function () {
  $(".meapost").find("a").attr("target", "_blank");
});
$(function () {
  beiciAll();
});
function getFirstCharacter(title) {
  // 去除字符串中的非字母、非汉字字符
  title = title.replace(/[^\u4e00-\u9fa5a-zA-Z]/gu, '');

  // 使用正则表达式匹配标题中的第一个汉字或字母
  var matches = title.match(/^[\u4e00-\u9fa5a-zA-Z]/u);

  // 如果匹配到，则返回第一个匹配项
  if (matches !== null && matches.length > 0) {
      var firstCharacter = matches[0];
      if (firstCharacter.toLowerCase() === firstCharacter) {
          firstCharacter = firstCharacter.toUpperCase();
      }
      return firstCharacter;
  }

  // 如果没有匹配到字母，则返回下一个字母
  matches = title.match(/[a-zA-Z]/);

  // 如果匹配到字母，则返回第一个匹配项
  if (matches !== null && matches.length > 0) {
      var firstCharacter = matches[0];
      if (firstCharacter.toLowerCase() === firstCharacter) {
          firstCharacter = firstCharacter.toUpperCase();
      }
      return firstCharacter;
  }

  // 如果都没有匹配到，则返回默认值，可以根据需求修改
  return 'M';
}
function beiciAll(){
  $(".beici, .post_beici, post_beici").each(function() {
    var beici = $(this).data("text");
    var beici_f = getFirstCharacter(beici);
    $(this).text(beici_f);
  });
}