"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: true
};
function start() {
    numberOfFilms =  prompt ("Сколько фильмов вы уже посмотрели?", "");

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms =  prompt ("Сколько фильмов вы уже посмотрели?", "");
    }
}

// start();

// ВЫПОЛНЕНИЕ БЕЗ ЦИКЛА И УСЛОВИЙ
// let nameFilms = prompt ('Один из последних просмотренных фильмов', ''),
//     nameFilms1 = prompt('Один из последних просмотренных фильмов', '');

// let estimationFilms = prompt('На сколько оцените его?'),
//     estimationFilms1= prompt('На сколько оцените его?');

// personalMovieDB.movie[nameFilms] = estimationFilms;
// personalMovieDB.movie[nameFilms1] = estimationFilms1;


function personalLevel() {
    if ( numberOfFilms<= 10){
        console.log('Просмотренно двольно мало фильмов');
    } else if (numberOfFilms > 10 && numberOfFilms < 30) {
        console.log ('Вы классический зритель');
    }
    else if ( numberOfFilms >= 30){
        console.log('Вы киноман');
    }
    else {
        console.log('Ошибка');
    }
}


// personalLevel();

function rememberMyFilms(){
    for (let i = 1; i < 3; i++) {
        let nameFilms = prompt ('Один из последних просмотренных фильмов', '');
        let estimationFilms = prompt ('На сколько оцените его?','');
        if (nameFilms != null && estimationFilms != null && nameFilms != '' && estimationFilms != '' && nameFilms.length < 50) 
        {
            personalMovieDB.movie[nameFilms] = estimationFilms;
            console.log('done');
        }else {
            console.log ('ERROR');
            i--; 
        }
    }
}

// rememberMyFilms();


function showMYDB() {
    while ( personalMovieDB.privat == false) {
        console.log (personalMovieDB);
        break;
    }
}

showMYDB();

function writeYourGenres () {
    for (let i = 1; i > 4; i++) {
        let genres = prompt(`Ваш любимый жанр под номером ${i}`);
        console.log (personalMovieDB);
    }
}

// ПОТОМ ПРОРАБОТАТЬ
// for (let i = 1; i < 3; i++) {
//     let nameFilms = prompt ('Один из последних просмотренных фильмов', '');
//     let estimationFilms = prompt ('На сколько оцените его?','');
//     while (nameFilms == null && estimationFilms == null && nameFilms == '' && estimationFilms == '' && nameFilms.length >= 50) 
//     {
//         console.log ('ERROR');
//         i--;
//         } 
//     personalMovieDB.movie[nameFilms] = estimationFilms;
//     console.log('done');
// }

// console.log(personalMovieDB);