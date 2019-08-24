<?php

// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Update this to your desired email address.
    $recipient = "osamaesmail2@gmail.com";


    // Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $subject = strip_tags(trim($_POST["name"]));
    $subject = str_replace(array("\r","\n"),array(" "," "),$subject);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);


    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['message'])) {
        http_response_code(500);
        return 2;
    }

    // Check that data was sent to the mailer.
    if ( empty($name) OR empty($message) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(500);
        return 3;
    }


    // Set the email subject.
    $subject = "$subject from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = 'From: '.$email."\r\n".
        'Reply-To: '.$email."\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        return 1;
    } else {
        http_response_code(500);
        return 4;
    }

}
else {
    echo 5;
}
