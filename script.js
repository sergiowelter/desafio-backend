window.addEventListener("load", function () {
    $(document).ready(function () {
		carregarCategorias();
        carregarJson()
    });
});

//busca as notícias de hoje
function carregarJson(categoria = "geral"){
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

//busca apenas as categorias
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

//rende as notícias no HTML
function renderNoticias(items){
    var nhtml = "";
    $('#combo_json').empty();

    nhtml = "<p>"+items+"</p>";
    $('#combo_json').append(nhtml);
}

//renderiza no HTML um campo select com as categorias
function renderCategorias(items){
    var nhtml = "";
    $('#combo_select').empty();

    nhtml = '<select name="filtro_categoria" id="categoria_id" onchange="filtrar()"><option value="geral">Selecione a categoria que deseja filtrar</option>';
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

//filtra as notícias pela categoria
function filtrar(){
    var categoria = document.getElementById("categoria_id").value;

    carregarJson(categoria);
}
