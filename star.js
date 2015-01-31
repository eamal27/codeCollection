$(document).ready(function() {

	// hover over star #1
	$(".star_1").mouseover(function () {
	  $(".star_1").attr("src","images/full_star.png");
	})
	.mouseleave(function() {
	  $(".star_1").attr("src","images/empty_star.png");
   	});

	// hover over star #2
	$(".star_2").mouseover(function () {
	  $(".star_1").attr("src","images/full_star.png");
	  $(".star_2").attr("src","images/full_star.png");
	})
	.mouseleave(function() {
	  $(".star_1").attr("src","images/empty_star.png");
	  $(".star_2").attr("src","images/empty_star.png");
   	});

	// hover over star #3
	$(".star_3").mouseover(function () {
	  $(".star_1").attr("src","images/full_star.png");
	  $(".star_2").attr("src","images/full_star.png");
	  $(".star_3").attr("src","images/full_star.png");
	})
	.mouseleave(function() {
	  $(".star_1").attr("src","images/empty_star.png");
	  $(".star_2").attr("src","images/empty_star.png");
	  $(".star_3").attr("src","images/empty_star.png");
   	});

	// hover over star #4
	$(".star_4").mouseover(function () {
	  $(".star_1").attr("src","images/full_star.png");
	  $(".star_2").attr("src","images/full_star.png");
	  $(".star_3").attr("src","images/full_star.png");
	  $(".star_4").attr("src","images/full_star.png");
	})
	.mouseleave(function() {
	  $(".star_1").attr("src","images/empty_star.png");
	  $(".star_2").attr("src","images/empty_star.png");
	  $(".star_3").attr("src","images/empty_star.png");
	  $(".star_4").attr("src","images/empty_star.png");
   	});

	// hover over star #5
	$(".star_5").mouseover(function () {
	  $(".star_1").attr("src","images/full_star.png");
	  $(".star_2").attr("src","images/full_star.png");
	  $(".star_3").attr("src","images/full_star.png");
	  $(".star_4").attr("src","images/full_star.png");
	  $(".star_5").attr("src","images/full_star.png");
	})
	.mouseleave(function() {
	  $(".star_1").attr("src","images/empty_star.png");
	  $(".star_2").attr("src","images/empty_star.png");
	  $(".star_3").attr("src","images/empty_star.png");
	  $(".star_4").attr("src","images/empty_star.png");
	  $(".star_5").attr("src","images/empty_star.png");
   	});

});
