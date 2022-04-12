window.addEventListener("load", function () {
    $(document).ready(function () {
		carregarCategorias();
        carregarJson()
    });
});

//função que busca as notícias
function carregarJson(categoria = 0){
    noticias = {};
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                noticias = request.response;
                if(noticias.status !== 'NOT'){
                    renderNoticias(noticias);
                }
            }
        }
    }
    request.open('GET', "teste_convergente.php?filtro="+categoria);
    request.send();
}

//função que busca as categorias das notícias de hoje
function carregarCategorias() {
    categorias = {};
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                categorias = JSON.parse(request.response);
                if(categorias.status !== 'NOT'){
                    renderCategorias(categorias);
                }
            }
        }
    }
    request.open('GET', "teste_convergente.php?categorias=1");
    request.send();
}

//função que rende as notícias no HTML
function renderNoticias(items){
    var nhtml = "";
    $('#combo_json').empty();

    nhtml = "<p>"+items+"</p>";
    $('#combo_json').append(nhtml);
}

//função que renderiza no HTML um campo select com as notícias de hoje
function renderCategorias(items){
    var nhtml = "";
    $('#combo_select').empty();

    nhtml = '<select name="filtro_categoria" id="categoria_id" onchange="filtrar()"><option>Selecione a categoria que deseja filtrar</option>';
    var i = 0;
    for (var count in items.categorias){
        i++;
        if(items.categorias[i] !== undefined){
            nhtml += "<option value="+items.categorias[i]+">"+items.categorias[i]+"</option>";
        }
        
    }
    nhtml += "</select>";

    $('#combo_select').append(nhtml);
}

//função que filtra as notícias pela categoria
function filtrar(){
    var e = document.getElementById("categoria_id").value;

    carregarJson(e);
}
