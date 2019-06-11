<?php
if($_POST["employee"]) {
    mail("ndillon@shfbm.org", "Form to email message", $_POST["employee"], "From: ndillon@shfbm.org");
}
?>
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <div>Content goes here.</div>
</body>
</html>