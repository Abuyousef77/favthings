$(document).ready(function() {
  $("#blank").submit(function(event) {
  var blank = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blank.forEach(function(blank) {
        var userInput = $("input#" + blank).val();
        $("." + blank).text(userInput);
        alert(blank);
      });

    $("#story").show();

    event.preventDefault();
  });
});
