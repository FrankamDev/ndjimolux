<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'excerpt' => $this->excerpt,
            'content' => $this->content,
            'image_url' => $this->image ? asset('storage/' . $this->image) : null,
            'category' => $this->category,
            'published_at' => $this->published_at ? $this->published_at->translatedFormat('d F Y') : null,
            'author' => [
                'name' => $this->user ? $this->user->name : 'Njimolux',
                'avatar' => $this->user ? $this->user->profile_photo_url : null,
                'initials' => $this->user ? substr($this->user->name, 0, 2) : 'NJ',
            ],
            'comments' => $this->comments()
                ->whereNull('parent_id') // Top level comments
                ->with(['user', 'replies.user', 'likes', 'replies.likes'])
                ->latest()
                ->get()
                ->map(function ($comment) {
                    return $this->formatComment($comment);
                }),
        ];
    }

    private function formatComment($comment)
    {
        return [
            'id' => $comment->id,
            'content' => $comment->content,
            'created_at' => $comment->created_at->diffForHumans(),
            'user' => [
                'id' => $comment->user->id,
                'name' => $comment->user->name,
                'avatar' => $comment->user->profile_photo_url,
                'initials' => substr($comment->user->name, 0, 2),
            ],
            'likes_count' => $comment->likes->count(),
            'is_liked' => $comment->is_liked,
            'replies' => $comment->replies->map(function ($reply) {
                return $this->formatComment($reply);
            }),
        ];
    }
}
