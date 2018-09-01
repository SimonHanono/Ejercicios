<?php 

require_once("functions.php");


session_start();

$token = $_POST["token"];
$payerID = $_POST["payerID"];

$c_total = $_SESSION['c_total'];
$c_articulo = $_SESSION['c_articulo'];
$c_description = $_SESSION['c_description'];
$c_cantidad= $_SESSION['c_cantidad'];

$resp = execute_payment($payerID,  $token, $c_total, $c_articulo, $c_description, $c_cantidad);



$_SESSION['respPago']=$resp;

header('Content-Type: application/json');

echo  json_encode($resp );



 ?>