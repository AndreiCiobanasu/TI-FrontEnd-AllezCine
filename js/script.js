$(document).ready(function() {
	var aler = document.getElementById("alert");
	var formAlert = document.getElementById("formAlert");

	    $("#slidey").slidey({
	        interval: 10000,
	        listCount: 5,
	        showList: true
	    });
	/*  ALERT AGE */

	function showAlert() {
		aler.style.display = "flex";
		formAlert.style.display = "flex";
	}
	showAlert;

	$('#formAlert').on('submit', function(e){
		e.preventDefault();
		return false;
	})

	$('#input').on('click', function(e){
		e.preventDefault();
		var age = document.getElementById("age").value;

		if (age>=18) {
			aler.style.display = "none";
			formAlert.style.display = "none";
		}else if(age<18){
		    location.href = "https://pics.me.me/how-to-be-an-adult-hawour-bills-dont-smoke-meth-10345128.png";
		}else{
		    alert ("Rentrez votre âge");
		}
	})


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
		});
	});




	 /* BOUTTON LOGIN */
	var login = document.getElementById("login");
	var formulaire = document.getElementById("formulaire");



	$('#loginButton').on('click', function(e){
		e.preventDefault();
		login.style.display = "flex";
		formulaire.style.display = "flex";
	})

	$('#login').on('click', function(e){
		e.preventDefault();
		login.style.display = "none";
		formulaire.style.display = "none";
	})

	$('#x').on('click', function(e){
		e.preventDefault();
		login.style.display = "none";
		formulaire.style.display = "none";
	})










/*////////////////////////////////////////////////////////////////////
							FEATURED MOVIES
////////////////////////////////////////////////////////////////////*/

/* ---------------------------- ACTION FILMS --------------------------*/
	var actionMovies = [

	{
		poster : 'img/geostorm.jpg',
		title  : 'Geostorm',
		annee  : '2009'
	},

	{
		poster : 'img/logan.jpg',
		title  : 'Logan',
		annee  : '2004'
	},

	{
		poster : 'img/skyfall.jpg',
		title  : 'Skyfall',
		annee  : '2007'
	},

	{
		poster : 'img/gladiator.jpg',
		title  : 'Gladiator',
		annee  : '2001'
	},

	{
		poster : 'img/iron_man.jpg',
		title  : 'Iron Man',
		annee  : '2005'
	},

	{
		poster : 'img/kingsman.jpg',
		title  : 'Kingsman',
		annee  : '1991'
	},

	{
		poster : 'img/volte_face.jpg',
		title  : 'Volte Face',
		annee  : '2008'
	},

	{
		poster : 'img/ip_man.jpg',
		title  : 'Ip Man',
		annee  : '2017'
	},

	{
		poster : 'img/the_raid.jpg',
		title  : 'The Raid',
		annee  : '2010'
	},

	{
		poster : 'img/robocop.jpg',
		title  : 'Robocop',
		annee  : '1998'
	},

	{
		poster : 'img/rambo.jpg',
		title  : 'Rambo',
		annee  : '2000'
	},

	{
		poster : 'img/looper.jpg',
		title  : 'Looper',
		annee  : '2009'
	},

	{
		poster : 'img/matrix.jpg',
		title  : 'Matrix',
		annee  : '2002'
	},

	{
		poster : 'img/taken.jpg',
		title  : 'Taken',
		annee  : '2008'
	},

	{
		poster : 'img/star_wars.jpg',
		title  : 'Star Wars',
		annee  : '1995'
	},

	{
		poster : 'img/spider_man.jpg',
		title  : 'Spider Man',
		annee  : '2002'
	},

	{
		poster : 'img/aliens.jpg',
		title  : 'Aliens',
		annee  : '2000'
	},

	{
		poster : 'img/terminator.jpg',
		title  : 'Terminator',
		annee  : '2005'
	},

	{
		poster : 'img/captain_america.jpg',
		title  : 'Capitain America',
		annee  : '2001'
	},

	{
		poster : 'img/wonder_woman.jpg',
		title  : 'Wonder Woman',
		annee  : '2000'
	},

	{
		poster : 'img/the_dark_kinght.jpg',
		title  : 'The dark king',
		annee  : '2004'
	},

	{
		poster : 'img/avengers.jpg',
		title  : 'Avengers',
		annee  : '1997'
	},

	{
		poster : 'img/mad_max.jpg',
		title  : 'Mad Max',
		annee  : '2017'
	},

	{
		poster : 'img/piege_de_cristal.jpg',
		title  : 'Piege de cristal',
		annee  : '2008'
	},
	];

	for (var i = 0; i < actionMovies.length; i++) {
	    var myDiv = document.createElement('div');
	    myDiv.classList.add('divFilms');

	    myDiv.innerHTML = '<div class="filmsContainer">' +
	                      	'<img class="imgFilms" src="' + actionMovies[i].poster + '">' +
		                    '<h4 class="titleFilm">' + actionMovies[i].title + '</h4>' +
		                    '<p class="anneeFilm">' + actionMovies[i].annee + '</p>' +
	                      '</div>';


	 

	    $('#actionMoviesContainer').append(myDiv);
	}


	$('#plusDeFilms_Action').on('click', function(e){
		e.preventDefault();
		$('#actionMoviesContainer').css('height','1440px');
		$('#moinsDeFilms_Action').css('display','flex');
		$('#plusDeFilms_Action').css('display','none');
	})

	$('#moinsDeFilms_Action').on('click', function(e){
		e.preventDefault();
		$('#actionMoviesContainer').css('height','720px');
		$('#plusDeFilms_Action').css('display','flex');
		$('#moinsDeFilms_Action').css('display','none');
	})













