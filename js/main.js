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

