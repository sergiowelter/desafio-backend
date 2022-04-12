<?php

ini_set('error_reporting', E_STRICT);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With,content-type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json'); 

date_default_timezone_set('America/Sao_Paulo');


$today = date("d M Y"); 

$obj = new stdClass();

echo retorno($obj, $today);

function trataDados($obj){
    return stripslashes(json_encode($obj, JSON_UNESCAPED_UNICODE));
}


function retorno($obj, $today){
    try {
        $get = file_get_contents('https://www.correio24horas.com.br/rss/');
        $arr = simplexml_load_string($get);
        $items =  $arr->channel->item;
        $i = 0; 
        $x = 0; 
        $quantidade = 0;
        $noticias = array();
        $categorias = array();
    
        foreach($items as $item) {
            $data = $item->pubDate;
            $data = substr($data, 5, -15);
            $data = strval($data);
            
            $titulo = $item->title;
            $categoria = $item->category;
            $titulo = strval($titulo);
            $categoria = strval($categoria);
            if(isset($_GET['filtro']) and $_GET['filtro'] !== "geral"){
                if($_GET['filtro'] == $categoria){
                    $noticias[$i] = $titulo;
                    $categorias[$i] = $categoria; 
                    $i++;
                    $quantidade = $i;
                }

            }else{
                $noticias[$x] = $titulo;
                $categorias[$x] = $categoria; 
                $x++;
                $quantidade = $x;
            }
    

        }

        //se existir o valor "categorias" na url, a função retorna apenas as categorias
        if(isset($_GET['categorias'])){
            $categorias = array_unique($categorias);
            $obj->categorias = $categorias;
            $obj = trataDados($obj);

            return $obj;
        }
        
        $obj->quantidade = $quantidade;
        $obj->noticias = $noticias;
        
    
    } catch (Exception $e) {
        $obj->status = "NOT";
    }

    $obj = trataDados($obj);

    return $obj;
    
}
?>