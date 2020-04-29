<?php 
header("Access-Control-Allow-Origin: *");
require 'Router.php';
include_once 'Request.php';
include_once 'Router.php';

$router = new Router(new Request);

$router->get('/index', function() {
    $array = ['plop','plop2','plop3','plop4'];
    return json_encode($array);
});