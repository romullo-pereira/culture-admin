splash = document.getElementById('splash');
logosplash = document.getElementById('logosplash');
//Verificação Login
function login(){
    user = document.getElementById('user');
    pass = document.getElementById('pass');

    if(user.value == "" || pass.value ==""){
        alert('Preencha todos os campos.');
    }else{
        splash = document.getElementById('splash');
        logosplash = document.getElementById('logosplash');

        splash.style.width = "400%";
        splash.style.height = "600%";
        splash.style.margin = "0px";
        setInterval(splashColor, 1300);
    }
}
//Animação splash
function splashColor(){
    splash.style.backgroundColor ="#ffffff";
    splash = document.getElementById('splash');
    splash.style.borderRadius = "0% 0% 0% 0%";
    splash.style.width = "100vw";
    splash.style.height = "100vh";
    setTimeout(showLogo, 100);
}
//Animação splash
function showLogo(){
    logosplash.style.opacity = "1";
    splash.style.transition = "0s";
}

//Mudar a view do Login
function Cadastro(){
    divLogin = document.getElementById('logar');
    divLogin.style.trasition = '4s';
    divLogin.style.display= 'none';

    divcadastro = document.getElementById('cadastro');
    divcadastro.style.transition = '4s';
    divcadastro.style.display='block';

    divEmail = document.getElementById('email');
    divEmail.style.transition='4s';
    divEmail.style.display='none';
}
function VoltarLogar(){
    divLogin = document.getElementById('logar');
    divLogin.style.trasition = '4s';
    divLogin.style.display= 'block';

    divcadastro = document.getElementById('cadastro');
    divcadastro.style.transition = '4s';
    divcadastro.style.display='none';

    divEmail = document.getElementById('email');
    divEmail.style.transition='4s';
    divEmail.style.display='none';
}
function emailRecuperar(){
    divLogin = document.getElementById('logar');
    divLogin.style.trasition = '4s';
    divLogin.style.display= 'none';

    divcadastro = document.getElementById('cadastro');
    divcadastro.style.transition = '4s';
    divcadastro.style.display='none';

    divEmail = document.getElementById('email');
    divEmail.style.transition='4s';
    divEmail.style.display='block';
}

function errorEmail() {
	alert("Usuario e/ou senha Incorretos ou Conta não Cadastrada");
}

function usuarioIncorreto() {
	alert("Usuario e/ou senha Incorretos ou Conta não Cadastrada");
}


//Fim Mudar view