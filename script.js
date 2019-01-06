// JavaScript Document
var about = document.getElementById('about');
	var contact = document.getElementById('contact');
	var resume = document.getElementById('resume');
	var topdot = document.getElementById('topdot');
	var middot = document.getElementById('middot');
	var botdot = document.getElementById('botdot');
	var nombre = document.getElementById('nombre');
	var nav = document.getElementById('nav');
	var navabout = document.getElementById('navabout');
	var navcontact = document.getElementById('navcontact');
	var navresume = document.getElementById('navresume');
	var filters = document.getElementById('filters');
	var header = document.getElementById('header');
	var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var diez = document.getElementById('diez');
var once = document.getElementById('once');
var doce = document.getElementById('doce');
var trece = document.getElementById('trece');
var catorce = document.getElementById('catorce');
var quince = document.getElementById('quince');
var dieciseis = document.getElementById('dieciseis');
var diecisiete = document.getElementById('diecisiete');
var dieciocho = document.getElementById('dieciocho');
var diecinueve = document.getElementById('diecinueve');
var veinte = document.getElementById('veinte');
var veintiuno = document.getElementById('veintiuno');
var veintidos = document.getElementById('veintidos');
var veintitres = document.getElementById('veintitres');
var veinticuatro = document.getElementById('veinticuatro');
var upbutt = document.getElementById('upbutt');
	var kids = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince, dieciseis, diecisiete, dieciocho, diecinueve, veinte, veintiuno, veintidos, veintitres, veinticuatro];
	
	function switchup(subj,x) {
		if (subj.className == 'turnoff') {
			subj.setAttribute('class', 'turnon');
			x.setAttribute('class', 'turnoff');
			document.body.scrollTop = 0; // For Safari
    		document.documentElement.scrollTop = 0;
			setTimeout(function() {x.style.marginTop = "-50vw";
			subj.style.marginTop = "2vw";}, 200);
			}
		else {
			subj.style.marginTop = "-50vw";
			setTimeout(function() {subj.setAttribute('class', 'turnoff');}, 400);
			}
			}
	function switchout() {
		about.setAttribute('class', 'turnoff');
			contact.setAttribute('class', 'turnoff');
			window.open('resume18b.pdf', '_blank');
	}
		
window.onscroll = function() {shrinker()};

window.onresize = function() {shrinker()};

function shrinker() {
	if (window.innerWidth > 600) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		about.setAttribute('class', 'turnoff');
		contact.setAttribute('class', 'turnoff');
        topdot.style.fontSize = '9vw';
		middot.style.fontSize = '9vw';
		botdot.style.fontSize = '9vw';
		nombre.style.fontSize = '3vw';
		topdot.style.lineHeight = '1.2vw';
		middot.style.lineHeight = '1.2vw';
		botdot.style.lineHeight = '1.2vw';
		nombre.style.lineHeight = '2.4vw';
		navabout.style.width = '9%';
		navabout.style.paddingBottom = '9%';
		navabout.style.fontSize = '1.5vw';
		navcontact.style.width = '9%';
		navcontact.style.paddingBottom = '9%';
		navcontact.style.fontSize = '1.5vw';
		navcontact.style.marginLeft = '6.6%';
		navcontact.style.marginRight = '6.6%';
		navresume.style.width = '9%';
		navresume.style.paddingBottom = '9%';
		navresume.style.fontSize = '1.5vw';
		filters.style.top = '3.7vw';
		filters.style.backgroundColor = 'transparent';
		header.style.paddingBottom = '2vw';
		nav.style.right = '-6%';
		nav.style.left = '73vw';
		upbutt.style.bottom = '2vw';
    } 
	else {
        topdot.style.fontSize = '15vw';
		middot.style.fontSize = '15vw';
		botdot.style.fontSize = '15vw';
		nombre.style.fontSize = '5vw';
		topdot.style.lineHeight = '2vw';
		middot.style.lineHeight = '2vw';
		botdot.style.lineHeight = '2vw';
		nombre.style.lineHeight = '4vw';
		navabout.style.width = '15%';
		navabout.style.paddingBottom = '15%';
		navabout.style.fontSize = '2.5vw';
		navcontact.style.width = '15%';
		navcontact.style.paddingBottom = '15%';
		navcontact.style.fontSize = '2.5vw';
		navcontact.style.marginLeft = '11%';
		navcontact.style.marginRight = '11%';
		navresume.style.width = '15%';
		navresume.style.paddingBottom = '15%';
		navresume.style.fontSize = '2.5vw';
		filters.style.top = '15vw';
		filters.style.backgroundColor = 'white';
		header.style.paddingBottom = '0vw';
		nav.style.right = '3%';
		nav.style.left = '63.5vw';
		upbutt.style.bottom = '-6vw';
    } }
	else {topdot.style.fontSize = '15vw';
		middot.style.fontSize = '15vw';
		botdot.style.fontSize = '15vw';
		nombre.style.fontSize = '7vw';
		topdot.style.lineHeight = '2vw';
		middot.style.lineHeight = '2vw';
		botdot.style.lineHeight = '2vw';
		nombre.style.lineHeight = '5.5vw';
		navabout.style.width = '13%';
		navabout.style.paddingBottom = '13%';
		navabout.style.fontSize = '4.5vw';
		navcontact.style.width = '13%';
		navcontact.style.paddingBottom = '13%';
		navcontact.style.fontSize = '4.5vw';
		navcontact.style.marginLeft = '11%';
		navcontact.style.marginRight = '11%';
		navresume.style.width = '13%';
		navresume.style.paddingBottom = '13%';
		navresume.style.fontSize = '4.5vw';
		filters.style.top = '17vw';
		header.style.paddingBottom = '8vw';
		nav.style.right = '0';
		nav.style.left = '42.5vw';
		upbutt.style.bottom = '-6vw';
    }
}

function tryit(item) {
	if (item.className == this) {
		item.style.display = 'inline-block';
		item.style.width = '24%';
		item.style.marginLeft = '0.5%';
	}
	else {
		item.style.width = '0px';
		item.style.marginLeft = '0px';
		setTimeout(function(){item.style.display = 'none';}, 500);
	};}
	
	function revive(item) {
		item.style.display = 'inline-block';
		setTimeout(function(){item.style.width = '24%';
		item.style.marginLeft = '0.5%';}, 20);
	}
	
	function addsubj() {
		var yeet = '@gmail.com';
		var neet = 'chelseabborg';
		window.location.href = "mailto:" + neet + yeet;
		
	}
	
	function addnumb() {
		var numb = 9893801934;
		var er = numb * 2;
		window.location.href = "tel:+" + er;
	}
	
	function dive(item) {
		if (item.id == this) {
			item.style.width = '100%';
		}
		else {
			item.style.display = 'none';
		};
		var deep = this;
		setTimeout(function() { swim(deep) }, 500);
		}
	var swim = function(deep) {
		window.location.href = deep + "/index.html";
	}
	
	function goup() {
		document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
	}
	
	// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}