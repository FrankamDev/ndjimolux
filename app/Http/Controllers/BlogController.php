<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Resources\PostResource;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $posts = Post::latest('id')->paginate(9);

        return Inertia::render('Blog/BlogIndex', [
            'posts' => PostResource::collection($posts),
        ]);
    }

    public function show($slug)
    {
        $post = Post::where('slug', $slug)->firstOrFail();

        return Inertia::render('Blog/BlogShow', [
            'post' => (new PostResource($post))->resolve(),
        ]);
    }
}