/* ------------------------------ COMEDIE FILMS --------------------------- */
	var comedieMovies = [

	{
		poster : 'img/bruce_almighty.jpg',
		title  : 'Bruce Almighty',
		annee  : '2009'
	},

	{
		poster : 'img/the_mask.jpg',
		title  : 'The Mask',
		annee  : '2004'
	},

	{
		poster : 'img/ascension.jpg',
		title  : 'Ascension',
		annee  : '2007'
	},

	{
		poster : 'img/jour_j.jpg',
		title  : 'Jour J',
		annee  : '2001'
	},

	{
		poster : 'img/la_chevre.jpg',
		title  : 'La Chevre',
		annee  : '2005'
	},

	{
		poster : 'img/very_bad_trip.jpg',
		title  : 'Very Bad Trip',
		annee  : '1991'
	},

	{
		poster : 'img/les_temps_modernes.jpg',
		title  : 'Les Temps Modernes',
		annee  : '2008'
	},

	{
		poster : 'img/asterix_et_obelix.jpg',
		title  : 'Asterix et Obelix',
		annee  : '2017'
	},

	{
		poster : 'img/vice-versa.jpg',
		title  : 'Vice Versa',
		annee  : '2010'
	},

	{
		poster : 'img/les_trois_freres.jpg',
		title  : 'Les Trois Frères',
		annee  : '1998'
	},

	{
		poster : 'img/les_visiteurs.jpg',
		title  : 'Les Visiteurs',
		annee  : '2000'
	},

	{
		poster : 'img/paddington.jpg',
		title  : 'Paddington',
		annee  : '2009'
	},

	{
		poster : 'img/arnacoeur.jpg',
		title  : 'L\'Arnacoeur',
		annee  : '2002'
	},

	{
		poster : 'img/alibi.com.jpg',
		title  : 'Alibi.com',
		annee  : '2008'
	},

	{
		poster : 'img/love_actually.jpg',
		title  : 'Love Actually',
		annee  : '1995'
	},

	{
		poster : 'img/babysitting.jpg',
		title  : 'Babysitting',
		annee  : '2002'
	},

	{
		poster : 'img/bad_moms.jpg',
		title  : 'Bad Moms',
		annee  : '2000'
	},

	{
		poster : 'img/le_dictateur.jpg',
		title  : 'Le Dictateur',
		annee  : '2005'
	},

	{
		poster : 'img/patients.jpg',
		title  : 'Patients',
		annee  : '2001'
	},

	{
		poster : 'img/intouchables.jpg',
		title  : 'Intouchables',
		annee  : '2000'
	},

	{
		poster : 'img/coco.jpg',
		title  : 'Coco',
		annee  : '2004'
	},

	{
		poster : 'img/podium.jpg',
		title  : 'Podium',
		annee  : '1997'
	},

	{
		poster : 'img/girls_trip.jpg',
		title  : 'Girls Trip',
		annee  : '2017'
	},

	{
		poster : 'img/jalouse.jpg',
		title  : 'Jalouse',
		annee  : '2008'
	},
	];

	for (var i = 0; i < comedieMovies.length; i++) {
	    var myDiv = document.createElement('div');
	    myDiv.classList.add('divFilms');

	    myDiv.innerHTML = '<div class="filmsContainer">' +
	                      	'<img class="imgFilms" src="' + comedieMovies[i].poster + '">' +
		                    '<h4 class="titleFilm">' + comedieMovies[i].title + '</h4>' +
		                    '<p class="anneeFilm">' + comedieMovies[i].annee + '</p>' +
	                      '</div>';


	 

	    $('#comedieMoviesContainer').append(myDiv);
	}


	$('#plusDeFilms_Comedie').on('click', function(e){
		e.preventDefault();
		$('#comedieMoviesContainer').css('height','1440px');
		$('#moinsDeFilms_Comedie').css('display','flex');
		$('#plusDeFilms_Comedie').css('display','none');
	})

	$('#moinsDeFilms_Comedie').on('click', function(e){
		e.preventDefault();
		$('#comedieMoviesContainer').css('height','720');
		$('#plusDeFilms_Comedie').css('display','flex');
		$('#moinsDeFilms_Comedie').css('display','none');
	})















