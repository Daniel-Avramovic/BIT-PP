var createdMovieList = [];
var createdPrograms = [];
var $movieList = document.querySelector('#movieList');
var $movieTitle = document.querySelector('#name');
var $movieLength = document.querySelector('#length');
var $movieGenre = document.querySelector('#genre')
var $createMovie = document.querySelector('#createMovie');
var $errorDisplay = document.querySelector('#error');
var $programDate = document.querySelector('#date');
var $createProgram = document.querySelector('#createProgram');
var $programList = document.querySelector('#programList');
var $movieListToAdd = document.querySelector('#listToAdd');
var $addMovie = document.querySelector('#addMovieToProgram');
var $addProgarm = document.querySelector('#listToAddProgram');
// console.log($programDate.value);
var onMovieCreate = function(){
    // console.log('hello')
    var titleValue = $movieTitle.value;
    var lengthValue = parseInt($movieLength.value);
    var genreValue = $movieGenre.value;
    if(!titleValue){
        $errorDisplay.textContent = 'Error input for title!';
        return;
    }else{
        $errorDisplay.textContent = '';
    }
    var new_Movie = createMovie(titleValue, genreValue, lengthValue);
    var stringMov = JSON.stringify(new_Movie);
    console.log(stringMov);
    console.log(new_Movie);
    createdMovieList.push(new_Movie);
    var index = createdMovieList.length - 1;
    $movieList.innerHTML += '<li>' + new_Movie.getData() + '</li>';
    $movieListToAdd.innerHTML += '<option value='+ index + '>'+new_Movie.getData()+ '</option>'
    // console.log(createdMovieList)
    
};

$createMovie.addEventListener('click', onMovieCreate);

var onCreateProgram = function(){
    var dateValue = $programDate.value;
    var newProgram = new Program(new Date(dateValue));
    createdPrograms.push(newProgram);
    console.log(newProgram);
    var index = createdPrograms.length - 1;
    // var i = -1;  createdprograms[length - 1]; 
    // console.log(createdPrograms[0].getData());
    $addProgarm.innerHTML += '<option value='+ index + '>' + newProgram.date +'</option>';
    $programList.innerHTML = '<li>' + newProgram.getData() + '</li>'
}
console.log(createdPrograms)
$createProgram.addEventListener('click', onCreateProgram);

var addMov = function(){
    // console.log('Hello form add!');
    var selectedMovie = $movieListToAdd.value;
    var parseMovie = JSON.parse(selectedMovie);
    var currentProgram = $addProgarm.value;
    // console.log(currentProgram)
    // console.log(parseMovie);
    createdPrograms[currentProgram].addMovie(createdMovieList[selectedMovie]);
    // console.log(createdPrograms[0])
    // console.log(createdPrograms[0].listOfMovies[0].getData());
    $programList.innerHTML = '<li>' + createdPrograms[currentProgram].getData() + '</li>'
    console.log(createdPrograms)
}

$addMovie.addEventListener('click', addMov);



