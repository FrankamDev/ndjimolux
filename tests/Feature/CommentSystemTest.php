<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Post;
use App\Models\Comment;

class CommentSystemTest extends TestCase
{
    use RefreshDatabase;

    public function test_authenticated_user_can_comment_on_post()
    {
        $user = User::factory()->create();
        $post = Post::factory()->create();

        $response = $this->actingAs($user)->post(route('comments.store'), [
            'content' => 'This is a test comment',
            'post_id' => $post->id,
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('comments', [
            'content' => 'This is a test comment',
            'user_id' => $user->id,
            'post_id' => $post->id,
        ]);
    }

    public function test_authenticated_user_can_reply_to_comment()
    {
        $user = User::factory()->create();
        $post = Post::factory()->create();
        $comment = Comment::create([
            'content' => 'Parent comment',
            'user_id' => $user->id,
            'post_id' => $post->id,
        ]);

        $response = $this->actingAs($user)->post(route('comments.store'), [
            'content' => 'This is a reply',
            'post_id' => $post->id,
            'parent_id' => $comment->id,
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('comments', [
            'content' => 'This is a reply',
            'parent_id' => $comment->id,
        ]);
    }

    public function test_authenticated_user_can_like_comment()
    {
        $user = User::factory()->create();
        $post = Post::factory()->create();
        $comment = Comment::create([
            'content' => 'Comment to like',
            'user_id' => $user->id,
            'post_id' => $post->id,
        ]);

        $response = $this->actingAs($user)->post(route('comments.like', $comment));

        $response->assertRedirect();
        $this->assertDatabaseHas('comment_likes', [
            'user_id' => $user->id,
            'comment_id' => $comment->id,
        ]);

        // Toggle (unlike)
        $response = $this->actingAs($user)->post(route('comments.like', $comment));
        $this->assertDatabaseMissing('comment_likes', [
            'user_id' => $user->id,
            'comment_id' => $comment->id,
        ]);
    }

    public function test_guest_cannot_comment()
    {
        $post = Post::factory()->create();

        $response = $this->post(route('comments.store'), [
            'content' => 'Guest comment',
            'post_id' => $post->id,
        ]);

        $response->assertRedirect('/login'); // Assuming redirect to login
    }
}
