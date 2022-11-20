listaProdutos = []
function addCarrinho(){
    var novoProduto = {nome: "God of War Ragnarök", valor:"349"}
    listaProdutos.push(novoProduto)
    console.log(listaProdutos)
    // alert("Seu produto foi adicionado no carrinho"), Title = 'MSG' ;
    swal("Sucesso!", "Seu produto foi adicionado ao carrinho!", "success");

    exibirProdutos()
    salvarCarrinho()
}
function exibirProdutos(){
    var codHtml = ''
    var index = 0
    var qtd = 0

    listaProdutos.forEach(item => {
        qtd += 1
        codHtml= `<div class= "teste1"><p>${item.nome}  (${qtd}) </p><b> <a href="javascript:void(0)"onclick="deletar(${index})"><img src="./imagens3/cancelar.png" alt=""></a></b></div>`   
    });

    
    index = 1
       
    if (document.getElementById('produtos') != null){
        document.getElementById('produtos').innerHTML = codHtml
    }
    if (document.getElementById('produtosM') != null){
        document.getElementById('produtosM').innerHTML = codHtml
    }
    
    total()
}
function total(){
    var total = 0
    var printTotal = ''
    var parcela = 0
    listaProdutos.forEach(item => {
        valor =  parseInt(item.valor);
        total += valor
        parcela = valor/4
        printTotal = `<div><h1>Total: R$${total},00</h1></b></div><br> <p> ou 4x de R$${parcela}`
        
    });

    if(total == 0){
        document.getElementById('totalProdutos').innerHTML ='<h2>Seu carrinho está vazio</h2>'
        document.getElementById('totalProdutosM').innerHTML ='<h2>Seu carrinho está vazio</h2>'
    }
    else{
        if(document.getElementById('totalProdutos') != null){
            document.getElementById('totalProdutos').innerHTML = printTotal
        }
        if(document.getElementById('totalProdutosM') != null){
            document.getElementById('totalProdutosM').innerHTML = printTotal
        }

    }
    
    // total()
}
function deletar(index1){
    listaProdutos.splice(index1, 1)
    salvarCarrinho()
    obterCarrinho()
}

function salvarCarrinho(){
    localStorage.setItem('loja',JSON.stringify(listaProdutos))
}
function obterCarrinho(){
    if (localStorage.getItem('loja')!= null){
        listaProdutos = JSON.parse(localStorage.getItem('loja')) 
        exibirProdutos()
    }
  
}

obterCarrinho()
