<?php

namespace App\Filament\Resources\Posts\Schemas;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class PostForm
{
  public static function configure(Schema $schema): Schema
  {
    return $schema

      ->schema([
        TextInput::make('title')
          ->required()
          ->maxLength(255)
          ->live(onBlur: true)
          ->afterStateUpdated(fn($state, callable $set) => $set('slug', Str::slug($state))),

        TextInput::make('slug')
          ->required()
          ->unique(ignoreRecord: true)
          ->maxLength(255),

        Textarea::make('excerpt')
          ->label('Extrait (pour la liste)')
          ->rows(3)
          ->maxLength(300),

        RichEditor::make('content')
          ->required()
          ->columnSpanFull()
          ->fileAttachmentsDirectory('blog-content'),

        FileUpload::make('image')
          ->image()
          ->label('Image de l’article')
          ->directory('public')
          ->visibility('public')
          ->imageEditor()
          ->disk('public')
          ->maxSize(5120),


        Select::make('category')
          ->options([
            'tutoriel'     => 'Tutoriel',
            'inspiration'  => 'Inspiration',
            'actualite'    => 'Actualité',
            'astuce'       => 'Astuce',
            'projet'       => 'Projet client',
          ])
          ->searchable(),

        TextInput::make('meta_title')
          ->maxLength(60),

        Textarea::make('meta_description')
          ->rows(3)
          ->maxLength(160),

        Checkbox::make('featured')
          ->label('Mettre en avant sur la page d\'accueil'),

        DateTimePicker::make('published_at')
          ->label('Date de publication (laisser vide = brouillon)'),
      ]);
  }
}
