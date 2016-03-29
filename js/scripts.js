$(function(){
  $("#factorial-form").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("#number-input").val());
    var factorial = 1
    console.log(numberInput);
      $(".output").show();
    for (var index = 1; index <= numberInput ; index += 1) {
       factorial *= index;
      }
      if(numberInput < 0) {
        factorial = -1;
      }  else if (numberInput === 0){
        factorial = 1;
      }
    $(".output").text(factorial);
  });
});
