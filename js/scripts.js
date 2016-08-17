var translate = function(stringInput) {
  var stringInput = $('input#string').val();
  if (stringInput !== /^[A-z]+$/) {
    alert(stringInput);
  }
};

var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
var vowels = ['a','e','i','o','u']

$(document).ready(function() {
  $('form#translate').submit(function(event) {
    event.preventDefault();
    //var stringInput = $('input#string').val();
    //var result = translate(string)
    translate();
    //$("#result").text(stringInput);
 });
});
