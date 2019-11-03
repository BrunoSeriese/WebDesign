var open = false;

$(".navbutton").click(function() {
  console.log("succes");
  $(".navbutton__line--1").toggleClass("move-down");
  $(".navbutton__line--2").toggleClass("display-toggle");
  $(".navbutton__line--3").toggleClass("move-up");

  if (open === false) {
    open = true;
  } else {
    open = false;
  }

  console.log(open);

  $(".navbutton--1").toggleClass("navtainer");
  $(".navbutton__background").toggleClass("opacity-toggle");
  $(".header__brand").toggleClass("opacity-toggle");

});



$("#social").click(function() {

  if ($(".popup--2").css("opacity") == 1) {
    $(".popup--2").toggleClass("opacity-toggle");
    $(".popup--2").toggleClass("highz");
  } else if ($(".popup--3").css("opacity") == 1) {
    $(".popup--3").toggleClass("opacity-toggle");
    $(".popup--3").toggleClass("highz");
  } else if ($(".popup--4").css("opacity") == 1) {
    $(".popup--4").toggleClass("opacity-toggle");
    $(".popup--4").toggleClass("highz");
  } else if ($(".popup--5").css("opacity") == 1) {
    $(".popup--5").toggleClass("opacity-toggle");
    $(".popup--5").toggleClass("highz");
  } else if ($(".popup--6").css("opacity") == 1) {
    $(".popup--6").toggleClass("opacity-toggle");
    $(".popup--6").toggleClass("highz");
  }

  $(".popup--1").toggleClass("opacity-toggle");
  $(".popup--1").toggleClass("highz");

});


$("#design").click(function() {

  if ($(".popup--1").css("opacity") == 1) {
    $(".popup--1").toggleClass("opacity-toggle");
    $(".popup--1").toggleClass("highz");
  } else if ($(".popup--3").css("opacity") == 1) {
    $(".popup--3").toggleClass("opacity-toggle");
    $(".popup--3").toggleClass("highz");
  } else if ($(".popup--4").css("opacity") == 1) {
    $(".popup--4").toggleClass("opacity-toggle");
    $(".popup--4").toggleClass("highz");
  } else if ($(".popup--5").css("opacity") == 1) {
    $(".popup--5").toggleClass("opacity-toggle");
    $(".popup--5").toggleClass("highz");
  } else if ($(".popup--6").css("opacity") == 1) {
    $(".popup--6").toggleClass("opacity-toggle");
    $(".popup--6").toggleClass("highz");
  }



  $(".popup--2").toggleClass("opacity-toggle");
  $(".popup--2").toggleClass("highz");
});



$("#userinter").click(function() {


  if ($(".popup--1").css("opacity") == 1) {
    $(".popup--1").toggleClass("opacity-toggle");
    $(".popup--1").toggleClass("highz");
  } else if ($(".popup--2").css("opacity") == 1) {
    $(".popup--2").toggleClass("opacity-toggle");
    $(".popup--2").toggleClass("highz");
  } else if ($(".popup--4").css("opacity") == 1) {
    $(".popup--4").toggleClass("opacity-toggle");
    $(".popup--4").toggleClass("highz");
  } else if ($(".popup--5").css("opacity") == 1) {
    $(".popup--5").toggleClass("opacity-toggle");
    $(".popup--5").toggleClass("highz");
  } else if ($(".popup--6").css("opacity") == 1) {
    $(".popup--6").toggleClass("opacity-toggle");
    $(".popup--6").toggleClass("highz");
  }
  $(".popup--3").toggleClass("opacity-toggle");
  $(".popup--3").toggleClass("highz");

});

