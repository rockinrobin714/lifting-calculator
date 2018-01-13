var oneRep = parseInt($('.one-rep-max').val());
var percentage = parseInt($('.percentage').val());
var barWeight = 45;

function calculate() {
  var total =  (oneRep * percentage * .01 - barWeight) / 2;
  $('.one-rep-max').val(oneRep);
  $('.percentage').val(percentage + "%");
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

$('.increase, .decrease').click(function() {
  var incrementor;
  if ($(this)[0].className === "increase") {
    incrementor = 5;
  } else if ($(this)[0].className === "decrease") {
    incrementor = -5;
  }
  if (~$(this).parent()[0].innerText.indexOf('Rep Max')) {
    oneRep += incrementor;
  } else if (~$(this).parent()[0].innerText.indexOf('Percentage')) {
    percentage += incrementor;
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