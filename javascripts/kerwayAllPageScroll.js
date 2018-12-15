const kerwayWelcome = document.querySelector('.welcome');
const concept = document.querySelector('.concept');
const kerwayWorks = document.querySelector('.kerwayWorks');
const parallax = document.querySelector('.parallax');

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
      }
    } else if ((current.offsetTop + (current.clientHeight / 2)) < parallax.scrollTop) {
      if (parallax.scrollTop < (current.offsetTop + current.clientHeight)) {
        onethingdo = "up";
        upBreakPoint = current.offsetTop;
        upmove(current, upBreakPoint);
      }
    }
  }
  if(current == concept){
    if (parallax.scrollTop < (current.offsetTop + current.clientHeight - (0.5 * fullVh))) {
      if((current.offsetTop + current.clientHeight - fullVh) < parallax.scrollTop){
        onethingdo = "down";
        downBreakPoint = current.offsetTop + current.clientHeight;
        downmove(current,downBreakPoint);
      }
    }
    else if ((current.offsetTop + current.clientHeight - (0.5 * fullVh)) < parallax.scrollTop) {
      if(parallax.scrollTop < (current.offsetTop + current.clientHeight)){
        onethingdo = "up";
        upBreakPoint = current.offsetTop + current.clientHeight - fullVh;
        upmove(current,upBreakPoint);
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
