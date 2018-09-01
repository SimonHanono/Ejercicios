<?php 

require_once("functions.php");

session_start();
$_SESSION['c_total']='99.00';
$_SESSION['c_articulo']='Raqueta Squash Dunlop';
$_SESSION['c_description']='Es una muy bonita raqueta';
$_SESSION['c_cantidad']='1';

$payment = create_payment( $_SESSION['c_total'], $_SESSION['c_articulo'], $_SESSION['c_description'], $_SESSION['c_cantidad']  );



$token= $payment['TOKEN'];   //Se recupera el payment_id  de la respuesta
$ack = $payment['ACK'];



header('Content-Type: application/json');
echo '{"token":"'.$token.'"} ';



 ?>