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
