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


/*  ALERT AGE */

var alert = document.getElementById("alert");
var formAlert = document.getElementById("formAlert");

function showAlert() {
alert.style.display = "flex";
formAlert.style.display = "flex";
}

function hiddenAlert() {
alert.style.display = "none";
formAlert.style.display = "none";
}

function redirect(){
var age = document.getElementById("age").value;

if (age>=18) {
    hiddenAlert();
}else if(age<18){
    location.href = "https://pics.me.me/how-to-be-an-adult-hawour-bills-dont-smoke-meth-10345128.png";
}else{
    alert ("Rentrez votre âge");
}
}






