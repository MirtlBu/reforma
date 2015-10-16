<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $yourname = $_POST['yourname'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        $recipient = "bubuworking@gmail.com";

        // Set the email subject.
        $subject = "мебель на заказ";

        // Build the email content.
        $email_content = "Имя: $yourname\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Телефон:\n$phone\n";

        // Build the email headers.
        $email_headers = "From: $yourname <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo $recipient . $subject . $email_content . $email_headers;
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>