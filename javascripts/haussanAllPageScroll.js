const hausennWelcome = document.querySelector('.welcome');
const hausennFashion = document.querySelector('.hausennFashion');
const parallax = document.querySelector('.parallax');

//誰要實踐滾動
var current = null;
var onethingdo = null;
var fullVh = hausennWelcome.clientHeight;
var downBreakPoint = null;
var upBreakPoint = null;

function pagemove() {
  if (onethingdo !== null) {
    return;
  }
  //誰要滾動
  if (parallax.scrollTop > hausennFashion.offsetTop) {
    current = hausennFashion;
  } else {
    current = hausennWelcome;
  }
  //向上或向下(hausennWelcome)
  if (current == hausennWelcome) {
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
  // if (current == hausennFashion) {
  //   if (parallax.scrollTop < (current.offsetTop + current.clientHeight - (1.5 * fullVh))){
  //     if ((current.offsetTop + current.clientHeight - 2 * fullVh) < parallax.scrollTop) {
  //       onethingdo = "down";
  //       downBreakPoint = current.offsetTop + current.clientHeight - fullVh;
  //       downmove(current, downBreakPoint);
  //     }
  //
  //
  //   } else if ((current.offsetTop + current.clientHeight - (1.5 * fullVh)) < parallax.scrollTop) {
  //     if (parallax.scrollTop < (current.offsetTop + current.clientHeight - fullVh)) {
  //       console.log("up");
  //       onethingdo = "up";
  //       upBreakPoint = current.offsetTop + current.clientHeight - 2 * fullVh;
  //       upmove(current, upBreakPoint);
  //     }
  //   }
  // }
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