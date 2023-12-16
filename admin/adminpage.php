<?php
session_start(); // Start the session

// Check if the user is not logged in
if (!isset($_SESSION['username'])) {
    header("location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Admin Page</title>
    </head>
    <body>
        <center>
            <h2>Welcome, <?php echo $_SESSION['username']; ?>!</h2>
            <p>This is the admin page content.</p>
            <?php
            // Define the PHP function
            function myFunction() {
            // Your PHP function logic here
            return "Function executed successfully!";
            }

            // Check if the button is clicked
            if (isset($_POST['submit'])) {
            // Call the PHP function when the button is clicked
            $result = myFunction();
            echo $result;
            }
            ?>

            <form method="post">
                <input type="submit" name="deletebook" value="Delete Book" id="button">
                <input type="submit" name="addbook" value="Add Book" id="button">
            </form>

            <style>

html {
    margin-top: 200px;
    font-size:15px;
    font-family:sans-serif;
}

h2 {
    border-bottom:5px solid black;
    width:15%;
    padding-bottom:10px;
}

#button {
    padding:10px 5px;
    background:linear-gradient(100deg, darkgray, gray);
}

            </style>
        </center>
    </body>
</html>

<?php
// $_SESSION = array();
// session_destroy();
// header("location: login.php");
// exit();
?>
