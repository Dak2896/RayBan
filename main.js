
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}



$(function(){
  $( ".downArrow" ).click(function() {
    $('html, body').animate({
      scrollTop: $("#mainBody1").offset().top
    }, 1500);
  });
});


$('.imageLeft').click(function() {
    var index = this.getAttribute("data-index");
    var descr = ".description" + index;
    console.log( descr);
    $(String(descr)).css('visibility','visible').animate({
                              opacity: 1
                            },500);
                          });


$('.close').click(function() {
    var index = this.getAttribute("alt");
    var descr = ".description" + index;
    console.log( "mo chiudo" + descr);
    $(String(descr)).animate({
                              opacity: 0
                            },500, function(){
                              $(String(descr)).css('visibility','hidden');
                            });
                          });



$('.owl-carousel, carouselImages').on('click', '.owl-item', function () {
    console.log("click");
    var index = this.getAttribute("data-img");
    var descr = this.getAttribute("data-desc");
    console.log(index);
    var descr= ".description" + descr;
    console.log(descr);
    $(String(descr)).prepend('<div style="z-index: 1 vertical-align: middle;  text-align: center;  position:absoulte; top:0; left:0; right:0;  height: 500px; background-color: black;"> <img class="closeFull" style="position:absolute; top: 3%; left:3%;" src="icons/close.png"> <img  style=" margin-top: 3%; width: 60%;" src="images/elle_king/1.jpg" ></div>');
$('.closeFull').click(function () {
    $(this).parent('div').remove();
});
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    loop:true,
    items: 5,
    margin: 2,
  })
});