/* ---------------------------- ALL FILMS --------------------------*/
	var allMovies = comedieMovies.concat(actionMovies);
	
	for (var i = 0; i < allMovies.length; i++) {
	    var myDiv = document.createElement('div');
	    myDiv.classList.add('divFilms');

	    myDiv.innerHTML = '<div class="filmsContainer">' +
	                      	'<img class="imgFilms" src="' + allMovies[i].poster + '">' +
		                    '<h4 class="titleFilm">' + allMovies[i].title + '</h4>' +
		                    '<p class="anneeFilm">' + allMovies[i].annee + '</p>' +
	                      '</div>';

	    $('#allMoviesContainer').append(myDiv);
	  }

	$('#plusDeFilms_All').on('click', function(e){
		e.preventDefault();
		$('#allMoviesContainer').css({'height': '1440px', 'overflow-y': 'scroll'});
		$('#moinsDeFilms_All').css('display','flex');
		$('#plusDeFilms_All').css('display','none');
	})

	$('#moinsDeFilms_All').on('click', function(e){
		e.preventDefault();
		$('#allMoviesContainer').css({'height': '720px', 'overflow-y': 'hidden'});
		$('#plusDeFilms_All').css('display','flex');
		$('#moinsDeFilms_All').css('display','none');
	})







	/* -------------------------Les boutons ALL, ACTION et COMEDIE ------------------------ */
	$('#allMoviesBouton').css({'background-color': 'orange', 'color': 'white'});
	$('#allMoviesContainer').css('display', 'flex');
	$('.plusDeFilms_Movie').css('display', 'none');
	$('#plusDeFilms_All').css('display', 'flex');

	$('#allMoviesBouton, #menuFilmsAllBouton').on('click', function(e) {
		$('.boutonsMovies').css({'background-color': 'white', 'color': 'black'});
		$('.moviesContainer').css('display', 'none');
		$('.plusDeFilms_Movie').css('display', 'none');

		$('#allMoviesBouton').css({'background-color': 'orange', 'color': 'white'});
		$('#allMoviesContainer').css('display', 'flex');
		$('#plusDeFilms_All').css('display', 'flex');
	})


	$('#actionMoviesBouton, #menuFilmsActionBouton').on('click', function(e) {
		$('.boutonsMovies').css({'background-color': 'white', 'color': 'black'});
		$('.moviesContainer').css('display', 'none');
		$('.plusDeFilms_Movie').css('display', 'none');

		$('#actionMoviesBouton').css({'background-color': 'orange', 'color': 'white'});
		$('#actionMoviesContainer').css('display', 'flex');
		$('#plusDeFilms_Action').css('display', 'flex');
	})


	$('#comedieMoviesBouton, #menuFilmsComedieBouton').on('click', function(e) {
		$('.boutonsMovies').css({'background-color': 'white', 'color': 'black'});
		$('.moviesContainer').css('display', 'none');
		$('.plusDeFilms_Movie').css('display', 'none');

		$('#comedieMoviesBouton').css({'background-color': 'orange', 'color': 'white'});
		$('#comedieMoviesContainer').css('display', 'flex');
		$('#plusDeFilms_Comedie').css('display', 'flex');
	})






	



