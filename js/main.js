
// toggle side nav and adding animation classes 
$('.close-icon').on( "click", function(){
  $('.side-nav').toggleClass('hide-nav')
  $('#main-content').toggleClass('full-page')
  $('#open-side-nav-btn').toggle()
})

