<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthorBooksController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\AuthorsController;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register',[AuthController::class,'register']);
Route::get('/register',[BooksController::class,'index']);

Route::get('/books',[BooksController::class,'index']);
Route::resource('authors',AuthorsController::class);
Route::resource('authorbooks',AuthorBooksController::class);

//private routes
Route::group(['middleware' => ['auth:sanctum']], function(){

    Route::post('/books',[BooksController::class,'store']);
    Route::put('/books/{id}',[BooksController::class,'update']);
    Route::delete('/books/{id}',[BooksController::class,'update']);
});

// Route::resource('books',BooksController::class);
// Route::resource('authors',AuthorsController::class);
// Route::resource('authorbooks',AuthorBooksController::class);
