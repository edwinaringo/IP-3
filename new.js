//  the what we do section
$(document). ready(function(){
    $('#design').click(function(){
        $('p1').toggle('slow');
        $('.icon1').toogle('slow');
    });

    $('#development').click(function(){
      $('p2').toggle('slow');
      $('.icon2').toogle('slow');
    });

    $('#product').click(function(){
      $('p3').toggle('slow');
      $('.icon3').toogle('slow');
    });
});


//the portfolio section
//$('.col-md-3').mouseover(function() {
  //$('.').show();
//}).mouseout(function() {
 // $('.work1-overlay').hide();
//});

//portifolio section 
$('.card1-overlay').hide();
$('.card2-overlay').hide();
$('.card3-overlay').hide();
$('.card4-overlay').hide();
$('.card5-overlay').hide();
$('.card6-overlay').hide();
$('.card7-overlay').hide();
$('.card8-overlay').hide();

$('.col-md-3').mouseover(function() {
  $('.cards').show();
}).mouseout(function() {
  $('.cards').hide();
});








//the form section
$("button").click(function (omonge) {
  var client = document.getElementById('name').value;
  alert(' Dear ' + ' esteemed ' + client + ' you have succesfully submitted your comment ' + ' Thank you for doing business with us');
  omonge.preventDefault();
});