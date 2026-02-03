<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;

class BlogController extends Controller
{
  public function index()
  {
    $posts = Post::whereNotNull('published_at')
      ->where('published_at', '<=', now())
      ->latest('published_at')
      ->get();

    return Inertia::render('Blog/BlogIndex', [
      'posts' => $posts,
    ]);
  }
  public function show($slug)
  {
    $post = Post::where('slug', $slug)
      ->whereNotNull('published_at')
      ->firstOrFail();

    return Inertia::render('Blog/BlogShow', [
      'post' => $post,
    ]);
  }
}
