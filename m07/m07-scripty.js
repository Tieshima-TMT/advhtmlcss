var animation = bodymovin.loadAnimation({
    container: document.getElementById('planetHero'),
    path: '../images/rocketPlanet.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Header Animation",
}); 

window.onresize = function() {
  if (window.innerHeight > 600) {
    $('#myLinks').slideDown(1);
  }
};

function myNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    $('#myLinks').slideUp(1);
    x.className += " responsive";
    $('#myLinks').slideDown();
  } else {
    $('#myLinks').slideUp();
    setTimeout(()=>{
      x.className = "topnav";
    }, 500);
  }
}

$( function() {
  $( "#tabs" ).tabs();
} );

$('#tabs').fadeTo(1000,1);