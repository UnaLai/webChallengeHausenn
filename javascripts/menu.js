var menuContactAnimate = function(){
  // -----------
  // menu 收合
  // -----------

  /* X 控制 */
  var menuIcon = document.getElementById('menuIcon'),
      nav      =  document.getElementById('nav'),
      openAllClass       = 'appear',
      activeMenuClass    = 'menuAppear',
      activeContactClass = 'contactAppear',
      activePhotoClass = 'photoAppear';

  var contactButton   = document.getElementById('contactButton'),
      wholePage         = document.getElementById('wholePage'),
      contactPage     = document.getElementById('contactPage'),
      contactMenuLink = document.getElementById('contactMenuLink'),
      filter = document.getElementById('filter');

  menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle(openAllClass);

      if ( nav.classList.contains(activeContactClass) ) {
        // 關閉 contact
        contactPage.classList.remove(openAllClass);
        wholePage.classList.remove(openAllClass);
        nav.classList.remove(activeContactClass);
        filter.classList.remove(openAllClass);
      }

      else if ( nav.classList.contains(activeMenuClass) ) {
        // 關閉 contact
        nav.classList.remove(activeMenuClass);
      }
      else if (nav.classList.contains(activePhotoClass)){
        // 關閉圖片
        wholePage.classList.remove('appear');
        kerwayWork.classList.remove('appear');
        menuIcon.classList.remove('appear');
        nav.classList.remove('photoAppear');
        filter.classList.remove('appear');
      }
      else {
        // 開啟 menu
        nav.classList.add(activeMenuClass);
      }
  });


  // -----------
  // contact page 收合
  // -----------

  /* 右側點擊 1366px */
  contactButton.addEventListener('click', function(){
    // 要開啟 contact
    contactPage.classList.add(openAllClass);
    wholePage.classList.add(openAllClass);
    menuIcon.classList.add(openAllClass);
    nav.classList.add(activeContactClass);
    filter.classList.add(openAllClass);
  });

  contactMenuLink.addEventListener('click', function(){
    nav.classList.remove(activeMenuClass);
    nav.classList.add(activeContactClass);
    contactPage.classList.add(openAllClass);
  });


}();
