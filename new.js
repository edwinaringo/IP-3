//  the what we do section
$(document). ready(function(){
    $('.icon1').click(function(){
        $('p1').toogle();
    });

    $('.icon2').click(function(){
      $('p2').toggle();
    });

    $('.icon3').click(function(){
      $('p3').toggle();
    });
});


//the portfolio section
//$('.col-md-3').mouseover(function() {
  //$('.').show();
//}).mouseout(function() {
 // $('.work1-overlay').hide();
//});

//portifolio section 
$('.cards').hide();

$('.col-md-3').mouseover(function() {
  $('.cards').show();
}).mouseout(function() {
  $('.cards').hide();
});


$("button").click(function (omonge) {
  var client = document.getElementById('name').value;
  alert(' Dear ' + ' esteemed ' + client + ' you have succesfully submitted your comment ' + ' Thank you for doing business with us');
  omonge.preventDefault();
});