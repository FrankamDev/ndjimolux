<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DevisController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RealisationsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use Illuminate\Support\Facades\Storage;


Route::get('/blog/image/{filename}', function ($filename) {
  return response()->file(storage_path('app/public/blog/' . $filename));
})->name('blog.image');
Route::get('/blog/{slug}', [BlogController::class, 'show'])
  ->name('blog.show');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/devis', [DevisController::class, 'index'])
  ->name('devis.index');
Route::get('/realisations', [RealisationsController::class, 'index'])
  ->name('realisation.index');
Route::get('/contact', [ContactController::class, 'index'])->name('contact.index');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::post('/devis', [DevisController::class, 'store'])->name('devis.store');

Route::middleware(['auth'])->group(function () {
    Route::post('/comments', [App\Http\Controllers\CommentController::class, 'store'])->name('comments.store');
    Route::delete('/comments/{comment}', [App\Http\Controllers\CommentController::class, 'destroy'])->name('comments.destroy');
    Route::post('/comments/{comment}/like', [App\Http\Controllers\CommentController::class, 'toggleLike'])->name('comments.like');
});

Route::get('/about', [AboutController::class, 'index']);
Route::get('/', [HomeController::class, 'index']);
Route::get('dashboard', function () {
  return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/settings.php';
