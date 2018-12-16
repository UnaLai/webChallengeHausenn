const kerwayWelcome = document.querySelector('.welcome');
const concept = document.querySelector('.concept');
const kerwayWorks = document.querySelector('.kerwayWorks');
const parallax = document.querySelector('.parallax');

//漢堡也要隨著滾動改變顏色，先拿到漢堡
const humburger = document.querySelector('.switchIconBox');
//contact button 也要隨著滾動改變顏色，先拿到
const contactButton  = document.querySelector('.goToContactUs');

//誰要實踐滾動
var current = null;
var onethingdo = null;
var fullVh = kerwayWelcome.clientHeight;
var downBreakPoint = null;
var upBreakPoint = null;

function pagemove() {
  if (onethingdo !== null) {
    return;
  }
  //誰要滾動
  if (parallax.scrollTop > kerwayWorks.offsetTop) {
    current = kerwayWorks;
  } else if(parallax.scrollTop > concept.offsetTop) {
    current = concept;
  } else if(parallax.scrollTop > kerwayWelcome.offsetTop) {
    current = kerwayWelcome;
  }
  //向上或向下(Welcome)
  if (current == kerwayWelcome) {
    if (parallax.scrollTop < (current.offsetTop + (current.clientHeight / 2))) {
      if ((current.offsetTop) < parallax.scrollTop) {
        onethingdo = "down";
        downBreakPoint = current.offsetTop + current.clientHeight;
        downmove(current, downBreakPoint);
        setTimeout(function(){
          humburger.classList.add('black');
          contactButton.classList.add('black'); }, 200);
      }
    } else if ((current.offsetTop + (current.clientHeight / 2)) < parallax.scrollTop) {
      if (parallax.scrollTop < (current.offsetTop + current.clientHeight)) {
        onethingdo = "up";
        upBreakPoint = current.offsetTop;
        upmove(current, upBreakPoint);
        setTimeout(function(){
          humburger.classList.remove('black');
          contactButton.classList.remove('black'); }, 200);
      }
    }
  }
  if(current == concept){
    if (parallax.scrollTop < (current.offsetTop + current.clientHeight - (0.5 * fullVh))) {
      if((current.offsetTop + current.clientHeight - fullVh) < parallax.scrollTop){
        onethingdo = "down";
        downBreakPoint = current.offsetTop + current.clientHeight;
        downmove(current,downBreakPoint);
        setTimeout(function(){
          humburger.classList.remove('black');
          contactButton.classList.remove('black'); }, 200);
      }
    }
    else if ((current.offsetTop + current.clientHeight - (0.5 * fullVh)) < parallax.scrollTop) {
      if(parallax.scrollTop < (current.offsetTop + current.clientHeight)){
        onethingdo = "up";
        upBreakPoint = current.offsetTop + current.clientHeight - fullVh;
        upmove(current,upBreakPoint);
        setTimeout(function(){
          humburger.classList.add('black');
          contactButton.classList.add('black'); }, 200);
      }
    }
  }
};

function downmove(current, downBreakPoint) {
  var everysecondrun = current.clientHeight / 50;
  var downclock = setInterval(runDown, 10);

  function runDown() {
    var topvalue = parallax.scrollTop + everysecondrun;
    if (topvalue > (downBreakPoint)) {
      topvalue = downBreakPoint;
      parallax.scrollTo({
        top: topvalue,
      });
      cleardownmove();
    } else {
      parallax.scrollTo({
        top: topvalue,
      });
    }
  }

  function cleardownmove() {
    onethingdo = null;
    clearInterval(downclock);
  }
}

function upmove(current, upBreakPoint) {
  var everysecondrun = current.clientHeight / 50;
  var upclock = setInterval(runUp, 10);

  function runUp() {
    var topvalue = parallax.scrollTop - everysecondrun;
    if (topvalue < (upBreakPoint)) {
      topvalue = upBreakPoint;
      parallax.scrollTo({
        top: topvalue,
      });
      clearupmove();
    } else {
      parallax.scrollTo({
        top: topvalue,
      });
    }
  }

  function clearupmove() {
    onethingdo = null;
    clearInterval(upclock);
  }
}

parallax.addEventListener('scroll', pagemove);

//welcome裏面的箭頭事件也要綁定全頁滾動
const arrow = document.querySelector('.arrow');
arrow.addEventListener('click', function(){
  current=kerwayWelcome;
  onethingdo = "down";
  downBreakPoint = current.offsetTop + current.clientHeight;
  downmove(current, downBreakPoint);
});
