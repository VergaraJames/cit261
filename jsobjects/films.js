// Create an object
// playing () is a function and the function is called Metods
const FilmOne = {
    name: 'Harry Potter',
    id: 01,
    playing() {
        return `Playing Movie ... ${this.name}`;
    }
}

// Show it in console
console.log(FilmOne.playing());

// Create a second object
const FilmTwo = {
        name: 'Superman',
        id: 02,
        playing() {
            return `Playing Movie ... ${this.name}`;
        }
    }
    // Show it in console
console.log(FilmTwo.playing());

// Create other object
const FilmThree = {
    name: 'Batman',
    id: 03,

    // METHODS or function playing()
    playing() {
        return `Playing Movie ... ${this.name}`;
    }
}
console.log(FilmThree.playing());

// Define a class 
// this.name is called PROPERTIES

class Film {
    constructor() {
        this.name = 'Harry Potter';
        this.id = 1;
    }
}

// INHERITANCE
class Serie extends Film {
    constructor(name, id, chapter) {
        super(name, id);
        this.chapter = chapter;
    }

    PlayingSerie() {
        return `Playing Serie ${this.chapter} ... ${this.name}`;
    }
}

// Define a class with parameters
class NewFilm {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    playingnew() {
        return `Playing Movie ... ${this.name}`;
    }
}

// add objects
const movieOne = new NewFilm("Harry Potter", 1);
const movieTwo = new NewFilm("Superman", 2);
const movieThree = new NewFilm("Batman", 3);
const serieOne = new Serie("Jetson", 4, 24);

// Show them in console
console.log(movieOne.playingnew());
console.log(movieTwo.playingnew());
console.log(movieThree.playingnew());
console.log(serieOne.PlayingSerie());