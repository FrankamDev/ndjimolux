<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;

class BlogController extends Controller
{
  public function index()
  {
    $posts = Post::latest('id') // trier du plus récent au plus ancien
      ->get()
      ->map(fn($post) => [
        'id' => $post->id,
        'title' => $post->title,
        'slug' => $post->slug,
        'excerpt' => $post->excerpt,
        'image' => $post->image,
        'category' => $post->category,
        'published_at' => $post->published_at,
      ]);

    return Inertia::render('Blog/BlogIndex', ['posts' => $posts]);
  }

  public function show($slug)
  {
    $post = Post::where('slug', $slug)->firstOrFail();

    return Inertia::render('Blog/BlogShow', [
      'post' => [
        'id' => $post->id,
        'title' => $post->title,
        'slug' => $post->slug,
        'excerpt' => $post->excerpt,
        'content' => $post->content,
        'image' => $post->image,
        'category' => $post->category,
        'published_at' => $post->published_at,
      ]
    ]);
  }
}
