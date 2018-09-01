<?php

require_once("config.php");


#This functions calls  SetExpressCheckout to   get a Token
function create_payment($c_total, $c_articulo, $c_description, $c_cantidad){
global $endpoint;
global $api_user;
global $api_pwd;
global $api_signature;
global $api_version;
global $return_url;
global $cancel_url;


  //aquí se hace todo el asunto de curl
  $curl = curl_init();
   
  //lamando setEC
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($curl, CURLOPT_POST, true);
  curl_setopt($curl, CURLOPT_URL, $endpoint);
  curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query(array(
      'USER' => $api_user,
      'PWD' => $api_pwd,
      'SIGNATURE' => $api_signature,
      'METHOD' => 'SetExpressCheckout',
      'VERSION' => $api_version,
      'LOCALECODE' => 'es_XC',                    
      'PAYMENTREQUEST_0_PAYMENTACTION'=> 'SALE',    
      'NOSHIPPING'=> '0',
      'ADDROVERRIDE'=> '1',
      'PAYMENTREQUEST_0_CURRENCYCODE'=> 'MXN',
      'RETURNURL'=> $return_url,
      'CANCELURL'=> $cancel_url,
      'PAYMENTREQUEST_0_AMT'=> $c_total,
      'PAYMENTREQUEST_0_ITEMAMT'=> $c_total,
      'L_PAYMENTREQUEST_0_NAME0'=> $c_articulo,
      'L_PAYMENTREQUEST_0_DESC0'=> $c_description,
      'L_PAYMENTREQUEST_0_AMT0'=> $c_total,
      'L_PAYMENTREQUEST_0_QTY0'=> $c_cantidad ,
      'PAYMENTREQUEST_0_SHIPTONAME'=> 'Juan Perez Sanchez' ,
      'PAYMENTREQUEST_0_SHIPTOSTREET'=> 'Mariano Escobedo 476',
      'PAYMENTREQUEST_0_SHIPTOCITY'=> 'Ciudad de Mexico',
      'PAYMENTREQUEST_0_SHIPTOSTATE'=> 'DF',
      'PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE'=> 'MX',
      'PAYMENTREQUEST_0_SHIPTOZIP'=> '11590',
      'PAYMENTREQUEST_0_SHIPTOSTREET2'=> 'Piso 14',
      'PAYMENTREQUEST_0_SHIPTOPHONENUM'=> '59014666',
      'EMAIL'=> ''
  )));
   
  $response = urldecode( curl_exec($curl) );

  parse_str($response, $arr);




  return $arr;



}



#This function executes a payment once the client has accepted and payer id is available
function execute_payment( $payerId,  $token, $c_total, $c_articulo, $c_description, $c_cantidad) {
    
global $endpoint;
global $api_user;
global $api_pwd;
global $api_signature;
global $api_version;

   //aquí se hace todo el asunto de curl
  $curl = curl_init();
 //lamando DoEC
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($curl, CURLOPT_POST, true);
  curl_setopt($curl, CURLOPT_URL, $endpoint);
  curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query(array(
      'USER' => $api_user,
      'PWD' => $api_pwd,
      'SIGNATURE' => $api_signature,
      'METHOD' => 'DoExpressCheckoutPayment',
      'VERSION' => $api_version,
      'LOCALECODE' => 'es_MX',                    
      'PAYMENTREQUEST_0_PAYMENTACTION'=> 'SALE',    
      'TOKEN'=> $token,
      'PAYERID'=> $payerId,
      'PAYMENTREQUEST_0_CURRENCYCODE'=> 'MXN',
      'PAYMENTREQUEST_0_AMT'=> $c_total,
      'PAYMENTREQUEST_0_ITEMAMT'=> $c_total,
      'L_PAYMENTREQUEST_0_NAME0'=> $c_articulo,
      'L_PAYMENTREQUEST_0_DESC0'=> $c_description,
      'L_PAYMENTREQUEST_0_AMT0'=> $c_total,
      'L_PAYMENTREQUEST_0_QTY0'=> $c_cantidad ,
      'PAYMENTREQUEST_0_SHIPTONAME'=> 'Gerardo Ortiz Bandera' ,
      'PAYMENTREQUEST_0_SHIPTOSTREET'=> 'Mariano Escobedo 476',
      'PAYMENTREQUEST_0_SHIPTOCITY'=> 'Ciudad de Mexico',
      'PAYMENTREQUEST_0_SHIPTOSTATE'=> 'DF',
      'PAYMENTREQUEST_0_SHIPTOCOUNTRYCODE'=> 'MX',
      'PAYMENTREQUEST_0_SHIPTOZIP'=> '11590',
      'PAYMENTREQUEST_0_SHIPTOSTREET2'=> 'Piso 14',
      'PAYMENTREQUEST_0_SHIPTOPHONENUM'=> '59014630',


      'PAYMENTREQUEST_0_AIRLINE_PASSENGERNAME'=> 'Gerardo Ortiz',
      'PAYMENTREQUEST_0_AIRLINE_ISSUEDATE'=> '20170101',
      'PAYMENTREQUEST_0_AIRLINE_TRAVELAGENCYNAME'=> 'PayPal Travel',
      'PAYMENTREQUEST_0_AIRLINE_TICKETNUMBER'=> '558696',
      'PAYMENTREQUEST_0_AIRLINE_ISSUINGCARRIERCODE'=> 'UA',
      'PAYMENTREQUEST_0_AIRLINE_RESTRICTEDTICKET'=> '0',
      'PAYMENTREQUEST_0_AIRLINE_CLEARINGSEQUENCE'=> '1',
      'PAYMENTREQUEST_0_AIRLINE_CLEARINGCOUNT'=> '1',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_CONJUNCTIONTICKET0'=> 'CONJ01',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_EXCHANGETICKET0'=> '13545',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_COUPONNUMBER0'=> '1',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_SERVICECLASS0'=> 'L',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_TRAVELDATE0'=> '20170606',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_CARRIERCODE0'=> 'UA',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_STOPOVERPERMITTED0'=> '0',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_DEPARTUREAIRPORT0'=> 'GRU',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_ARRIVALAIRPORT0'=> 'CGN',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_FLIGHTNUMBER0'=> 'BN909',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_DEPARTURETIME0'=> '05:33',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_ARRIVALTIME0'=> '14:34',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_FAREBASISCODE0'=> 'ECONOMY',
      'L_PAYMENTREQUEST_0_AIRLINE_LEG_ENDORSEMENTORRESTRICTIONS0'=> '0'         

  )));
   
  $response = urldecode( curl_exec($curl) );

    
  parse_str($response, $arr);


  return $arr;

}

