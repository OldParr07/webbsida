<?php
// Skapa mappen "svar" om den inte finns
$baseDir = __DIR__ . '/svar';
if (!is_dir($baseDir)) {
    mkdir($baseDir, 0777, true);
}

// Hämta data från formuläret
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$product = isset($_POST['product']) ? trim($_POST['product']) : 'Okänt paket';

// Skapa undermapp för paketet
$paketDir = $baseDir . '/' . preg_replace('/[^a-zA-Z0-9_-]/', '', $product);
if (!is_dir($paketDir)) {
    mkdir($paketDir, 0777, true);
}

// Skapa ett unikt filnamn per kund (t.ex. tidsstämpel och namn)
$filename = $paketDir . '/' . date('Ymd_His') . '_' . preg_replace('/[^a-zA-Z0-9_-]/', '', $name) . '.txt';

// Spara kundens data
$content = "Namn: $name\nE-post: $email\nPaket: $product\nTid: " . date('Y-m-d H:i:s') . "\n";
file_put_contents($filename, $content);

// Bekräftelse till användaren
?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <title>Registrering mottagen</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="checkout-start">
        <h1>Tack för din registrering!</h1>
        <p>Dina uppgifter har sparats.</p>
        <a href="Home.html" class="button">Tillbaka till startsidan</a>
    </div>
</body>
</html>