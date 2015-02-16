/*** Get listing id ***
   $(this).parent().parent().parent().children('div').eq(4).text();
*/

$(document).ready(function() {

  // load all books on page load
  displayAllBooks();

  // load books of selected languages
  $("option").click(function () {
    displaySelectedBooks();
  });

  // adjust position of filter panel on scroll
  $(document).scroll(function() {
    if (window.pageYOffset > 40) {
      $("#leftPanel").css("top","0");
      $("#filterWrapper").css("top","0");
    } else {
      $("#leftPanel").css("top","39px");
      $("#filterWrapper").css("top","39px");
    }
  });

/*
 *            ***** FILL STARS *****
 *          Update star rating, average 
 *            rating and rating count               
 */

  function fillStars() {

    $(".listings").each(function() {
      var star = $(this).children().children().children();
      var ratingSum = $(this).children().eq(5).text();
      var ratingCount = $(this).children().eq(6).text();
      if (ratingCount == 0) {
        var rating = 0;
      } else {
        var rating = (ratingSum/ratingCount).toFixed(1);        
      }
      $(this).children().eq(1).children().text(ratingCount + " ratings");
      $(this).children().children(".avgRating").text(rating);

      if (roundHalf(rating) == 0) {
        $(star).attr("src","images/empty_star.png");
      } 
      else {
        $(star[Math.ceil(roundHalf(rating))-1]).prevAll().attr("src","images/full_star.png");
        $(star[Math.ceil(roundHalf(rating))-1]).nextAll().attr("src","images/empty_star.png");
        
        if (roundHalf(rating) - Math.ceil(roundHalf(rating)) == 0) 
        {
          $(star[Math.ceil(roundHalf(rating))-1]).attr("src","images/full_star.png");
        } 
        else 
        {
          $(star[Math.ceil(roundHalf(rating))-1]).attr("src","images/half_star.png");
        }

      }

    });

  }


  function roundHalf(num) {
    num = Math.round(num*2)/2;
    return num;
  }


/*
 *          ***** SUBMIT RATING *****
 *         Adds rating to database and
 *            returns average rating               
 */

  function postRating(obj,id,rating) {  
    $.post('/codeCollection/books/phpFiles/submitRating.php',
      {
        id: id,
        rating: rating
      }, function(data){
        var ratingData = $.parseJSON(data);

        var newRating = ratingData.Rating;
        var newCount = ratingData.RatingCount;
        var avgRating = newRating/newCount;

        $(obj).parent().parent().next().children().text(newCount + " ratings");
        $(obj).parent().parent().parent().children().eq(5).text(newRating);
        $(obj).parent().parent().parent().children().eq(6).text(newCount);
        $(obj).parent().parent().children(".avgRating").text(avgRating.toFixed(1));

    });
  }

  function starClick(obj) {
        var parent = $(obj).parent().parent().parent();
        var id = parent.children('div').eq(4).text();
        var rating = $(obj).index() + 1;
        postRating(obj,id,rating);
  }

/*
 *          ***** DISPLAY ALL BOOKS *****
 *          Function that loads all book
 *             entries alphabetically               
 */

  function displayAllBooks() {
    $.get('/codeCollection/books/phpFiles/getBookEntry.php', function(data){
      $("#listWrapper").append(data);
      $("#listings div:nth-child(1)").append('<div class="rating"><img class="star star_1" src="images/empty_star.png"></img><img class="star star_2" src="images/empty_star.png"></img><img class="star star_3" src="images/empty_star.png"></img><img class="star star_4" src="images/empty_star.png"></img><img class="star star_5" src="images/empty_star.png"></img></div><span class="avgRating"></span>');
      $("#listings div:nth-child(2)").append('<div class="ratingCount">0 ratings</div>');
      $("#listings div:nth-child(2)").prepend('by ');
      fillStars();
      // $(".avgRating").text(4.2);   

      // Star Logic
      $(".star").mouseover(function () {
        $(this).prevAll().attr("src","images/full_star.png");
        $(this).attr("src","images/full_star.png");
        $(this).nextAll().attr("src","images/empty_star.png");
      }).mouseleave(function() {
        fillStars();
      }).click(function () {
        starClick(this);
      });

    });
  }

/*
 *        ***** DISPLAY FILTERED BOOKS *****
 *       Function that loads books relevant to 
 *          selected programming languages               
 */

  function displaySelectedBooks() {
    $.post('/codeCollection/books/phpFiles/filterBookEntry.php', $("#languages").serialize(), function(data){
      $("#listWrapper").empty();
      $("#bookResultsHeading").text($("#languages").find(":selected").text() + " Books");

      if ($("#languages :selected").length > 1) {
        $("#bookResultsHeading").text("Selected Books");
      }

      $("#listWrapper").append(data);
      $("#listings div:nth-child(1)").append('<div class="rating"><img class="star star_1" src="images/empty_star.png"></img><img class="star star_2" src="images/empty_star.png"></img><img class="star star_3" src="images/empty_star.png"></img><img class="star star_4" src="images/empty_star.png"></img><img class="star star_5" src="images/empty_star.png"></img></div><span class="avgRating"></span>');
      $("#listings div:nth-child(2)").append('<div class="ratingCount">0 ratings</div>');
      $("#listings div:nth-child(2)").prepend('by ');

      fillStars();

      // Star Logic
      $(".star").mouseover(function () {
        $(this).prevAll().attr("src","images/full_star.png");
        $(this).attr("src","images/full_star.png");
        $(this).nextAll().attr("src","images/empty_star.png");
      }).mouseleave(function() {
        fillStars();
      }).click(function () {
        starClick(this);
      });

    });
  }

/*
 *           ***** FILTER PANEL *****
 *         Show / Hide side filter panel                 
 *
 */

  $("#filterWrapper").mouseenter(function() {
  })
  .mouseleave(function() {
    $("#leftPanel").css("display","block");
    $("#filterWrapper").toggle();
    window.innerWidth
    $("#rightDIV").css("width","80%");
    $("#rightDIV").css("marginLeft","9%");
  });

  $("#leftPanel").mouseenter(function() {
    $("#leftPanel").css("display","none");
    $("#filterWrapper").toggle();
    $("#rightDIV").css("width","75%");
    $("#rightDIV").css("marginLeft","250px");
  });

  // select all options
  $('#select_all').click(function() {
    var allSelected = $("#languages option:not(:selected)").length == 0;
    if(!allSelected) {
      $('#languages option').prop('selected', true);
      $('#select_all_text').text("Unselect All");
      $("#listWrapper").empty();
      $("#bookResultsHeading").text("All Books");

      displayAllBooks();
    } else {
       $('#languages option').prop('selected', false);
       $('#select_all_text').text("Select All");
       $("#bookResultsHeading").text("No Selection");
       $("#listWrapper").empty();
    }
  });

  // menu button redirect
  $("#homeButton").click(function () {
    window.location.replace('index.php')
  });

  // Add-book button redirect
  $("#addBookButton").click(function () {
    window.location.replace('addBook.php')
  });





});