<?php

//Aquí se configura el ambiente
$paypalMode= "sandbox";
//$paypalMode= "live";

$api_clientId=""; //sandbox  merchant2
$api_secret=""; //sandbox

$return_url= "";
$cancel_url= "";



if ($paypalMode=="sandbox") {
    $host = 'https://api.sandbox.paypal.com';

	$api_clientId="AXiZk_SlHLuRoA8JVsKG-VPf_21Zk5i0_-JpUBKucqXCvACvkEt4D-cj-kVDnetHQlyXMTH8qWKvUfWB"; //sandbox  merchant2
	$api_secret="EA6hPHSpYlN2Jjw34-mg1Y0N3YE6rcc-Nm3M50mEsmnv2Cywo-xEnP9rmICloAlgBbgMFiWsJKGAKWHD"; //sandbox

	$return_url= "http://localhost/paypal/jsv4/result.php";
	$cancel_url= "http://localhost/paypal/jsv4/basic.html#cancel";	

}
if ($paypalMode=="live") {
    $host = 'https://api.paypal.com';
}

//Credenciales para API
/*
Debe obtener sus credenciales API desde  developer.paypal.com
Siga las instrucciones indicadas en la siguiente URL

https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/

Recuerde que debe obtener credenciales para REST API
*/







