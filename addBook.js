$(document).ready(function() {
   // menu button redirect
   $("#homeButton").click(function () {
      window.location.replace('index.php')
   });

   // Add button onclick
   $("#addBookButton").click(function () {
      validateForm();
   });
});

var validateForm = function() {
   if (!fieldCheck()){
      //$("#message").text("Something you've entered was invalid");
   } else {
      $.post('/codeCollection/books/phpFiles/addBookEntry.php', $("#userInfo").serialize(), function(data){
         $("#message").text(data);
         if(data.trim() == 'Book added successfully!'){
            // Display book list on home page
            window.location.replace('index.php');
         }
      });
   }
}

var fieldCheck = function () {
   var titleValue = titleCheck($("input[name=Title]").val());
   var authorValue = authorCheck($("input[name=Author]").val());
   var descriptionValue = descriptionCheck($("textarea[name=Description]").val());
   var languagesValue = languagesCheck($("select[id=languages]").val());

   if(titleValue&&authorValue&&descriptionValue&&languagesValue) {
      return true;
   } else {
      return false;
   }
}

var titleCheck = function (title) {
   if (title.length < 1) {
      // $("#firstMessage").text("Invalid First Name");
      $('[name="Title"]').css('box-shadow','0px 0px 1px 1px rgba(255,0,0,0.75)');
      return false;
   } else {
      // $("#firstMessage").text("");
      $('[name="Title"]').css('box-shadow','none');
      // $('[name="Title"]').css('box-shadow','inset 0 0 3px #387bbe,0 0 9px #387bbe');
      return true;
   }
}

var authorCheck = function (author){
   if (author.length < 1) {
      //$("#surMessage").text("Invalid surname");
      $('[name="Author"]').css('box-shadow','0px 0px 1px 1px rgba(255,0,0,0.75)');
      return false;
   } else {
      // $("#surMessage").text("");
      $('[name="Author"]').css('box-shadow','none');
      return true;
   }
}

function descriptionCheck(description) {
    if (description.length < 1) {
      //$("#surMessage").text("Invalid surname");
      $('[name="Description"]').css('box-shadow','0px 0px 1px 1px rgba(255,0,0,0.75)');
      return false;
   } else if (description.length > 600) {
      $("#descriptionErrorMsg").text("Exceeded 600 characters");
      $('[name="Description"]').css('box-shadow','0px 0px 1px 1px rgba(255,0,0,0.75)');
      return false;
   } else {
      // $("#surMessage").text("");
      $('[name="Description"]').css('box-shadow','none');
      return true;
   }
}

function languagesCheck(languages) {
    if (languages == null) {
      //$("#surMessage").text("Invalid surname");
      $('[name="Languages[]"]').css('box-shadow','0px 0px 1px 1px rgba(255,0,0,0.75)');
      return false;
   } else {
      // $("#surMessage").text("");
      $('[name="Languages[]"]').css('box-shadow','none');
      return true;
   }
}
