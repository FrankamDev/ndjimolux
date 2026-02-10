<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BlogTest extends TestCase
{
    use RefreshDatabase;

    public function test_blog_index_displays_paginated_posts(): void
    {
        // Create 20 posts
        \App\Models\Post::factory()->count(20)->create();

        $response = $this->get(route('blog.index'));

        $response->assertStatus(200)
            ->assertInertia(fn ($page) => $page
                ->component('Blog/BlogIndex')
                ->has('posts.data', 9) // We set paginate(9)
                ->has('posts.meta')
                ->has('posts.links')
            );
    }

    public function test_blog_show_displays_post(): void
    {
        $post = \App\Models\Post::factory()->create([
            'title' => 'My Awesome Post',
            'slug' => 'my-awesome-post',
            'content' => 'Some interesting content here.'
        ]);

        $response = $this->get(route('blog.show', $post->slug));

        $response->assertStatus(200)
            ->assertInertia(fn ($page) => $page
                ->component('Blog/BlogShow')
                ->where('post.title', 'My Awesome Post')
                ->where('post.slug', 'my-awesome-post')
            );
    }
}