/*////////////////////////////////////////////////////////////////////
							FEATURED SERIES TV
////////////////////////////////////////////////////////////////////*/

/* ---------------------------- ACTION SERIES --------------------------*/
	var actionSeries = [

	{
		poster : 'img/geostorm.jpg',
		title  : 'Geostorm',
		annee  : '2009'
	},

	{
		poster : 'img/logan.jpg',
		title  : 'Logan',
		annee  : '2004'
	},

	{
		poster : 'img/skyfall.jpg',
		title  : 'Skyfall',
		annee  : '2007'
	},

	{
		poster : 'img/gladiator.jpg',
		title  : 'Gladiator',
		annee  : '2001'
	},

	{
		poster : 'img/iron_man.jpg',
		title  : 'Iron Man',
		annee  : '2005'
	},

	{
		poster : 'img/kingsman.jpg',
		title  : 'Kingsman',
		annee  : '1991'
	},

	{
		poster : 'img/volte_face.jpg',
		title  : 'Volte Face',
		annee  : '2008'
	},

	{
		poster : 'img/ip_man.jpg',
		title  : 'Ip Man',
		annee  : '2017'
	},

	{
		poster : 'img/the_raid.jpg',
		title  : 'The Raid',
		annee  : '2010'
	},

	{
		poster : 'img/robocop.jpg',
		title  : 'Robocop',
		annee  : '1998'
	},

	{
		poster : 'img/rambo.jpg',
		title  : 'Rambo',
		annee  : '2000'
	},

	{
		poster : 'img/looper.jpg',
		title  : 'Looper',
		annee  : '2009'
	},

	{
		poster : 'img/matrix.jpg',
		title  : 'Matrix',
		annee  : '2002'
	},

	{
		poster : 'img/taken.jpg',
		title  : 'Taken',
		annee  : '2008'
	},

	{
		poster : 'img/star_wars.jpg',
		title  : 'Star Wars',
		annee  : '1995'
	},

	{
		poster : 'img/spider_man.jpg',
		title  : 'Spider Man',
		annee  : '2002'
	},

	{
		poster : 'img/aliens.jpg',
		title  : 'Aliens',
		annee  : '2000'
	},

	{
		poster : 'img/terminator.jpg',
		title  : 'Terminator',
		annee  : '2005'
	},

	{
		poster : 'img/captain_america.jpg',
		title  : 'Capitain America',
		annee  : '2001'
	},

	{
		poster : 'img/wonder_woman.jpg',
		title  : 'Wonder Woman',
		annee  : '2000'
	},

	{
		poster : 'img/the_dark_kinght.jpg',
		title  : 'The dark king',
		annee  : '2004'
	},

	{
		poster : 'img/avengers.jpg',
		title  : 'Avengers',
		annee  : '1997'
	},

	{
		poster : 'img/mad_max.jpg',
		title  : 'Mad Max',
		annee  : '2017'
	},

	{
		poster : 'img/piege_de_cristal.jpg',
		title  : 'Piege de cristal',
		annee  : '2008'
	},
	];

	for (var i = 0; i < actionSeries.length; i++) {
	    var myDiv = document.createElement('div');
	    myDiv.classList.add('divSeries');

	    myDiv.innerHTML = '<div class="filmsContainer">' +
	                      	'<img class="imgSeries" src="' + actionSeries[i].poster + '">' +
		                    '<h4 class="titleSeries">' + actionSeries[i].title + '</h4>' +
		                    '<p class="anneeSeries">' + actionSeries[i].annee + '</p>' +
	                      '</div>';


	 

	    $('#actionSeriesContainer').append(myDiv);
	}

	$('#plusDeSeries_Action').on('click', function(e){
		e.preventDefault();
		$('#actionSeriesContainer').css('height','1440px');
		$('#moinsDeSeries_Action').css('display','flex');
		$('#plusDeSeries_Action').css('display','none');
	})

	$('#moinsDeSeries_Action').on('click', function(e){
		e.preventDefault();
		$('#actionSeriesContainer').css('height','720px');
		$('#plusDeSeries_Action').css('display','flex');
		$('#moinsDeSeries_Action').css('display','none');
	})













