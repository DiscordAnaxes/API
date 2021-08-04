<?php
// make request
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.caards.me/user/get/anaxes');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch,CURLOPT_TIMEOUT,0);
$output = curl_exec($ch);
echo($output);

// handle error; error output
if(curl_getinfo($ch, CURLINFO_HTTP_CODE) !== 200) {

    var_dump($output);
}

curl_close($ch);
?>