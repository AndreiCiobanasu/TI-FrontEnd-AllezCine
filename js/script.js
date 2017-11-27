/* POP-UP COOKIES */
window.addEventListener("load", function(){
window.cookieconsent.initialise({
"palette": {
"popup": {
"background": "#64386b",
"text": "#ffcdfd"
},
"button": {
"background": "transparent",
"text": "#f8a8ff",
"border": "#f8a8ff"
}
},
"type": "opt-in"
})});



 /* BOUTTON LOGIN */
var login = document.getElementById("login");
var formulaire = document.getElementById("formulaire");


function seeLogin() {
	login.style.display = "flex";
	formulaire.style.display = "flex";
};

function hiddenLogin() {
	login.style.display = "none";
	formulaire.style.display = "none";
}




var voirFilms = document.getElementById("voirFilms");

function voirFilms(){
	voirFilms.style.display = "flex";
}










