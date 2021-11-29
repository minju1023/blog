<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::post('users',[App\Http\Controllers\UserController::class,'createUser']);
Route::get('users',[App\Http\Controllers\UserController::class,'listUsers']);
Route::put('users/{userId}',[\App\Http\Controllers\UserController::class,'updateUser']);
