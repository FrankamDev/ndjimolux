<?php

namespace App\Filament\Resources\Posts\Tables;

use App\Models\Post;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;

class PostsTable
{
  public static function configure(Table $table): Table
  {
    return $table
      ->query(Post::query())
      ->columns([
        TextColumn::make('title')
          ->searchable()
          ->sortable()
          ->limit(50),

        TextColumn::make('category')
          ->badge()
          ->color(fn(string $state): string => match ($state) {
            'tutoriel' => 'success',
            'inspiration' => 'warning',
            'actualite' => 'info',
            'astuce' => 'primary',
            'projet' => 'danger',
            default => 'gray',
          }),

        IconColumn::make('featured')
          ->boolean()
          ->trueColor('success')
          ->falseColor('gray'),

        TextColumn::make('published_at')
          ->dateTime('d M Y - H:i')
          ->sortable(),

        TextColumn::make('user.name')
          ->label('Auteur')
          ->sortable(),
      ])
      ->filters([
        SelectFilter::make('category')
          ->options([
            'tutoriel' => 'Tutoriel',
            'inspiration' => 'Inspiration',
            'actualite' => 'Actualité',
            'astuce' => 'Astuce',
            'projet' => 'Projet client',
          ]),

        TernaryFilter::make('featured')
          ->label('Mis en avant'),
      ])
      ->recordActions([
        EditAction::make(),
        DeleteAction::make(),
        EditAction::make('view')
          ->label('Voir sur le site')
          ->icon('heroicon-o-eye')
          ->url(fn(Post $record) => "/blog/{$record->slug}")
          ->openUrlInNewTab(),
      ])
      ->toolbarActions([
        BulkActionGroup::make([
          DeleteBulkAction::make(),
        ]),
      ]);
  }
}
