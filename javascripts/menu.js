var menuContactAnimate = function(){
  // -----------
  // menu 收合
  // -----------

  /* X 控制 */
  var menuIcon = document.getElementById('menuIcon'),
      nav      =  document.getElementById('nav'),
      openAllClass       = 'appear',
      activeMenuClass    = 'menuAppear',
      activeContactClass = 'contactAppear';

  var contactButton   = document.getElementById('contactButton'),
      contactIcon     = document.getElementById('contactIcon'),
      welcome         = document.getElementById('welcome'),
      contactPage     = document.getElementById('contactPage'),
      contactMenuLink = document.getElementById('contactMenuLink');

  var menuExist = nav.classList.contains(activeMenuClass),
      contactExist = nav.classList.contains(activeContactClass);

  menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle(openAllClass);

      if ( nav.classList.contains(activeContactClass) ) {
        // 要關閉 contact
        contactPage.classList.remove(openAllClass);
        welcome.classList.remove(openAllClass);
        nav.classList.remove(activeContactClass);
      }

      else if ( nav.classList.contains(activeMenuClass) ) {
        // 關閉 contact
        nav.classList.remove(activeMenuClass);
      }
      else if ( menuExist === false ) {
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
    contactIcon.classList.add(openAllClass);
    contactPage.classList.add(openAllClass);
    welcome.classList.add(openAllClass);
    menuIcon.classList.add(openAllClass);

    nav.classList.add(activeContactClass);
    console.log('點擊右側 Menu: '+ menuExist, '. contact: '+ contactExist);

  });

  /* 左側點擊 @Menu 375px */
  contactIcon.addEventListener('click', function(){
    contactIcon.classList.remove(openAllClass);
    contactPage.classList.remove(openAllClass);
    welcome.classList.remove(openAllClass);
  });

  contactMenuLink.addEventListener('click', function(){
    nav.classList.remove(activeMenuClass);
    nav.classList.add(activeContactClass);
    contactPage.classList.add(openAllClass);
  });


}();
