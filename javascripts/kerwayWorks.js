
$(function() {
  $('#MasonryLayout').imagesLoaded(function() {
    $('#MasonryLayout').masonry({
      itemSelector: '.MasonryLayoutItem',
      columnWidth: 350,
      animate: true,
      gutterWidth: 50

    });
  });
});



function showFilterText(item){
  let strItemText = item.textContent;
  let showTextContainer = document.querySelector('#showFilterText');
  showTextContainer.textContent = strItemText;
}

let kerwayLists = document.querySelectorAll('#kerwayListContainer a');
kerwayLists.forEach(function(item,indext){
  item.addEventListener('click',function(){
    showFilterText(item);
  });

});
//取得 template
let temp = document.getElementsByTagName("template")[0];

//複製一份 template，cloneNode(true)
var clon = temp.content.cloneNode(true);

//放進 MasonryLayout 裡
let masonryLayout = document.querySelector('#MasonryLayout');
masonryLayout.appendChild(clon);

let imageItems = {
  key:{
    name: 1,
    photographer: 'Mango',
    url: './images/001.jpg'
  }
};
console.log(imageItems.key.name);
