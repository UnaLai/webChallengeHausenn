
const welcome = document.querySelector('.welcome');
const photoBg = document.querySelector('.photoBg');
const welcomeHeightCenter = welcome.clientHeight / 2;
const welcomeWidthCenter = welcome.clientWidth / 2;
const xLimit = 0.03;
const yLimit = 0.03;



function bgMove(e){
    var moveX = (((e.clientX - welcomeWidthCenter) / welcomeWidthCenter) * xLimit + 0.5)*100;
    var moveY = (((e.clientY - welcomeHeightCenter) / welcomeHeightCenter) * yLimit + 0.5)*100;
    photoBg.style.backgroundPosition = `${moveX}% ${moveY}%`;
}


welcome.addEventListener('mousemove',bgMove);
