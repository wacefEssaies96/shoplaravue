<?php

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
Route::get('/', function(){
    return view('app');
});
Route::get('/products', 'SinglePageController@index');
Route::post('/products', 'SinglePageController@store');
Route::get('/products/edit/{id}', 'SinglePageController@edit');
Route::patch('/products/edit/{id}', 'SinglePageController@update');
Route::delete('/products/{id}', 'SinglePageController@destroy');
