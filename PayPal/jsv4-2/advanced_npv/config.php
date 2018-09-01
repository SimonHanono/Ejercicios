<?php

//Credenciales para API
/*
Debe obtener sus credenciales API desde  developer.paypal.com
Siga las instrucciones indicadas en la siguiente URL

https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/

Recuerde que debe obtener credenciales para REST API
*/


//Aquí se configura el ambiente
$paypalMode= "sandbox";
//$paypalMode= "live";

$api_user="";
$api_pwd="";
$api_signature="";
$endpoint = '';

$return_url= "http://localhost/paypal/jsv4/result.php";
$cancel_url= "http://localhost/paypal/jsv4/basic.html#cancel";

$api_version = "124.0";


if ($paypalMode=="sandbox") {

	$api_user="gronmx_api1.gmail.com";
	$api_pwd="95Z4CRDYC6FGSETG";
	$api_signature="AFcWxV21C7fd0v3bYYYRCpSSRl31ASJ3IgDEvTBF64gZwj6UsSWRA96U";

    $endpoint = 'https://api-3t.sandbox.paypal.com/nvp';



}else if ($paypalMode=="live") {

	$api_user="";
	$api_pwd="";
	$api_signature="";

    $endpoint = 'https://api-3t.paypal.com/nvp';


}






