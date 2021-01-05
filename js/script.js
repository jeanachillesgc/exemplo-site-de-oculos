/**FUNÇÃO PARA MOSTRAR O MODAL**/
var modal = document.getElementsByClassName("modal");

setTimeout(function(){
    modal[0].style.display = "block";    
}, 1000);

//FUNÇÃO DO BOTÃO ENVIAR
document.getElementById("enviarEmail").addEventListener("click", validarEmail);

function validarEmail(evt){
    var emailSpan = document.getElementById("emailSpan").style;    
    var email = document.getElementById("email");    
    var posicaoArroba = email.value.indexOf("@");
    var estiloEmail = email.style;
    
    if(email.value == "" || posicaoArroba < 3){
        emailSpan.display = "block";
        email.style.borderBottomColor = "red";
        evt.preventDefault();
    }
}

//FUNÇÃO PARA FECHAR O MODAL
document.getElementById("closeModal").addEventListener("click", fecharModal);

function fecharModal(){
    modal[0].style.display = "none";
}