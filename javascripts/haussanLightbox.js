
// 點擊項目打開ul選單
//couture
$('#couture .hausennFashionShow__menu__sort__title').click(function(){
      $("#couture .hausennFashionShow__menu__sort__mainmenu").toggleClass("menucontrolOpen");
});

$('#coutureSevenSpringSummer').click(function(event){
      event.stopPropagation();
      $("#coutureSevenSpringSummer .hausennFashionShow__menu__sort__mainmenu__item__submenu").toggleClass("menucontrolOpen");
});

$('#coutureSevenAutumnWinter').click(function(event){
      event.stopPropagation();
      $("#coutureSevenAutumnWinter .hausennFashionShow__menu__sort__mainmenu__item__submenu").toggleClass("menucontrolOpen");
});

$('#couture .hausennFashionShow__menu__sort__mainmenu__item__submenu li').click(function(event){
      event.stopPropagation();
});

//collections
$('#collections .hausennFashionShow__menu__sort__title').click(function(){
      $("#collections .hausennFashionShow__menu__sort__mainmenu").toggleClass("menucontrolOpen");
});

$('#collectionsSevenSpringSummer').click(function(event){
      event.stopPropagation();
      $("#collectionsSevenSpringSummer .hausennFashionShow__menu__sort__mainmenu__item__submenu").toggleClass("menucontrolOpen");
});

$('#collectionsEightAutumnWinter').click(function(event){
      event.stopPropagation();
      $("#collectionsEightAutumnWinter .hausennFashionShow__menu__sort__mainmenu__item__submenu").toggleClass("menucontrolOpen");
});

$('#collections .hausennFashionShow__menu__sort__mainmenu__item__submenu li').click(function(event){
      event.stopPropagation();
});

//seasons
$('#seasons .hausennFashionShow__menu__sort__title').click(function(){
      $("#seasons .hausennFashionShow__menu__sort__mainmenu").toggleClass("menucontrolOpen");
});

$('#seasonsSevenSpringSummer').click(function(event){
      event.stopPropagation();
      $("#seasonsSevenSpringSummer .hausennFashionShow__menu__sort__mainmenu__item__submenu").toggleClass("menucontrolOpen");
});

$('#seasonsSevenAutumnWinter').click(function(event){
      event.stopPropagation();
      $("#seasonsSevenAutumnWinter .hausennFashionShow__menu__sort__mainmenu__item__submenu").toggleClass("menucontrolOpen");
});

$('#seasons .hausennFashionShow__menu__sort__mainmenu__item__submenu li').click(function(event){
      event.stopPropagation();
});

//menu事件
// const mainMenuControl = document.querySelectorAll('.hausennFashionShow__menu__sort__title');
// const mainMenu = document.querySelectorAll('.hausennFashionShow__menu__sort__mainmenu');
// mainMenuControl.forEach(function(item){
//   item.addEventListener('click',function(){
//     console.log(this.nextSibling);
//     this.nextSibling.classList.add('menucontrolOpen');
//   })
// })



//小圖點擊換大圖
function currentSlide(index){
  var clickImg = document.querySelectorAll('.hausennFashionShow__lightbox__choose__container__img');
  var slideImg = document.querySelectorAll('.hausennFashionShow__lightbox__expand__pic');
  clickImg.forEach(item => item.classList.remove("activeImg"));
  clickImg[index].classList.add("activeImg");
  slideImg.forEach(item => item.classList.remove("displaySlide"));
  slideImg[index].classList.add("displaySlide");
}

//小圖左右位移
// <div class="hausennFashionShow__lightbox__controlLeft"><</div>
// <div class="hausennFashionShow__lightbox__controlRight">></div>
const controlLeft = document.querySelector('.hausennFashionShow__lightbox__controlLeft');
const controlRight = document.querySelector('.hausennFashionShow__lightbox__controlRight');
const imageContainer = document.querySelector('.hausennFashionShow__lightbox__choose__container');

controlLeft.addEventListener("click", function(){
    imageContainer.classList.remove('containerToRight');
});
controlRight.addEventListener("click", function(){
    imageContainer.classList.add('containerToRight');
});

//離開畫面
const hausennFashionShow = document.querySelector('.hausennFashionShow');
const closeHausennFashionShow = document.querySelector('.hausennFashionShowClose');
closeHausennFashionShow.addEventListener("click",function(){
  hausennFashionShow.classList.remove('moveToPage');
});
