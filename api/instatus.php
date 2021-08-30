<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// make request
$ch = curl_init();
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer '.$_ENV["instatus_apikey"]
));
curl_setopt($ch, CURLOPT_URL, 'https://api.instatus.com/v1/pages/');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);
echo($output);

// handle error; error output
if(curl_getinfo($ch, CURLINFO_HTTP_CODE) !== 200) {

    var_dump($output);
}

curl_close($ch);
?>
