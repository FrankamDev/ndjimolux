<!DOCTYPE html>
<html>
<head>
    <title>Nouveau Message de Contact</title>
</head>
<body>
    <h2>Nouveau message de {{ $contact->name }}</h2>
    <p><strong>Email:</strong> {{ $contact->email }}</p>
    <p><strong>Téléphone:</strong> {{ $contact->phone }}</p>
    <p><strong>Ville:</strong> {{ $contact->city }}</p>
    <p><strong>Type de projet:</strong> {{ $contact->project_type }}</p>
    <p><strong>Urgent:</strong> {{ $contact->urgent ? 'OUI' : 'NON' }}</p>
    
    <h3>Message:</h3>
    <p>{{ $contact->message }}</p>
</body>
</html>