$("#contact-ons").click(function() {


  if ($(".popup--1").css("opacity") == 1) {
    $(".popup--1").toggleClass("opacity-toggle");
    $(".popup--1").toggleClass("highz");
  } else if ($(".popup--2").css("opacity") == 1) {
    $(".popup--2").toggleClass("opacity-toggle");
    $(".popup--2").toggleClass("highz");
  } else if ($(".popup--3").css("opacity") == 1) {
    $(".popup--3").toggleClass("opacity-toggle");
    $(".popup--3").toggleClass("highz");
  } else if ($(".popup--5").css("opacity") == 1) {
    $(".popup--5").toggleClass("opacity-toggle");
    $(".popup--5").toggleClass("highz");
  } else if ($(".popup--6").css("opacity") == 1) {
    $(".popup--6").toggleClass("opacity-toggle");
    $(".popup--6").toggleClass("highz");
  }
  $(".popup--4").toggleClass("opacity-toggle");
  $(".popup--4").toggleClass("highz");

});


$("#ons-projekt").click(function() {


  if ($(".popup--1").css("opacity") == 1) {
    $(".popup--1").toggleClass("opacity-toggle");
    $(".popup--1").toggleClass("highz");
  } else if ($(".popup--2").css("opacity") == 1) {
    $(".popup--2").toggleClass("opacity-toggle");
    $(".popup--2").toggleClass("highz");
  } else if ($(".popup--3").css("opacity") == 1) {
    $(".popup--3").toggleClass("opacity-toggle");
    $(".popup--3").toggleClass("highz");
  } else if ($(".popup--4").css("opacity") == 1) {
    $(".popup--4").toggleClass("opacity-toggle");
    $(".popup--4").toggleClass("highz");
  } else if ($(".popup--6").css("opacity") == 1) {
    $(".popup--6").toggleClass("opacity-toggle");
    $(".popup--6").toggleClass("highz");
  }
  $(".popup--5").toggleClass("opacity-toggle");
  $(".popup--5").toggleClass("highz");

});


$("#onze-info").click(function() {


  if ($(".popup--1").css("opacity") == 1) {
    $(".popup--1").toggleClass("opacity-toggle");
    $(".popup--1").toggleClass("highz");
  } else if ($(".popup--2").css("opacity") == 1) {
    $(".popup--2").toggleClass("opacity-toggle");
    $(".popup--2").toggleClass("highz");
  } else if ($(".popup--3").css("opacity") == 1) {
    $(".popup--3").toggleClass("opacity-toggle");
    $(".popup--3").toggleClass("highz");
  } else if ($(".popup--4").css("opacity") == 1) {
    $(".popup--4").toggleClass("opacity-toggle");
    $(".popup--4").toggleClass("highz");
  } else if ($(".popup--5").css("opacity") == 1) {
    $(".popup--5").toggleClass("opacity-toggle");
    $(".popup--5").toggleClass("highz");
  }



  $(".popup--6").toggleClass("opacity-toggle");
  $(".popup--6").toggleClass("highz");

});



$("#kontakt").click(function() {
  $("#icon-1").toggleClass("turn");
  $("#list1").toggleClass("header-enlarge");
  $("#kontakt").toggleClass("no-radius");
  var imgWidth = $('#kontakt').outerWidth();
  $('#drop-1').outerWidth(imgWidth);
  $("#drop-1").toggleClass("dropdown-roll");
  $("#drop-1").toggleClass("highz");
});


$("#list2").click(function() {


  $("#icon-2").toggleClass("turn");
  $("#list2").toggleClass("header-enlarge");
  $("#projekt").toggleClass("no-radius");
  var imgWidth = $('#projekt').outerWidth();
  $('#drop-2').outerWidth(imgWidth);
  $("#drop-2").toggleClass("dropdown-roll");
  $("#drop-2").toggleClass("highz");
});


$("#list3").click(function() {
  $("#icon-3").toggleClass("turn");
  $("#list3").toggleClass("header-enlarge");
  $("#info").toggleClass("no-radius");
  var imgWidth = $('#info').outerWidth();
  $('#drop-3').outerWidth(imgWidth);
  $("#drop-3").toggleClass("dropdown-roll");
  $("#drop-3").toggleClass("highz");

});





