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
    var imgBox = masonryLayoutItem[i];
    
    imgBox.addEventListener("click", function(){
      wholePage.classList.add('appear');
      kerwayWork.classList.add('appear');
      menuIcon.classList.add('appear');
      photoContainer.src = this.children[0].getAttribute('src');
      nav.classList.add('photoAppear');
      filter.classList.add('appear');
    });
  }

})();

