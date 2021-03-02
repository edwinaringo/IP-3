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
$(".card2-overlay").hide();
$(".card3-overlay").hide();
$(".card4-overlay").hide();
$(".card5-overlay").hide();
$(".card6-overlay").hide();
$(".card7-overlay").hide();
$(".card8-overlay").hide();

$('.project1').mouseover(function() {
  $('.card1-overlay').show();
}).mouseout(function() {
  $('.card1-overlay').hide();
});
$(".project2").mouseover(function() {
  $(".card2-overlay").show();
}).mouseout(function() {
  $(".card2-overlay").hide();
});
$(".project3").mouseover(function() {
  $(".card3-overlay").show();
}).mouseout(function() {
  $(".card3-overlay").hide();
});
$(".project4").mouseover(function() {
  $(".card4-overlay").show();
}).mouseout(function() {
  $(".card4-overlay").hide();
});
$(".project5").mouseover(function() {
  $(".card5-overlay").show();
}).mouseout(function() {
  $(".card5-overlay").hide();
});
$(".project6").mouseover(function() {
  $(".card6-overlay").show();
}).mouseout(function() {
  $(".card6-overlay").hide();
});
$(".project7").mouseover(function() {
  $(".card7-overlay").show();
}).mouseout(function() {
  $(".card7-overlay").hide();
});
$(".project8").mouseover(function() {
  $(".card8-overlay").show();
}).mouseout(function() {
  $(".card8-overlay").hide();
});







//the form section
$("button").click(function (omonge) {
  var client = document.getElementById('name').value;
  alert(' Dear ' + ' esteemed ' + client + ' you have succesfully submitted your comment ' + ' Thank you for doing business with us');
  event.preventDefault();
});
