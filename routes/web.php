<?php

use App\Http\Controllers\Admin\PostController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function () {
    return view('guest.welcome');
}); */

Auth::routes();


Route::middleware('auth')
        ->namespace('admin')
        ->name('admin.')
        ->prefix('admin')
        ->group(function(){
            route::get('/','HomeController@index')->name('home');

            Route::resource('/posts', 'PostController');
        });



Route::get('/home', 'HomeController@index')->name('home');


Route::get('{any?}',function(){
    return view('guest.home');
})->where('any','.*');
