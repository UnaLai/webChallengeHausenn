var kerwayPhotoClick = (function (){
  var masonryLayoutItem = document.getElementsByClassName('MasonryLayoutItem'),
  wholePage = document.getElementById('wholePage'),
  kerwayWork = document.getElementById('kerwayWork'),
  photoContainer = document.getElementById('photoContainer'),
  menuIcon = document.getElementById('menuIcon'),
  controlPrevious = document.getElementById('controlPrevious'),
  controlNext = document.getElementById('controlPrevious');
  // console.log (masonryLayoutItem);

  for (var i=0; i < masonryLayoutItem.length; i++) {
    //全部
    var imgBox = masonryLayoutItem[i],
        imgSrc = imgBox.children[0].getAttribute('src');

    // console.log(imgBox, imgSrc);
    
    imgBox.addEventListener("click", function(){
      wholePage.classList.add('appear');
      kerwayWork.classList.add('appear');
      menuIcon.classList.add('appear');
      photoContainer.src = this.children[0].getAttribute('src');
      nav.classList.add('photoAppear');
      filter.classList.add('appear');
    });
  }

  controlPrevious.addEventListener("click", function(){});
  controlNext.addEventListener("click", function(){});

})();

