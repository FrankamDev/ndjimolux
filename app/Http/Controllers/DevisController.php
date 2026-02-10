<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Devis;
use App\Mail\DevisMail;
use Illuminate\Support\Facades\Mail;

class DevisController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render("Devis");
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'city' => 'nullable|string|max:255',
            'project_type' => 'required|string|max:255',
            'budget' => 'nullable|string',
            'start_when' => 'nullable|string',
            'how_know_us' => 'nullable|string',
            'message' => 'required|string',
            'urgent' => 'boolean',
        ]);

        $devis = Devis::create($validated);

        // Send email to admin
        try {
            \Illuminate\Support\Facades\Mail::to('njimoluxe@gmail.com')->send(new DevisMail($devis));
        } catch (\Exception $e) {
            // Log error
        }

        return redirect()->back()->with('success', 'Votre demande de devis a bien été envoyée !');
    }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    //
  }
}