/* ------------------------------ COMEDIE SERIES --------------------------- */
	var comedieSeries = [

	{
		poster : 'img/bruce_almighty.jpg',
		title  : 'Bruce Almighty',
		annee  : '2009'
	},

	{
		poster : 'img/the_mask.jpg',
		title  : 'The Mask',
		annee  : '2004'
	},

	{
		poster : 'img/ascension.jpg',
		title  : 'Ascension',
		annee  : '2007'
	},

	{
		poster : 'img/jour_j.jpg',
		title  : 'Jour J',
		annee  : '2001'
	},

	{
		poster : 'img/la_chevre.jpg',
		title  : 'La Chevre',
		annee  : '2005'
	},

	{
		poster : 'img/very_bad_trip.jpg',
		title  : 'Very Bad Trip',
		annee  : '1991'
	},

	{
		poster : 'img/les_temps_modernes.jpg',
		title  : 'Les Temps Modernes',
		annee  : '2008'
	},

	{
		poster : 'img/asterix_et_obelix.jpg',
		title  : 'Asterix et Obelix',
		annee  : '2017'
	},

	{
		poster : 'img/vice-versa.jpg',
		title  : 'Vice Versa',
		annee  : '2010'
	},

	{
		poster : 'img/les_trois_freres.jpg',
		title  : 'Les Trois Frères',
		annee  : '1998'
	},

	{
		poster : 'img/les_visiteurs.jpg',
		title  : 'Les Visiteurs',
		annee  : '2000'
	},

	{
		poster : 'img/paddington.jpg',
		title  : 'Paddington',
		annee  : '2009'
	},

	{
		poster : 'img/arnacoeur.jpg',
		title  : 'L\'Arnacoeur',
		annee  : '2002'
	},

	{
		poster : 'img/alibi.com.jpg',
		title  : 'Alibi.com',
		annee  : '2008'
	},

	{
		poster : 'img/love_actually.jpg',
		title  : 'Love Actually',
		annee  : '1995'
	},

	{
		poster : 'img/babysitting.jpg',
		title  : 'Babysitting',
		annee  : '2002'
	},

	{
		poster : 'img/bad_moms.jpg',
		title  : 'Bad Moms',
		annee  : '2000'
	},

	{
		poster : 'img/le_dictateur.jpg',
		title  : 'Le Dictateur',
		annee  : '2005'
	},

	{
		poster : 'img/patients.jpg',
		title  : 'Patients',
		annee  : '2001'
	},

	{
		poster : 'img/intouchables.jpg',
		title  : 'Intouchables',
		annee  : '2000'
	},

	{
		poster : 'img/coco.jpg',
		title  : 'Coco',
		annee  : '2004'
	},

	{
		poster : 'img/podium.jpg',
		title  : 'Podium',
		annee  : '1997'
	},

	{
		poster : 'img/girls_trip.jpg',
		title  : 'Girls Trip',
		annee  : '2017'
	},

	{
		poster : 'img/jalouse.jpg',
		title  : 'Jalouse',
		annee  : '2008'
	},
	];

	for (var i = 0; i < comedieSeries.length; i++) {
	    var myDiv = document.createElement('div');
	    myDiv.classList.add('divSeries');

	    myDiv.innerHTML = '<div class="filmsContainer">' +
	                      	'<img class="imgSeries" src="' + comedieSeries[i].poster + '">' +
		                    '<h4 class="titleSeries">' + comedieSeries[i].title + '</h4>' +
		                    '<p class="anneeSeries">' + comedieSeries[i].annee + '</p>' +
	                      '</div>';


	 

	    $('#comedieSeriesContainer').append(myDiv);
	}


	$('#plusDeSeries_Comedie').on('click', function(e){
		e.preventDefault();
		$('#comedieSeriesContainer').css('height','1440px');
		$('#moinsDeSeries_Comedie').css('display','flex');
		$('#plusDeSeries_Comedie').css('display','none');
	})

	$('#moinsDeSeries_Comedie').on('click', function(e){
		e.preventDefault();
		$('#comedieSeriesContainer').css('height','720');
		$('#plusDeSeries_Comedie').css('display','flex');
		$('#moinsDeSeries_Comedie').css('display','none');
	})















