<?php

$host = 'sql313.infinityfree.com';
$db = 'if0_37195179_shop_db';
$user = 'if0_37195179';
$pass = 'pxtLiIEFZVv';

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
