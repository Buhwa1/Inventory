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

Route::get('/', function () {
    return view('signin');
});
Route::get('/signup', function () {
    return view('signup');
});

Route::get('/home', function () {
    return view('welcome');
});

//ADMIN ROUTES
Route::get('/admin',[App\Http\Controllers\HomeController::class,'index'])->name('admin.home');
Route::get('/admin/truck',[App\Http\Controllers\TruckController::class,'index'])->name('admin.trucks.index');
Route::get('/admin/truck/{id}',[App\Http\Controllers\TruckController::class,'show'])->name('admin.trucks.show');
Route::get('/admin/trip',[App\Http\Controllers\TripController::class,'index'])->name('admin.trips.index');
Route::get('/admin/trip/{id}',[App\Http\Controllers\TripController::class,'show'])->name('admin.trips.show');

Route::get('/admin/clients',[App\Http\Controllers\ClientController::class,'index'])->name('admin.clients.index');
Route::get('/admin/clients/{id}',[App\Http\Controllers\ClientController::class,'show'])->name('admin.clients.show');


Route::get('/admin/orders',[App\Http\Controllers\OrderController::class,'index'])->name('admin.orders.index');
Route::get('/admin/orders/{id}',[App\Http\Controllers\OrderController::class,'show'])->name('admin.orders.show');
Route::post('/add',[App\Http\Controllers\TripController::class,'add'])->name('admin.orders.add');



//CLIENT ROUTES
Route::get('/home',[App\Http\Controllers\ClientsController::class,'home'])->name('client.home');
Route::get('/clients',[App\Http\Controllers\ClientsController::class,'index'])->name('client.order.index');
Route::get('/truck-order/create',[App\Http\Controllers\ClientsController::class,'create'])->name('client.order.create');
Route::get('/trip',[App\Http\Controllers\TripController::class,'index'])->name('client.trips.show');
Route::get('/trip/{id}',[App\Http\Controllers\TripController::class,'show'])->name('client.trips.show');
// Route::post('/add',[App\Http\Controllers\ClientsController::class,'add'])->name('client.order.add');



