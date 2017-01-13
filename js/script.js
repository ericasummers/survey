$(document).ready(function() {
  $("form#identifier").submit(function(event) {
    var nameInput = $("input#name").val();
    var nicknameInput = $("input#nickname").val();
    var ageInput = $("input#age").val();
    var animals = $("#animals").val();
    var drink = $("input:radio[name=drink]:checked").val();

    $(".name").text(nameInput);
    $(".nickname").text(nicknameInput);
    $(".age").text(ageInput);
    $("#output").show();
    event.preventDefault();
  });
});
