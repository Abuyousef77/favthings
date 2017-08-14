$(document).ready(function() {
  $("#favorite").submit(function(event) {
    event.preventDefault();
    var userInput = [];
    var food1 = $("input#food1").val();
    var movie1 = $("input#movie1").val();
    var park1 = $("input#park1").val();
  // var favorite = ["food1", "movie1", "park1", "city1"];
  // var favorite = "movie1"
  // var favorite = "park1"
  // var favorite = "city1"

    userInput.push(food1);
    userInput.push(movie1);
    userInput.push(park1);
    // $("." + favorite).text(userInput).val();
    alert("My Favorite Things are: " + userInput[0] + ", " + userInput[1]
    + ", " + userInput[2]);
    userInput.forEach(function(item) {
      $('#fav-list ul').append("<li>"+item+"</li>");
    });

  // $("#favorite").append(<ul></ul>)
      //  + favorite['1']);
      // favorite.push(park, food, movie, city)
      // favorite[3,2,1,0]
      // alert(favorite[0])

      // $("#story").show();

  });
});
