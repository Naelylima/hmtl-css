const botao = document.getElementById('burguer')
const menuMobile = document.getElementById('menu-mobile')

botao.addEventListener('click', abrir)

function abrir(){
    menuMobile.classList.toggle('active')
    botao.classList.toggle('active')
    // if(botao.classList.contains('active')){
    //     botao.classList.remove('active')
    // }
    // else{
    //     botao.classList.add('active')

    // }
 
}