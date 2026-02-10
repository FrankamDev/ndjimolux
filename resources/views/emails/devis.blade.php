<!DOCTYPE html>
<html>
<head>
    <title>Nouvelle Demande de Devis</title>
</head>
<body>
    <h2>Nouvelle demande de {{ $devis->name }}</h2>
    <p><strong>Email:</strong> {{ $devis->email }}</p>
    <p><strong>Téléphone:</strong> {{ $devis->phone }}</p>
    <p><strong>Ville:</strong> {{ $devis->city }}</p>
    <p><strong>Type de projet:</strong> {{ $devis->project_type }}</p>
    <p><strong>Budget:</strong> {{ $devis->budget }}</p>
    <p><strong>Délai:</strong> {{ $devis->start_when }}</p>
    <p><strong>Source:</strong> {{ $devis->how_know_us }}</p>
    <p><strong>Urgent:</strong> {{ $devis->urgent ? 'OUI' : 'NON' }}</p>
    
    <h3>Détails du projet:</h3>
    <p>{{ $devis->message }}</p>
</body>
</html>
