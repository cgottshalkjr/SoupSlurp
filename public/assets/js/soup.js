$(function () {

  $(".create-form").on("submit", function (event) {
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
      function () {
        console.log("created new soup");
        // Reload the page to get the updated list
        location.reload();
        // res.json(newSoup)
      }
    );
  });

  $(".soupSlurp").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var newSlurped = {
      slurped: true
    };

    // Send the PUT request.
    $.ajax("/api/soups/" + id, {
      type: "PUT",
      data: newSlurped
    }).then(function () {
      console.log("soup slurped");
      location.reload();
    });
  });

  $(".deleteSoup").on("click", function (event) {
    event.preventDefault();
    console.log(this);
    var id = $(this).data("id");

    $.ajax("/api/soups/" + id, {
      type: "DELETE"
    }).then(function () {
      console.log("soup slurped");
      location.reload();
    });

  })

  $(".reorderSoup").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var newSlurped = {
      slurped: false
    };

    // Send the PUT request.
    $.ajax("/api/soups/" + id, {
      type: "PUT",
      data: newSlurped
    }).then(function () {
      console.log("soup slurped");
      location.reload();
    });
  });

})