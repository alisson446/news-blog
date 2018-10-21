<?php

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

Route::group(array('middleware' => ['cors'], 'prefix' => 'api'), function()
{

    Route::get('/', function () {
        return response()->json(['message' => 'Blog API', 'status' => 'Connected']);;
    });

    Route::resource('news', 'NewsController');

    Route::options('{any?}', function (){
        return response('',200);
    })->where('any', '.*');
});

Route::get('/', function () {
    return redirect('api');
});

