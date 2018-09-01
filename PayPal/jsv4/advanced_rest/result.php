<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8"/>
	<title></title>

	
</head>

	<body>

<pre>
<?php 
session_start();
$respPago =  json_decode($_SESSION['respPago'], true);

$result = $_POST['dataResult'];

if($result=="SUCCESS"){
	//print_r($respPago);
	echo "Su compra fue exitosa, muchas gracias  \n\n";
	echo "Estado del pago: " . $respPago['state'] ."\n\n";
	echo "PAY-ID :  ".$respPago['id']."\n\n";
	echo "Cart :  ".$respPago['cart']."\n\n";
	echo "Comprador :  ".$respPago['payer']['payer_info']['first_name'	].$respPago['payer']['payer_info']['last_name']."\n\n";
	echo "Su pago: $" .$respPago['transactions'][0]['amount']['total']." ".$respPago['transactions'][0]['amount']['currency'] . "\n\n" ;
	echo "Transaction ID :  ".$respPago['transactions'][0]['related_resources'][0]['sale']['id']."\n\n";
}



?>


  <a href="./inicio.html" >Regresar a Inicio</a>
</pre>


	</body>
</html>