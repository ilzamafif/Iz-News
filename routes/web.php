<?php

use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

/*
|--------------------------------------------------------------------------
| Home
|--------------------------------------------------------------------------
*/

Route::get('/', [NewsController::class, 'index']);

/* --------------------------------------------------------------------------
| Store
|-------------------------------------------------------------------------- */

Route::post('/news', [NewsController::class, 'store'])->middleware(['auth', 'verified']);

/* --------------------------------------------------------------------------
| Show
|-------------------------------------------------------------------------- */

Route::get('/news', [NewsController::class, 'show'])->middleware(['auth', 'verified']);

/* --------------------------------------------------------------------------
| Edit
|-------------------------------------------------------------------------- */

Route::get('/news/edit/', [NewsController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.news');

/* --------------------------------------------------------------------------
| Update
|-------------------------------------------------------------------------- */

Route::post('/news/update', [NewsController::class, 'update'])->middleware(['auth', 'verified']);

/* --------------------------------------------------------------------------
| Delete
|-------------------------------------------------------------------------- */

Route::post('/news/delete', [NewsController::class, 'destroy'])->middleware([
    'auth', 'verified'
])->name('delete.news');

/*
|--------------------------------------------------------------------------
| Landing Page
|--------------------------------------------------------------------------
*/

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
