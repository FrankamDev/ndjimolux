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


Route::get('/blog-image/{filename}', function ($filename) {
  // Vérifie que le fichier existe
  if (!Storage::disk('private')->exists('blog/' . $filename)) {
    abort(404);
  }

  // Retourne le fichier
  return response()->file(Storage::disk('private')->path('blog/' . $filename));
})->name('blog.image');
Route::get('/blog/{slug}', [BlogController::class, 'show'])
  ->name('blog.show');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/devis', [DevisController::class, 'index'])
  ->name('devis.index');
Route::get('/realisations', [RealisationsController::class, 'index'])
  ->name('realisation.index');
Route::get('/contact', [ContactController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/', [HomeController::class, 'index']);
Route::get('dashboard', function () {
  return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/settings.php';
