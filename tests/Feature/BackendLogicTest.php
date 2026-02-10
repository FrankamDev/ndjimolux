<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Contact;
use App\Models\Devis;
use App\Models\Realisation;
use App\Mail\ContactMail;
use App\Mail\DevisMail;
use Illuminate\Support\Facades\Mail;

class BackendLogicTest extends TestCase
{
    use RefreshDatabase;

    public function test_contact_form_submission_stores_data_and_sends_email()
    {
        Mail::fake();

        $data = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'phone' => '123456789',
            'city' => 'Douala',
            'project_type' => 'cuisine',
            'message' => 'Test message',
            'urgent' => true,
        ];

        $response = $this->post('/contact', $data);

        $response->assertRedirect();
        $response->assertSessionHas('success');

        $this->assertDatabaseHas('contacts', [
            'email' => 'john@example.com',
            'project_type' => 'cuisine',
        ]);

        Mail::assertSent(ContactMail::class, function ($mail) use ($data) {
            return $mail->contact->email === $data['email'];
        });
    }

    public function test_devis_form_submission_stores_data_and_sends_email()
    {
        Mail::fake();

        $data = [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'phone' => '987654321',
            'project_type' => 'meuble',
            'message' => 'I need a table',
            'urgent' => false,
        ];

        $response = $this->post('/devis', $data);

        $response->assertRedirect();
        $response->assertSessionHas('success');

        $this->assertDatabaseHas('devis', [
            'email' => 'jane@example.com',
            'project_type' => 'meuble',
        ]);

        Mail::assertSent(DevisMail::class, function ($mail) use ($data) {
            return $mail->devis->email === $data['email'];
        });
    }

    public function test_realisations_page_loads_dynamic_data()
    {
        Realisation::create([
            'title' => 'Test Project',
            'slug' => 'test-project',
            'category' => 'cuisine',
            'image' => 'test.jpg',
            'description' => 'Test description',
        ]);

        $response = $this->get('/realisations');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Realisations')
            ->has('realisations.data', 1)
            ->where('realisations.data.0.title', 'Test Project')
        );
    }
}
