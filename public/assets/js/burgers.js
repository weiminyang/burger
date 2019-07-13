// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    console.log("123");
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      
  
      var newdevouredState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newdevouredState
      }).then(
        function() {
          
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  if($("#ca").val().trim()!=""){

  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
    else(
      alert("Please input a burger!")
    )
    });
  });
  