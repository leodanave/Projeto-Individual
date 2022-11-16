const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));

var randomico
var randomico1
var randomico2

var hyperBeast = "assets/images/Skins/hyperBeast.png"
var aquamarine = "assets/images/Skins/aquamarine.png"
var nemesis = "assets/images/Skins/nemesis.png"
var yellowJacket = "assets/images/Skins/yellowJacket.png"
var evilDaimyo = "assets/images/Skins/evilDaimyo.png"
// var loudmouth = "assets/images/Skins/loudmouth.png"
// var handgun = "assets/images/Skins/handgun.png"
// var poisonDart = "assets/images/Skins/poisonDart.png"
// var neuralNet = "assets/images/Skins/neuralNet.png"
// var rocketPop = "assets/images/Skins/rocketPop.png"
// var torque = "assets/images/Skins/torque.png"
// var bunsenBurner = "assets/images/Skins/bunsenBurner.png"
// var ranger = "assets/images/Skins/ranger.png"
// var riot = "assets/images/Skins/riot.png"

let variavel;
let variavel1;
let variavel2;

function roletar() {
    document.getElementById("container_game").style.border = "2px solid rgba(1, 141, 255, 1)";
    document.getElementById("container_game").style.boxShadow = "0px 0px 30px rgba(1, 141, 255, 1)";
    document.getElementById("img_1").style.border = "2px solid rgba(1, 141, 255, 1)";
    document.getElementById("img_2").style.border = "2px solid rgba(1, 141, 255, 1)";
    document.getElementById("img_3").style.border = "2px solid rgba(1, 141, 255, 1)";
    venceu_perdeu.innerHTML = `<span style="color: rgba(1, 141, 255, 1);">GANHE UMA SKIN</span>`;


    variavel = setInterval(consoleLog, 0020);

    setTimeout(() => {
        clearInterval(variavel);
    }, 3000);

    variavel1 = setInterval(consoleLog, 0500);

    setTimeout(() => {
        clearInterval(variavel1);
    }, 8000);

    variavel2 = setInterval(consoleLog, 1000);

    setTimeout(() => {
        clearInterval(variavel2);
        vencerPerder();
    }, 10000);

}

var skin1
var skin2
var skin3

function vencerPerder() {
    if (skin1 == skin2 && skin2 == skin3) {
        document.getElementById("container_game").style.border = "2px solid rgb(0, 255, 0)";
        document.getElementById("container_game").style.boxShadow = "0px 0px 30px rgb(0, 255, 0)";
        document.getElementById("img_1").style.border = "2px solid rgb(0, 255, 0)";
        document.getElementById("img_2").style.border = "2px solid rgb(0, 255, 0)";
        document.getElementById("img_3").style.border = "2px solid rgb(0, 255, 0)";
        venceu_perdeu.innerHTML = `<span style="color: rgb(0, 255, 0);">VOCÊ GANHOU 🤑</span>`;
        mandarTrue();
        setTimeout(() => {
            puxarTrue()
        }, 0500);
  
    } else {
        document.getElementById("container_game").style.border = "2px solid red";
        document.getElementById("container_game").style.boxShadow = "0px 0px 30px red";
        document.getElementById("img_1").style.border = "2px solid red";
        document.getElementById("img_2").style.border = "2px solid red";
        document.getElementById("img_3").style.border = "2px solid red";
        venceu_perdeu.innerHTML = `<span style="color: red;">VOCÊ PERDEU 😪</span>`;
        mandarFalse();
        setTimeout(() => {
            puxarFalse()
        }, 0500);
    }
}

function consoleLog() {

    randomico = parseInt(1 + Math.random() * 100)
    randomico1 = parseInt(1 + Math.random() * 100)
    randomico2 = parseInt(1 + Math.random() * 100)

    if (randomico < 20) {
        img_1.src = hyperBeast
        skin1 = 'hyperBeast'
    } else if (randomico < 40) {
        img_1.src = aquamarine
        skin1 = 'aquamarine'
    } else if (randomico < 60) {
        img_1.src = nemesis
        skin1 = 'nemesis'
    } else if (randomico < 80) {
        img_1.src = yellowJacket
        skin1 = 'yellowJacket'
    } else if (randomico < 100) {
        img_1.src = evilDaimyo
        skin1 = 'evilDaimyo'
    }

    if (randomico1 < 20) {
        img_2.src = hyperBeast
        skin2 = 'hyperBeast'
    } else if (randomico1 < 40) {
        img_2.src = aquamarine
        skin2 = 'aquamarine'
    } else if (randomico1 < 60) {
        img_2.src = nemesis
        skin2 = 'nemesis'
    } else if (randomico1 < 80) {
        img_2.src = yellowJacket
        skin2 = 'yellowJacket'
    } else if (randomico1 < 100) {
        img_2.src = evilDaimyo
        skin2 = 'evilDaimyo'
    }

    if (randomico2 < 20) {
        img_3.src = hyperBeast
        skin3 = 'hyperBeast'
    } else if (randomico2 < 40) {
        img_3.src = aquamarine
        skin3 = 'aquamarine'
    } else if (randomico2 < 60) {
        img_3.src = nemesis
        skin3 = 'nemesis'
    } else if (randomico2 < 80) {
        img_3.src = yellowJacket
        skin3 = 'yellowJacket'
    } else if (randomico2 < 100) {
        img_3.src = evilDaimyo
        skin3 = 'evilDaimyo'
    }
}

function mandarTrue() {
    var idUsuario = sessionStorage.getItem('ID_USUARIO')

    // Enviando o valor da nova input
    // DANDO PROBLEMA 
    fetch("/usuarios/mandarTrue", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            idUsuario: idUsuario,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            setTimeout(function () {
                sessionStorage.FK_USUARIO = idUsuario;
            }, 1500);
            // Recuperando a imagem que o usuário escolheu

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function mandarFalse() {
    var idUsuario = sessionStorage.getItem('ID_USUARIO')

    // Enviando o valor da nova input
    // DANDO PROBLEMA 
    fetch("/usuarios/mandarFalse", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            idUsuario: idUsuario,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            setTimeout(function () {
                sessionStorage.FK_USUARIO = idUsuario;
            }, 1500);
            // Recuperando a imagem que o usuário escolheu

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function puxarTrue() {
    var fkUsuario = sessionStorage.FK_USUARIO;

    fetch(`/usuarios/puxarTrue/${fkUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                var json = JSON.stringify(resposta);
                console.log(resposta[0].Ganhou);
                sessionStorage.RESULTADO_POSITIVO = resposta[0].Ganhou
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function puxarFalse() {
    var fkUsuario = sessionStorage.FK_USUARIO;

    fetch(`/usuarios/puxarFalse/${fkUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                var json = JSON.stringify(resposta);
                console.log(resposta[0].Perdeu);
                sessionStorage.RESULTADO_NEGATIVO = resposta[0].Perdeu
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}


