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
$respPago =  $_SESSION['respPago'];

//print_r($respPago);

//echo json_encode($respPago );


$result = $_POST['dataResult'];

if($result=="SUCCESS"){
	//print_r($respPago);
	echo "Su compra fue exitosa, muchas gracias  \n\n";
	echo "Estado del pago: " . $respPago['PAYMENTINFO_0_PAYMENTSTATUS'] ."\n\n";
	echo "Timestamp :  ".$respPago['TIMESTAMP']."\n\n";
	echo "Correlation :  ".$respPago['CORRELATIONID']."\n\n";
	echo "Su pago: $" .$respPago['PAYMENTINFO_0_AMT']." ".$respPago['PAYMENTINFO_0_CURRENCYCODE'] . "\n\n" ;
	echo "Transaction ID :  ".$respPago['PAYMENTINFO_0_TRANSACTIONID']."\n\n";
}



?>


  <a href="./inicio.html" >Regresar a Inicio</a>
</pre>


	</body>
</html>