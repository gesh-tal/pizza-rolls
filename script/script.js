
$(document).ready(function(){

	$('.mobile_menu_icon').on('click', () => {
		$('.nav_menu_mobile').css('display', 'flex');
	});

	$('#mobile_menu_icon').click(function(){
	    $('.nav_menu_mobile').animate({
	        height: 'toggle',
	        opacity: 'toggle'
	    });
	});

	$(() => {
		$('a[href^="#"]').on('click', function(event) {
		event.preventDefault();

		const ref = $(this).attr("href"),
		      pos = $(ref).offset().top;

		$('html, body').animate({scrollTop: pos}, 1000);
		});
	});

	$('.nav_link').on('click', () => {
		$('.nav_menu_mobile').fadeOut(1000);
	})

	// Wrap every letter in a span
	$('.ml3').each(function(){
	  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
	});

	anime.timeline({loop: false})
	  .add({
	    targets: '.ml3 .letter',
	    opacity: [0,1],
	    easing: "easeInOutQuad",
	    duration: 2500,
	    delay: function(el, i) {
	      return 150 * (i+1)
	    }
	  });
	  // .add({
	  //   targets: '.ml3',
	  //   opacity: 0,
	  //   duration: 1000,
	  //   easing: "easeOutExpo",
	  //   delay: 1000
	  // });


  	$('#sushi').lightGallery();
  	$('#pizza').lightGallery();

});