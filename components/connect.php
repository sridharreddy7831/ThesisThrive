<?php

$host = 'sql12.freesqldatabase.com';
$db = 'sql12737076';
$user = 'sql12737076';
$pass = '1vd67cPHYu';

$dsn = "mysql:host=$host;dbname=$db";

try {
    $conn = new PDO($dsn, $user, $pass);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    // Display the error message
    die("Connection failed: " . $e->getMessage());
}

?>
