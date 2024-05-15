 $(document).ready(function() { // When jQuery is ready
  
  function check_from_top_de(){ // Create our function
    var scroll = $(window).scrollTop(); // Check scroll distance
    if (scroll >=50) { // If it is equal or more than 300 - you can change this to what you want
      $(".header-outer").addClass("change-bg-color"); // Add custom class to body which will change the color
    } else {
      $(".header-outer").removeClass("change-bg-color"); // When scrolled to the top, remove the class which changes the color back
    }
  }
  
  check_from_top_de(); // On load, run the function
  
  $(window).scroll(function() { // When scroll - run function
    check_from_top_de();
  });

  $('.header .mob-menu').click(function(){
  
    $(this).siblings(".menu").toggleClass('toggleMenu')
  })
  
});