/*Hide menu by default*/
$(".menu-content").hide();

/*When menu button is clicked, toggle the menu*/
$(".btn__hamburguer").click(function(){
  $(".menu-content").slideToggle();
});
