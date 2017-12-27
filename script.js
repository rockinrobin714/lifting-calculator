var oneRep = parseInt($('.one-rep-max').val());
var percentage = parseInt($('.percentage').val());
var barWeight = 45;

function calculate() {
  var total =  (oneRep * percentage * .01 - barWeight) / 2;
  $('.total').val(total);
};

$('.one-rep-max').keyup(function(e) {
  oneRep = e.target.value;
  calculate();
});

$('.percentage').keyup(function(e) {
  percentage = e.target.value;
  calculate();
});