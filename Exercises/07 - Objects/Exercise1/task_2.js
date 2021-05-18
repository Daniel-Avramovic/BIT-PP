// Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 

var favouriteMovie = {
    name : 'Back to the Future',
    actors: [{
        name : 'Michael J. Fox',
        nameInMovie : 'Marty McFly',
    }, {
        name : 'Christopher Lloyd',
        nameInMovie : 'Dr. Emmett Brown',
    }, {
        name : 'Lea Thompson',
        nameInMovie : 'Lorraine Baines',
    }, {
        name : 'Crispin Glover',
        nameInMovie : 'George McFly'
    }],
    directors : 'Robert Zemeckis',
    writers : [{
        name : 'Robert Zemeckis',
        name : 'Bob Gale',
    }],
    genres : ['Comedy', 'Adventure', 'Sci-Fi'],
    popularity : '8,5',
}

console.log(favouriteMovie.actors[0]);