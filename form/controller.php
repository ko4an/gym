<?php
include './index.php';

$host = '127.0.0.1';
  $db   = 'gym';
$user = 'root';
$pass = '';
    $charset = 'utf8';
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
     
// подключение и создание объекта PDO
    try {
        $pdo = new PDO($dsn, $user, $pass);
        // echo "подключился";
        } 
    catch (PDOException $e) {
        die('Подключение не удалось: ' . $e->getMessage());
        }

if (isset($_POST['g-recaptcha-response'])){
    $sql_insert = 'INSERT INTO `gymtab`
                 SET 
                  `Fname` = "'.$_POST[Fname].'",
                  `Sname` = "'.$_POST[Sname].'",
                  `Tname` = "'.$_POST[Tname].'",
                  `Tele` = "'.$_POST[Tele].'"';
    $count = $pdo->exec($sql_insert);
}else{
    exit('Вы не прошли валидацию reCaptcha');
}

?>
<script>setTimeout(function() { window.location = './'; },100) </script>