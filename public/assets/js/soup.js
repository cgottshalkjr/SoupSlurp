$(function(){

$(".create-form").on("submit", function (event){
    event.preventDefault();

    var newSoup = {
        name: $("#soup").val().trim(),
        slurped: 0
      };
  
      // Send the POST request.
      $.ajax("/api/soups", {
        type: "POST",
        data: newSoup
      }).then(
        function() {
          console.log("created new soup");
          // Reload the page to get the updated list
          location.reload();
        }
      );


})



})