// search input trigger, to search throw todo items
$(document).ready(function(){
  $("#searchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".category-section .todo-item").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// sorting todo items (require sortable.JS lib)
$('.category-card').sortable({
  group: 'todo-lists', //to allow swapping between groups
  swap: false , // Enable swap plugin
  animation: 150,
  ghostClass: 'bg-success', // The class applied to the hovered swap item
})

// toggle side nav and adding animation classes 
$('.close-icon').on( "click", function(){
  $('.side-nav').toggleClass('hide-nav')
  $('#main-content').toggleClass('full-page')
  $('#open-side-nav-btn').toggle()
})


function toggleTodo(element){
  $(element).toggleClass('icon-unchecked')
  $(element).toggleClass('icon-check')
  $(element).next().toggleClass('todo-done')
}
// adding listeners in both classes allow it to toggle even when already active (ie: to make the first active work as well)
$(".icon-check").click(function(){
  toggleTodo(this)
});
$(".icon-unchecked").click(function(){
  toggleTodo(this)
});