<?php
    $get = file_get_contents('https://www.correio24horas.com.br/rss/');
    $arr = simplexml_load_string($get);
    echo $arr->channel->title; 
    //print_r($arr);

?>