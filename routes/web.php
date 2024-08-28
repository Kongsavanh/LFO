<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('app');
// });

// Route::get('/user-page', function () {
//     return view('user');
// });


Route::get('{any}', function () {
    return view('app');
})->where('any','.*');