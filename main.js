$(document).on('ready', function() {

// name input 
    $('.name').mouseenter(function(){
  		$('.name').css('background-color', '#FC9553');
      $('.name').css('color', 'grey');
  	});

    $('.name').mouseleave(function(){
      $('.name').css('background-color', '#FFF');
      $('.name').css('color', '#000');
    });

 

   $('.name').on('click', function(){
      $('.name').hide();
   })

// bio input

    $('.bio').mouseenter(function(){
      $('.bio').css('background-color', '#FC9553');
      $('.bio').css('color', 'grey');
    });

    $('.bio').mouseleave(function(){
      $('.bio').css('background-color', '#FFF');
      $('.bio').css('color', '#000');
    });


   $('.bio').on('click', function(){
      $('.bio').hide();
   })



  	

  	

});