<?php 
header('content-type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
header('Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT');

// $url = $_GET['url'];
// if(isset($url)) $domainPath = $url;
$username = '';
$password = '';

$domainPath = "https://www.fords.org/ajax/feeds/schedule/?key=aCmBM8R6ZFBseaJGrec2dsjA4YdZkuQA";

$context = stream_context_create(array(
    'http' => array(
        'header'  => "Authorization: Basic " . base64_encode("$username:$password")
    )
));

$string = file_get_contents($domainPath, false, $context);
print_r($string);