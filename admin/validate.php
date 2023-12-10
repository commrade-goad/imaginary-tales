<?php
session_start();

include_once('connection.php');

function test_input($data) {

    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = test_input($_POST["username"]);
    $password = test_input($_POST["password"]);
    $stmt = $conn->prepare("SELECT * FROM adminlogin");
    $stmt->execute();
    $users = $stmt->fetchAll();

    foreach($users as $user) {

        if (($user['username'] == $username) && ($user['password'] == $password)) {
            $_SESSION['username'] = $username; // Store the username in the session
            header("location: adminpage.php");
        } else {
            $_SESSION = array();
            session_destroy();
            echo "<script language='javascript'>";
            echo "let userInput = confirm('WRONG INFORMATION');";
            echo "if (userInput) { window.location.href = \"index.php\";}";
            echo "</script>";
            die();
        }
    }
}

?>

