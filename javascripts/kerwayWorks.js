//點擊清單子項目，變換文字
function showFilterText(item){
  let strItemText = item.textContent;
  document.querySelector('#jsShowText').textContent = strItemText;
  document.querySelector('#jsHiddenText').style.visibility = "hidden";
}
//取得清單子項目
let kerwayLists = document.querySelectorAll('#kerwayListContainer a');
kerwayLists.forEach(function(item,indext){
  item.addEventListener('click',function(){
    showFilterText(item);
  });
});

//點九宮格，出現文字
function showWorkText(){
  document.querySelector('#jsShowText').textContent = "WORKS";
  document.querySelector('#jsHiddenText').style.visibility = "visible";
}
let nineGridIcon = document.querySelector('.nineGrid');
nineGridIcon.addEventListener('click',showWorkText);

//照片篩選
$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(e){
      console.log(e);
		selectedClass = $(this).attr("data-rel");
     // $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      // $("#portfolio").fadeTo(300, 1);
    }, 300);

	});
});
