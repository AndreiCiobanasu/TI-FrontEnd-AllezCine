var moviesForSale = [
{
title : 'Drive',
resume : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eaque quas debitis animi ipsum veritatis suscipit maxime, velit, alias assumenda eos aperiam ratione unde. Ipsam cupiditate consequuntur ducimus animi iure.',
release_date: '2015',
genre : 'drama',
price : '15 euro',
poster : 'img/drive-mini.jpg',
trailer : '<iframe width="560" height="315" src="https://www.youtube.com/embed/KBiOF3y1W0Y" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
},

        {
            title       : 'Guardians Of The Galaxy',
            resume      : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iure vitae voluptatibus voluptatum tempore ipsum nisi perspiciatis tempora error dolor a, at rerum nesciunt fuga ab natus dolorem numquam nulla.',
            release_date: '2015',
            genre       : 'action',
            price       : '15 euros',
            poster      : 'img/guardians-mini.png',
            trailer     : '<iframe width="560" height="315" src="https://www.youtube.com/embed/d96cjJhvlMA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
        },

        {
            title       : 'InterStellar',
            resume      : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corporis non similique velit, quibusdam, perferendis doloribus voluptatibus repellat iure aspernatur quo veniam, nulla quaerat ducimus nam aliquid at minus alias.',
            release_date: '2015',
            genre       : 'sci-fi',
            price       : '15 euro',
            poster      : 'img/interstellar-mini.jpg',
            trailer     : '<iframe width="560" height="315" src="https://www.youtube.com/embed/zSWdZVtXT7E" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
        },

        {
            title       : 'Mad Max Fury Road',
            resume      : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minima rerum similique facilis consequatur repellendus dolore. Aut fugiat, placeat sit consequatur, similique sint quasi labore maxime quae a, eius nobis.',
            release_date: '2015',
            genre       : 'action/sci-fi',
            price       : '15 euro',
            poster      : 'img/mad-max-mini.jpg',
            trailer     : '<iframe width="560" height="315" src="https://www.youtube.com/embed/hEJnMQG9ev8" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
        },

        {
            title       : 'The Walking Dead Season 1',
            resume      : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni distinctio, amet minima dolores blanditiis assumenda veniam illo illum perspiciatis porro quos aliquid eligendi perferendis possimus non dicta nobis odio accusantium.',
            release_date: '2015',
            genre       : 'horror',
            price       : '65 euro',
            poster      : 'img/walking-dead-mini.jpg',
            trailer     : '<iframe width="560" height="315" src="https://www.youtube.com/embed/R1v0uFms68U" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
        },

        {
            title       : 'Vikings Season 3',
            resume      : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed reprehenderit repudiandae, illum ad, iste molestias totam praesentium inventore, eius natus excepturi velit reiciendis odit unde nam dolorum ipsa! Dolor, alias.',
            release_date: '2015',
            genre       : 'historical',
            price       : '65 euro',
            poster      : 'img/vikings-mini.jpg',
            trailer     : '<iframe width="560" height="315" src="https://www.youtube.com/embed/UQm9torR1K8" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
        }
    ];

    function displayShopMovie (movie) {
        console.log(movie);
        $('#shop-trailer')       .html(movie.trailer);
        $('#shop-description h4').text(movie.title);
        $('#resume')             .text(': ' + movie.resume);
        $('#release-date')       .text(': ' + movie.release_date);
        $('#genre')              .text(': ' + movie.genre);
        $('#price')              .text(': ' + movie.price);
    }

    for (var i = 0; i < moviesForSale.length; i++) {

        var myDiv = document.createElement('div');
        myDiv.classList.add('panel');
        myDiv.classList.add('panel-default');

        myDiv.innerHTML =   '<div class="panel-body">' +
                                '<img class="img-responsive" src="' + moviesForSale[i].poster + '">' +
                            '</div>' +
                            '<div class="panel-footer">' +
                                '<h4 class="text-center">' + moviesForSale[i].title + '</h4>' +
                                '<p>' + moviesForSale[i].release_date + '<span class="pull-right">' + moviesForSale[i].price + '</span>' + '</p>' +
                            '</div>';
        
        var film = moviesForSale[i];
        myDiv.addEventListener('click', 
            function () {
                console.log('I Clicked !');
                displayShopMovie(film);
            }
        );

        $('#shop-posters').append(myDiv);
    }

    displayShopMovie(moviesForSale[0]);























    /*var allMoviesBouton = document.getElementById("allMoviesBouton");
var actionMoviesBouton = document.getElementById("actionMoviesBouton");
var policierMoviesBouton = document.getElementById("policierMoviesBouton");

var allMoviesContainer = document.getElementById("allMoviesContainer");
var actionMoviesContainer = document.getElementById("actionMoviesContainer");
var policierMoviesContainer = document.getElementById("policierMoviesContainer");



var div = document.createElement('div');
div.classList = "divFilms";
var img = document.createElement('img');
img.classList = "imgFilms";
img.src = "img/swissarmyman-2016-comedie.jpg";
div.appendChild(img);
var title = document.createElement('p');
title.classList = "titleFilm";
var texte = document.createTextNode("nom du film");
title.appendChild(texte);
div.appendChild(title);
var annee = document.createElement('p');
annee.classList = "anneeFilm";
var date = document.createTextNode("annee");
annee.appendChild(date);
div.appendChild(annee);

actionMoviesContainer.appendChild(div);


var test {
    div,
    img
}, p = '';

for(var clefs in test) {
    p+= clefs + ' : ' + test[clefs] + '\n';
}*/