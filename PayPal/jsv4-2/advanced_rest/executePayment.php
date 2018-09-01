<?php 

require_once("functions.php");




$paymentID = $_POST["paymentID"];
$payerID = $_POST["payerID"];

$accessToken = get_access_token();
$resp = execute_payment($accessToken, $payerID,  $paymentID);

session_start();
$_SESSION['respPago']=$resp;

header('Content-Type: application/json');
echo $resp;



 ?>