"use strict";

let numberOfFilms =  +prompt ("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

let nameFilms = prompt ('Один из последних просмотренных фильмов', ''),
    nameFilms1 = prompt('Один из последних просмотренных фильмов', '');

let estimationFilms = prompt('На сколько оцените его?'),
    estimationFilms1= prompt('На сколько оцените его?');

personalMovieDB.movie[nameFilms] = estimationFilms;
personalMovieDB.movie[nameFilms1] = estimationFilms1;
console.log(personalMovieDB);