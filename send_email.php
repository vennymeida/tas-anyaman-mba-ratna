<?php
header('Content-Type: application/json');

// Configuration
$recipient_email = "info@tasanyamanmbaratna.com"; // Change this to your actual email address
$cc_email = "tasanyamanratna@gmail.com"; // CC email (optional)

// Get form data and sanitize
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// Validate inputs
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Semua bidang wajib diisi.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Format email tidak valid.']);
    exit;
}

// Prepare email content
$email_subject = "Pesan Kontak dari Website: $subject";

// Create HTML email
$email_body = "<html><body>";
$email_body .= "<h2>Pesan Baru dari Website Tas Anyaman Mba Ratna</h2>";
$email_body .= "<p><strong>Nama:</strong> $name</p>";
$email_body .= "<p><strong>Email:</strong> $email</p>";
$email_body .= "<p><strong>Subjek:</strong> $subject</p>";
$email_body .= "<p><strong>Pesan:</strong><br>" . nl2br($message) . "</p>";
$email_body .= "<p>Pesan ini dikirim dari formulir kontak website pada " . date('Y-m-d H:i:s') . "</p>";
$email_body .= "</body></html>";

// Set headers for HTML email
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
if (!empty($cc_email)) {
    $headers .= "Cc: $cc_email\r\n";
}
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mail_sent = mail($recipient_email, $email_subject, $email_body, $headers);

// Return response
if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Pesan Anda telah berhasil dikirim. Terima kasih telah menghubungi kami!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami melalui WhatsApp.']);
}
?>
