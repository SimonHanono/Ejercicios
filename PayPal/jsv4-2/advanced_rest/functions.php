<?php

require_once("config.php");


// original code: http://www.daveperrett.com/articles/2008/03/11/format-json-with-php/
// adapted to allow native functionality in php version >= 5.4.0
/**
* Format a flat JSON string to make it more human-readable
*
* @param string $json The original JSON string to process
*        When the input is not a string it is assumed the input is RAW
*        and should be converted to JSON first of all.
* @return string Indented version of the original JSON string
*/
function json_format($json) {
  if (!is_string($json)) {
    if (phpversion() && phpversion() >= 5.4) {
      return json_encode($json, JSON_PRETTY_PRINT);
    }
    $json = json_encode($json);
  }
  $result      = '';
  $pos         = 0;               // indentation level
  $strLen      = strlen($json);
  $indentStr   = "\t";
  $newLine     = "\n";
  $prevChar    = '';
  $outOfQuotes = true;
  for ($i = 0; $i < $strLen; $i++) {
    // Speedup: copy blocks of input which don't matter re string detection and formatting.
    $copyLen = strcspn($json, $outOfQuotes ? " \t\r\n\",:[{}]" : "\\\"", $i);
    if ($copyLen >= 1) {
      $copyStr = substr($json, $i, $copyLen);
      // Also reset the tracker for escapes: we won't be hitting any right now
      // and the next round is the first time an 'escape' character can be seen again at the input.
      $prevChar = '';
      $result .= $copyStr;
      $i += $copyLen - 1;      // correct for the for(;;) loop
      continue;
    }
    
    // Grab the next character in the string
    $char = substr($json, $i, 1);
    
    // Are we inside a quoted string encountering an escape sequence?
    if (!$outOfQuotes && $prevChar === '\\') {
      // Add the escaped character to the result string and ignore it for the string enter/exit detection:
      $result .= $char;
      $prevChar = '';
      continue;
    }
    // Are we entering/exiting a quoted string?
    if ($char === '"' && $prevChar !== '\\') {
      $outOfQuotes = !$outOfQuotes;
    }
    // If this character is the end of an element,
    // output a new line and indent the next line
    else if ($outOfQuotes && ($char === '}' || $char === ']')) {
      $result .= $newLine;
      $pos--;
      for ($j = 0; $j < $pos; $j++) {
        $result .= $indentStr;
      }
    }
    // eat all non-essential whitespace in the input as we do our own here and it would only mess up our process
    else if ($outOfQuotes && false !== strpos(" \t\r\n", $char)) {
      continue;
    }
    // Add the character to the result string
    $result .= $char;
    // always add a space after a field colon:
    if ($outOfQuotes && $char === ':') {
      $result .= ' ';
    }
    // If the last character was the beginning of an element,
    // output a new line and indent the next line
    else if ($outOfQuotes && ($char === ',' || $char === '{' || $char === '[')) {
      $result .= $newLine;
      if ($char === '{' || $char === '[') {
        $pos++;
      }
      for ($j = 0; $j < $pos; $j++) {
        $result .= $indentStr;
      }
    }
    $prevChar = $char;
  }
  return $result;
}



//////////////

#This function gets the OAuth2 Access Token which will be valid for 28800 seconds
function get_access_token() {
  global $api_clientId, $api_secret, $host;  //los datos del usuario API

  $postFields= 'grant_type=client_credentials';
  $url = $host.'/v1/oauth2/token';  //endpoint de dond obtener

  $curl = curl_init($url); 
  curl_setopt($curl, CURLOPT_POST, true); 
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($curl, CURLOPT_USERPWD, $api_clientId . ":" . $api_secret);
  curl_setopt($curl, CURLOPT_HEADER, false); 
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
  curl_setopt($curl, CURLOPT_POSTFIELDS, $postFields); 
 curl_setopt($curl, CURLOPT_VERBOSE, TRUE);
  $response = curl_exec( $curl );
  if (empty($response)) {
      // some kind of an error happened
      die(curl_error($curl));
      curl_close($curl); // close cURL handler
  } else {
      $info = curl_getinfo($curl);
      curl_close($curl); // close cURL handler
    if($info['http_code'] != 200 && $info['http_code'] != 201 ) {
      echo "Received error: " . $info['http_code']. "\n";
      echo "Raw response:".$response."\n";
      die();
      }
  }

  // Convert the result from JSON format to a PHP array 
  $jsonResponse = json_decode( $response );
  return $jsonResponse->access_token;
}


