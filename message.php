<?php
     $name = $_POST['name'];
     $email = $_POST['email'];
     $phone = $_POST['phone'];
     $message = $_POST['message'];

     
     
    $receiver = "lordschildrenandelderly@gmail.com";
    $subject = "From: $name <$email>";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage: $message\n\nRegards, \n$name";
    $sender = "From: $email";
            
            
    mail($receiver, $subject, $body, $sender)

    header("Location: index.html");




?>