/*** Get listing id ***
   $(this).parent().parent().parent().children('div').eq(4).text();
*/

$(document).ready(function() {

  // load all books on page load
  displayAllBooks();

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

  // clicking any of the languages passes filter
  $("option").click(function () {
    $.post('/codeCollection/books/phpFiles/filterBookEntry.php', $("#languages").serialize(), function(data){
      $("#listWrapper").empty();
      $("#bookResultsHeading").text($("#languages").find(":selected").text() + " Books");

      if ($("#languages :selected").length > 1) {
        $("#bookResultsHeading").text("Selected Books");
      }

      $("#listWrapper").append(data);
      $("#listings div:nth-child(1)").append('<div class="rating"><img class="star_1" src="images/empty_star.png"></img><img class="star_2" src="images/empty_star.png"></img><img class="star_3" src="images/empty_star.png"></img><img class="star_4" src="images/empty_star.png"></img><img class="star_5" src="images/empty_star.png"></img></div>');

      $(".rating").css("float","right");

      /******** STAR RATING LOGIC ********/
      // hover over star #1
      $(".star_1").mouseover(function () {
        $(this).attr("src","images/full_star.png");
      })
      .mouseleave(function() {
        $(this).attr("src","images/empty_star.png");
         });

      // hover over star #2
      $(".star_2").mouseover(function () {
        $(this).prev().attr("src","images/full_star.png");
        $(this).attr("src","images/full_star.png");
      })
      .mouseleave(function() {
        $(this).prev().attr("src","images/empty_star.png");
        $(this).attr("src","images/empty_star.png");
         });

      // hover over star #3
      $(".star_3").mouseover(function () {
        $(this).prev().prev().attr("src","images/full_star.png");
        $(this).prev().attr("src","images/full_star.png");
        $(this).attr("src","images/full_star.png");
      })
      .mouseleave(function() {
        $(this).prev().prev().attr("src","images/empty_star.png");
        $(this).prev().attr("src","images/empty_star.png");
        $(this).attr("src","images/empty_star.png");
         });

      // hover over star #4
      $(".star_4").mouseover(function () {
        $(this).prev().prev().prev().attr("src","images/full_star.png");
        $(this).prev().prev().attr("src","images/full_star.png");
        $(this).prev().attr("src","images/full_star.png");
        $(this).attr("src","images/full_star.png");
      })
      .mouseleave(function() {
        $(this).prev().prev().prev().attr("src","images/empty_star.png");
        $(this).prev().prev().attr("src","images/empty_star.png");
        $(this).prev().attr("src","images/empty_star.png");
        $(this).attr("src","images/empty_star.png");
         });

      // hover over star #5
      $(".star_5").mouseover(function () {
        $(this).prev().prev().prev().prev().attr("src","images/full_star.png");
        $(this).prev().prev().prev().attr("src","images/full_star.png");
        $(this).prev().prev().attr("src","images/full_star.png");
        $(this).prev().attr("src","images/full_star.png");
        $(this).attr("src","images/full_star.png");
      })
      .mouseleave(function() {
        $(this).prev().prev().prev().prev().attr("src","images/empty_star.png");
        $(this).prev().prev().prev().attr("src","images/empty_star.png");
        $(this).prev().prev().attr("src","images/empty_star.png");
        $(this).prev().attr("src","images/empty_star.png");
        $(this).attr("src","images/empty_star.png");
      });
    });
  });

  $("#filterWrapper").mouseenter(function() {
  })
  .mouseleave(function() {
    $("#leftPanel").css("display","block");
    $("#filterWrapper").toggle();
    window.innerWidth
    $("#rightDIV").css("width","80%");
    $("#rightDIV").css("marginLeft","10%");
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

  // Add book button redirect
  $("#addBookButton").click(function () {
    window.location.replace('addBook.php')
  });

  function displayAllBooks() {
    $.get('/codeCollection/books/phpFiles/getBookEntry.php', function(data){
      $("#listWrapper").append(data);
      $("#listings div:nth-child(1)").append('<div class="rating"><img class="star_1" src="images/empty_star.png"></img><img class="star_2" src="images/empty_star.png"></img><img class="star_3" src="images/empty_star.png"></img><img class="star_4" src="images/empty_star.png"></img><img class="star_5" src="images/empty_star.png"></img></div>');

      $(".rating").css("float","right");


      /******** STAR RATING LOGIC ********/

      // click on star #1
      $(".star_1").click( function () {
        // store book id in variable
        var id = $(this).parent().parent().parent().children('div').eq(4).text();
        var rating = 1;

        $.post('/codeCollection/books/phpFiles/submitRating.php',
          {
            id: id,
            rating: rating
          }, function(data){
            alert(data);
        });
      });
      // click on star #2
      $(".star_2").click( function () {
        // store book id in variable
        var id = $(this).parent().parent().parent().children('div').eq(4).text();
        var rate = 2;
      });
      // click on star #3
      $(".star_3").click( function () {
        // store book id in variable
        var id = $(this).parent().parent().parent().children('div').eq(4).text();
        var rate = 3;
      });      
      // click on star #4
      $(".star_4").click( function () {
        // store book id in variable
        var id = $(this).parent().parent().parent().children('div').eq(4).text();
        var rate = 4;
      });      
      // click on star #5
      $(".star_5").click( function () {
        // store book id in variable
        var id = $(this).parent().parent().parent().children('div').eq(4).text();
        var rate = 5;
      });


      // hover over star #1
      $(".star_1").mouseover(function () {
        $(this).attr("src","images/full_star.png");
      })
      .mouseleave(function() {
        $(this).attr("src","images/empty_star.png");
         });
      // hover over star #2
      $(".star_2").mouseover(function () {
        $(this).prev().attr("src","images/full_star.png");
        $(this).attr("src","images/full_star.png");
      })
      .mouseleave(function() {
        $(this).prev().attr("src","images/empty_star.png");
        $(this).attr("src","images/empty_star.png");
         });
      // hover over star #3
      $(".star_3").mouseover(function () {
        $(this).prev().prev().attr("src","images/full_star.png");
        $(this).prev().attr("src","images/full_star.png");
        $(this).attr("src","images/full_star.png");
      })
      .mouseleave(function() {
        $(this).prev().prev().attr("src","images/empty_star.png");
        $(this).prev().attr("src","images/empty_star.png");
        $(this).attr("src","images/empty_star.png");
         });
      // hover over star #4
      $(".star_4").mouseover(function () {
        $(this).prev().prev().prev().attr("src","images/full_star.png");
        $(this).prev().prev().attr("src","images/full_star.png");
        $(this).prev().attr("src","images/full_star.png");
        $(this).attr("src","images/full_star.png");
      })
      .mouseleave(function() {
        $(this).prev().prev().prev().attr("src","images/empty_star.png");
        $(this).prev().prev().attr("src","images/empty_star.png");
        $(this).prev().attr("src","images/empty_star.png");
        $(this).attr("src","images/empty_star.png");
         });
      // hover over star #5
      $(".star_5").mouseover(function () {
        $(this).prev().prev().prev().prev().attr("src","images/full_star.png");
        $(this).prev().prev().prev().attr("src","images/full_star.png");
        $(this).prev().prev().attr("src","images/full_star.png");
        $(this).prev().attr("src","images/full_star.png");
        $(this).attr("src","images/full_star.png");
      })
      .mouseleave(function() {
        $(this).prev().prev().prev().prev().attr("src","images/empty_star.png");
        $(this).prev().prev().prev().attr("src","images/empty_star.png");
        $(this).prev().prev().attr("src","images/empty_star.png");
        $(this).prev().attr("src","images/empty_star.png");
        $(this).attr("src","images/empty_star.png");
      });
    });
  }



});