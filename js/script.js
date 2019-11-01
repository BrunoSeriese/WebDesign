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
