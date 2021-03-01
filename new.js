//  the what we do section
$(document). ready(function(){
    $('.icon1').click(function(){
      $('p1').toggle();
    });
    $('.icon2').click(function(){
      $('p2').toggle();
    });
    $('.icon3').click(function(){
      $('p3').toggle();
    });
});


//the portfolio section
//$('row').hover(function (){
  //$('.para').fadeToogle(1000, "linear");
//});

//portifolio section 


$("button").click(function (omonge) {
  var client = document.getElementById('name').value;
  alert(' Dear ' + ' esteemed ' + client + ' you have succesfully submitted your comment ' + ' Thank you for doing business with us');
  omonge.preventDefault();
});