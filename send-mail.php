<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$name    = htmlspecialchars($data["name"] ?? "");
$email   = htmlspecialchars($data["email"] ?? "");
$message = htmlspecialchars($data["message"] ?? "");

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["error" => "Missing fields"]);
    exit;
}

$to      = "ahknfirouzeh8024m@gmail.com";
$subject = "New Contact from $name";
$body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: noreply@ghost-dev.ir\r\nReply-To: $email";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Mail failed"]);
}
?>
