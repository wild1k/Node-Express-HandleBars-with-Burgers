// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    // var newBurger = $(this).data("newBurger");

    const newBurger = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newBurger
    }).then(
      function() {
        console.log("changed eat to", devoured);
        console.log(req.body);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#burgerForm").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#enter_text").val(),
      devoured: 0

     
    };
console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
 

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
