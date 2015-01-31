/*** Get listing id ***
   $(this).parent().parent().parent().children('div').eq(4).text();
*/

$(document).ready(function() {
   // load all books on page load
   $.get('/codeCollection/books/phpFiles/getBookEntry.php', function(data){
      $("#listWrapper").append(data);
      $("#listings div:nth-child(1)").append('<div class="rating"><img class="star_1" src="images/empty_star.png"></img><img class="star_2" src="images/empty_star.png"></img><img class="star_3" src="images/empty_star.png"></img><img class="star_4" src="images/empty_star.png"></img><img class="star_5" src="images/empty_star.png"></img></div>');
   
      $(".rating").css("float","right");

      $(".star_1").click(function () {
         
      });

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

   // clicking any of the languages passes filter
   $("option").click(function () {
      $.post('/codeCollection/books/phpFiles/filterBookEntry.php', $("#languages").serialize(), function(data){
         $("#listWrapper").empty();
         $("#bookResultsHeading").text($("#languages").find(":selected").text() + " Books");

         if ($("#languages :selected").length > 1) {
            $("#bookResultsHeading").text("Selected Books");
         }

         $("#listWrapper").append(data);
         $("#listings div:nth-child(1)").append('<div id="rating"><img class="star_1" src="images/empty_star.png"></img><img class="star_2" src="images/empty_star.png"></img><img class="star_3" src="images/empty_star.png"></img><img class="star_4" src="images/empty_star.png"></img><img class="star_5" src="images/empty_star.png"></img></div>');

         
      });
   });

   $("#filterWrapper").mouseenter(function() {
      $("#filterWrapper").css("opacity","1");
   })
   .mouseleave(function() {
      $("#leftPanel").css("display","block");
      $("#filterWrapper").toggle();
      $("#arrow").attr("src","images/right_arrow.png");
      $("#rightDIV").css("width","80%");
      $("#rightDIV").css("marginLeft","7%");
   });

   $("#leftPanel").mouseenter(function() {
      $("#leftPanel").css("display","none");
      $("#filterWrapper").toggle();
      $("#arrow").attr("src","images/left_arrow.png");
      $("#rightDIV").css("width","75%");
      $("#rightDIV").css("marginLeft","2%");
   });


   $("#arrowButton").toggle(function() {
      $("#filterWrapper").toggle();
      $("#arrowButton").attr("src","images/right_arrow.png");
      $("#rightDIV").css("width","80%");
      $("#rightDIV").css("marginLeft","7%");

   }, function() {
      $("#filterWrapper").toggle();
      $("#arrowButton").attr("src","images/left_arrow.png");
      $("#rightDIV").css("width","75%");
      $("#rightDIV").css("marginLeft","2%");
   });

   // select all options
   $('#select_all').click(function() {
      var allSelected = $("#languages option:not(:selected)").length == 0;
      if(!allSelected) {
         $('#languages option').prop('selected', true);
         $('#select_all_text').text("Unselect All");
         $("#listWrapper").empty();
         $("#bookResultsHeading").text("All Books");

         $.get('/codeCollection/books/phpFiles/getBookEntry.php', function(data){
            $("#listWrapper").append(data);
         });

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

});