#This function creates a payment using data provided
function create_payment( $access_token, $c_total, $c_articulo, $c_descripcion, $c_cantidad  ) {

  global $host;

  $postdata= get_json_payment( $c_total, $c_articulo, $c_descripcion, $c_cantidad );

  $url = $host.'/v1/payments/payment';
  $curl = curl_init($url); 
  curl_setopt($curl, CURLOPT_POST, true);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($curl, CURLOPT_HEADER, false);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_HTTPHEADER, array(
        'Authorization: Bearer '.$access_token,
        'Accept: application/json',
        'Content-Type: application/json'
        ));

  curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata); 
  #curl_setopt($curl, CURLOPT_VERBOSE, TRUE);
  $response = curl_exec( $curl );
  if (empty($response)) {
      // some kind of an error happened
      die(curl_error($curl));
      curl_close($curl); // close cURL handler
  } else {
      $info = curl_getinfo($curl);
      curl_close($curl); // close cURL handler
    if($info['http_code'] != 200 && $info['http_code'] != 201 ) {
      echo "Received error: " . $info['http_code']. "\n";
      echo "Raw response:".$response."\n";
      die();
      }
  }


  // Convert the result from JSON format to a PHP array 
  $jsonResponse = json_decode($response, TRUE);
  return $jsonResponse;
}


#This function executes a payment once the client has accepted and payer id is available
function execute_payment($access_token, $payerId,  $paymentID) {
    global $host;
    $url = $host.'/v1/payments/payment/'.$paymentID.'/execute/'; 

    $postdata= '{"payer_id" : "'.$payerId.'"}';


    $curl = curl_init($url); 
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
        'Authorization: Bearer '.$access_token,
        'Content-Type: application/json'
        ));
    curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata); 
  #curl_setopt($curl, CURLOPT_VERBOSE, TRUE);
  $response = curl_exec( $curl );
  if (empty($response)) {
      // some kind of an error happened
      die(curl_error($curl));
      curl_close($curl); // close cURL handler
  } else {
      $info = curl_getinfo($curl);
      curl_close($curl); // close cURL handler
    if($info['http_code'] != 200 && $info['http_code'] != 201 ) {
      //echo "Received error: " . $info['http_code']. "\n";
      //echo "Raw response:".$response."\n";
      return $response;
      //die();
      }
  }

  //$jsonResponse = json_decode($response, TRUE);
  //return $jsonResponse;
  return $response;
}


//Function help  to create a json of the payment info
function get_json_payment($c_total, $c_articulo, $c_descripcion, $c_cantidad ){

  global $xp_profile, $currency, $return_url, $cancel_url;


$payment = '
{
        "intent":"sale",
        "payer":{
                "payment_method":"paypal",
                "payer_info": {
                  "billing_address": {
                    "line1": "Av. del Iman 69, dep. 301",
                    "line2": "Insurgentes Cuicuilco, Coyoacan",
                    "city": "Mexico DF",
                    "state": "DF",
                    "postal_code": "14050",
                    "country_code": "MX"
                  }        
                }
        },
        "transactions":[{
                        "amount":{
                        "currency":"MXN",
                        "total":"'.$c_total.'",
                        "details":{

                                  }
                        },
                        "description":"Esta es la descripcion del pago",
                        "payment_options":{
                          "allowed_payment_method":"IMMEDIATE_PAY"
                        },
                        "item_list":{

                                "items":[{
                                        "name":"'.$c_articulo.'",
                                        "description":"'.$c_descripcion.'",
                                        "quantity":"'.$c_cantidad.'",
                                        "price":"'.$c_total.'",
                                        "currency":"MXN"
                                }],
                                "shipping_address": {
                                  "recipient_name": "Gerardo Ortiz",
                                  "line1": "Mariano Escobedo 999 piso 14",
                                  "line2": "Anzures, Miguel Hidalgo",
                                  "city": "Mexico DF",
                                  "state": "DF",
                                  "postal_code": "11590",
                                  "country_code": "MX",
                                  "phone": "54545454"
                                }                  
                        }
        }],
        "redirect_urls":{
        "return_url": "'.$return_url.'",
        "cancel_url": "'.$cancel_url.'"
        }
}
'; 



return $payment;
}