/* ---------------------------- ALL SERIES --------------------------*/
	var allSeries = comedieSeries.concat(actionSeries);
	
	for (var i = 0; i < allSeries.length; i++) {
	    var myDiv = document.createElement('div');
	    myDiv.classList.add('divSeries');

	    myDiv.innerHTML = '<div class="filmsContainer">' +
	                      	'<img class="imgSeries" src="' + allSeries[i].poster + '">' +
		                    '<h4 class="titleSeries">' + allSeries[i].title + '</h4>' +
		                    '<p class="anneeSeries">' + allSeries[i].annee + '</p>' +
	                      '</div>';

	    $('#allSeriesContainer').append(myDiv);
	  }

	$('#plusDeSeries_All').on('click', function(e){
		e.preventDefault();
		$('#allSeriesContainer').css({'height': '1440px', 'overflow-y': 'scroll'});
		$('#moinsDeSeries_All').css('display','flex');
		$('#plusDeSeries_All').css('display','none');
	})

	$('#moinsDeSeries_All').on('click', function(e){
		e.preventDefault();
		$('#allSeriesContainer').css({'height': '720px', 'overflow-y': 'hidden'});
		$('#plusDeSeries_All').css('display','flex');
		$('#moinsDeSeries_All').css('display','none');
	})







	/* -------------------------Les boutons ALL, ACTION et COMEDIE ------------------------ */
	$('#allSeriesBouton').css({'background-color': 'orange', 'color': 'white'});
	$('#allSeriesContainer').css('display', 'flex');
	$('.plusDeFilms_Series').css('display', 'none');
	$('#plusDeSeries_All').css('display', 'flex');

	$('#allSeriesBouton, #menuSeriesAllBouton').on('click', function(e) {
		$('.boutonsSeries').css({'background-color': 'white', 'color': 'black'});
		$('.seriesContainer').css('display', 'none');
		$('.plusDeFilms_Series').css('display', 'none');

		$('#allSeriesBouton').css({'background-color': 'orange', 'color': 'white'});
		$('#allSeriesContainer').css('display', 'flex');
		$('#plusDeSeries_All').css('display', 'flex');
	})


	$('#actionSeriesBouton, #menuSeriesActionBouton').on('click', function(e) {
		$('.boutonsSeries').css({'background-color': 'white', 'color': 'black'});
		$('.seriesContainer').css('display', 'none');
		$('.plusDeFilms_Series').css('display', 'none');

		$('#actionSeriesBouton').css({'background-color': 'orange', 'color': 'white'});
		$('#actionSeriesContainer').css('display', 'flex');
		$('#plusDeSeries_Action').css('display', 'flex');
	})


	$('#comedieSeriesBouton, #menuSeriesComedieBouton').on('click', function(e) {
		$('.boutonsSeries').css({'background-color': 'white', 'color': 'black'});
		$('.seriesContainer').css('display', 'none');
		$('.plusDeFilms_Series').css('display', 'none');

		$('#comedieSeriesBouton').css({'background-color': 'orange', 'color': 'white'});
		$('#comedieSeriesContainer').css('display', 'flex');
		$('#plusDeSeries_Comedie').css('display', 'flex');
	})



});

