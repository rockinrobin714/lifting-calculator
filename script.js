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

$('.increase').click(function() {
  var parent = $(this).parent();
  if ($(this)[0].className === "increase") {
    console.log(parent)
  } else if ($(this)[0].className === "decrease") {
  }
  calculate();
});

$('.bar').click(function() {
  $('.bar').removeClass('selected');
  $(this).addClass('selected');
  var bar = ($(this).text());
  if (bar === 'None') {
    barWeight = 0;
  } else {
    barWeight = parseInt(bar);
  }
  calculate();
})