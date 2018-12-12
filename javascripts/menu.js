var menuIcon = function(){
  var icon = document.getElementById('menuIcon'),
      nav  =  document.getElementById('nav');
  
  icon.addEventListener('click', function(){
    var openClassName = 'appear';
    nav.classList.toggle(openClassName);
    if (nav.classList.contains(openClassName)) {
      // write something
    }
  });

}();