$("#close1").click(function() {
  if ($(".popup--1").css("opacity") == 1) {
    $(".popup--1").toggleClass("opacity-toggle");
    $(".popup--1").toggleClass("highz");
  }
});

$("#close2").click(function() {
  if ($(".popup--2").css("opacity") == 1) {
    $(".popup--2").toggleClass("opacity-toggle");
    $(".popup--2").toggleClass("highz");
  }
});

$("#close3").click(function() {
  if ($(".popup--3").css("opacity") == 1) {
    $(".popup--3").toggleClass("opacity-toggle");
    $(".popup--3").toggleClass("highz");
  }
});

$("#close4").click(function() {
  if ($(".popup--4").css("opacity") == 1) {
    $(".popup--4").toggleClass("opacity-toggle");
    $(".popup--4").toggleClass("highz");
  }
});
$("#close5").click(function() {
  if ($(".popup--5").css("opacity") == 1) {
    $(".popup--5").toggleClass("opacity-toggle");
    $(".popup--5").toggleClass("highz");
  }
});
$("#close6").click(function() {
  if ($(".popup--6").css("opacity") == 1) {
    $(".popup--6").toggleClass("opacity-toggle");
    $(".popup--6").toggleClass("highz");
  }
});



$("#nl").click(function(){

if( $(".language__option--1").css("opacity") === "0.999"){
  $("#nl").toggleClass("active__translation");


 $(".language__option--2").removeClass("active__translation");
  $(".language__option--3").removeClass("active__translation");
}




// INFOBOX
$(".infobox__item--1").html("Website Design op Maat <hr>");
$(".infobox__item--2").html("Eerlijke Tarieven <hr>");
$(".infobox__item--3").html("Gratis eerste Consult <hr>");

//SIDEBAR ITEMS
$("#social").html("<a>Sociale Media</a>");
$("#design").html("<a>Web Design Cursus</a>");
$("#userinter").html("<a>Web Design</a>");
$("#contact-ons").html("<a>Contact</a>");
$("#ons-projekt").html("<a>Projecten</a>");
$("#onze-info").html("<a>Info</a>");


//POPUP TWO
$(".popup--2__text--1").text("Altijd al willen leren om websites te bouwen?");
$(".price__tag").text("Per uur");
$(".price__disclaimer").text("(€10- voor 30 minuten)");
$(".popup--2__translate--1").text("Een uur 1 op 1 les via video");
$(".popup--2__translate--2").text("Bouw werkende sites vanaf de eerste les");
$(".popup--2__translate--3").text("Buiten lessen om worden vragen ook beantwoord");
$(".popup--2__translate--4").text("Bij meerdere lessen wordt korting gerekend");

//POPUP THREE
$(".popup--3__text--1").text("Wilt u:");
$(".popup--3__translate--1").text("Een moderne interface?");
$(".popup--3__translate--2").text("Een website die er ook mooi uitziet op een telefoon?");
$(".popup--3__translate--3").text("Een website die professionaliteit uitstraalt?");
$(".popup--3__footer").text("Neem contact op voor een intake gesprek!");


//POPUP SIX
$(".popup--6__translate--1").text("HTML CSS en JavaScript");
$(".popup--6__translate--2").text("Backend met NodeJS");
$(".popup--6__translate--3").text("MongoDB databases");
$(".popup--6__translate--4").text("E-Commerce");
$(".popup--6__translate--5").text("Modern Design");
});


