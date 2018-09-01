<?php 

require_once("functions.php");

$access_token = get_access_token();


$payment = create_payment( $access_token, "99.00", "Raqueta Squash Dunlop", "Es una muy bonita raqueta", "1"  );

$pay_id= $payment['id'];   //Se recupera el payment_id  de la respuesta


header('Content-Type: application/json');
echo '{"paymentID":"'.$pay_id.'"} ';



 ?>