$("#en").click(function(){

  if( $(".language__option--2").css("opacity") === "0.999"){
    $("#en").toggleClass("active__translation");


   $(".language__option--1").removeClass("active__translation");
    $(".language__option--3").removeClass("active__translation");
  }







// INFOBOX
$(".infobox__item--1").html("Personalised Web Design <hr>");
$(".infobox__item--2").html("Fair Prices <hr>");
$(".infobox__item--3").html("Free Intake <hr>");

//SIDEBAR ITEMS
$("#social").html("<a>Social Media</a>");
$("#design").html("<a>Web Design Course</a>");
$("#userinter").html("<a>Web Design</a>");
$("#contact-ons").html("<a>Contact</a>");
$("#ons-projekt").html("<a>Projects</a>");
$("#onze-info").html("<a>Info</a>");


//POPUP TWO
$(".popup--2__text--1").text("Always wanted to learn how to make a website?");
$(".price__tag").text("Per hour");
$(".price__disclaimer").text("(€10- for 30 minutes)");
$(".popup--2__translate--1").text("An hour 1 on 1 video lesson");
$(".popup--2__translate--2").text("Build working sites in the first lesson ");
$(".popup--2__translate--3").text("Questions are answered outside lessons aswell");
$(".popup--2__translate--4").text("Get a discount when buying multiple lessons");

//POPUP THREE
$(".popup--3__text--1").text("Do you  want:");
$(".popup--3__translate--1").text("A modern interface?");
$(".popup--3__translate--2").text("A website that looks good on a mobile device aswell?");
$(".popup--3__translate--3").text("A website that exudes professionality?");
$(".popup--3__footer").text("Contact us for an intake!");

//POPUP SIX
$(".popup--6__translate--1").text("HTML CSS and JavaScript");
$(".popup--6__translate--2").text("Backend with NodeJS");
$(".popup--6__translate--3").text("MongoDB databases");
$(".popup--6__translate--4").text("E-Commerce");
$(".popup--6__translate--5").text("Modern Design");





});







$("#ru").click(function(){

  if( $(".language__option--3").css("opacity") === "0.999"){
    $("#ru").toggleClass("active__translation");


   $(".language__option--1").removeClass("active__translation");
    $(".language__option--2").removeClass("active__translation");
  }





  // INFOBOX
  $(".infobox__item--1").html("индивидуальный дизайн сайта <hr>");
  $(".infobox__item--2").html("справедливые цены <hr>");
  $(".infobox__item--3").html("бесплатный первый прием <hr>");

  //SIDEBAR ITEMS
  $("#social").html("<a>социальные сети</a>");
  $("#design").html("<a>курс дизайна сайтаs</a>");
  $("#userinter").html("<a>веб-дизайн</a>");
  $("#contact-ons").html("<a>контакты</a>");
  $("#ons-projekt").html("<a>проектов</a>");
  $("#onze-info").html("<a>Информация</a>");


  //POPUP TWO
  $(".popup--2__text--1").text("всегда хотел создавать собственные сайты?");
  $(".price__tag").text("в час");
  $(".price__disclaimer").text("(€10- 30 минут)");
  $(".popup--2__translate--1").text("видео урок один на один (на английском)");
  $(".popup--2__translate--2").text("создавать рабочие сайты с вашего первого урока!");
  $(".popup--2__translate--3").text("на вопросы вне уроков тоже будут даны ответы");
  $(".popup--2__translate--4").text("при заказе нескольких уроков предоставляется скидка");

  //POPUP THREE
  $(".popup--3__text--1").text("вы хотите:");
  $(".popup--3__translate--1").text("современный интерфейс?");
  $(".popup--3__translate--2").text("сайт, который также хорошо выглядит на телефоне??");
  $(".popup--3__translate--3").text("сайт, который излучает профессионализм?");
  $(".popup--3__footer").text("напишите или позвоните нам для приема!");


  //POPUP SIX
  $(".popup--6__translate--1").text("HTML CSS а также JavaScript");
  $(".popup--6__translate--2").text("Backend с NodeJS");
  $(".popup--6__translate--3").text("MongoDB databases");
  $(".popup--6__translate--4").text("E-Commerce");
  $(".popup--6__translate--5").text("современный веб-дизайн");





});
