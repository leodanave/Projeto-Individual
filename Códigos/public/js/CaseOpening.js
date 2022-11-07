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
var loudmouth = "assets/images/Skins/loudmouth.png"
var handgun = "assets/images/Skins/handgun.png"
var poisonDart = "assets/images/Skins/poisonDart.png"
var neuralNet = "assets/images/Skins/neuralNet.png"
var rocketPop = "assets/images/Skins/rocketPop.png"
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

function vencerPerder() {
    if (img_1 == img_2 && img_2 == img_3) {
        document.getElementById("container_game").style.border = "2px solid green";
        document.getElementById("container_game").style.boxShadow = "0px 0px 30px green";
        document.getElementById("img_1").style.border = "2px solid green";
        document.getElementById("img_2").style.border = "2px solid green";
        document.getElementById("img_3").style.border = "2px solid green";
    } else {
        document.getElementById("container_game").style.border = "2px solid red";
        document.getElementById("container_game").style.boxShadow = "0px 0px 30px red";
        document.getElementById("img_1").style.border = "2px solid red";
        document.getElementById("img_2").style.border = "2px solid red";
        document.getElementById("img_3").style.border = "2px solid red";
        venceu_perdeu.innerHTML = `<span style="color: red;">VOCÊ PERDEU</span>`;
    }
}

function consoleLog() {

    randomico = parseInt(1 + Math.random() * 100)
    randomico1 = parseInt(1 + Math.random() * 100)
    randomico2 = parseInt(1 + Math.random() * 100)

    if (randomico < 11) {
        img_1.src = hyperBeast
    } else if (randomico < 21) {
        img_1.src = aquamarine
    } else if (randomico < 31) {
        img_1.src = nemesis
    } else if (randomico < 41) {
        img_1.src = yellowJacket
    } else if (randomico < 51) {
        img_1.src = evilDaimyo
    } else if (randomico < 61) {
        img_1.src = loudmouth
    } else if (randomico < 71) {
        img_1.src = handgun
    } else if (randomico < 81) {
        img_1.src = poisonDart
    } else if (randomico < 91) {
        img_1.src = neuralNet
    } else {
        img_1.src = rocketPop
    }

    if (randomico1 < 11) {
        img_3.src = hyperBeast
    } else if (randomico1 < 21) {
        img_3.src = aquamarine
    } else if (randomico1 < 31) {
        img_3.src = nemesis
    } else if (randomico1 < 41) {
        img_3.src = yellowJacket
    } else if (randomico1 < 51) {
        img_3.src = evilDaimyo
    } else if (randomico1 < 61) {
        img_3.src = loudmouth
    } else if (randomico1 < 71) {
        img_3.src = handgun
    } else if (randomico1 < 81) {
        img_3.src = poisonDart
    } else if (randomico1 < 91) {
        img_3.src = neuralNet
    } else {
        img_3.src = rocketPop
    }

    if (randomico2 < 11) {
        img_2.src = hyperBeast
    } else if (randomico2 < 21) {
        img_2.src = aquamarine
    } else if (randomico2 < 31) {
        img_2.src = nemesis
    } else if (randomico2 < 41) {
        img_2.src = yellowJacket
    } else if (randomico2 < 51) {
        img_2.src = evilDaimyo
    } else if (randomico2 < 61) {
        img_2.src = loudmouth
    } else if (randomico2 < 71) {
        img_2.src = handgun
    } else if (randomico2 < 81) {
        img_2.src = poisonDart
    } else if (randomico2 < 91) {
        img_2.src = neuralNet
    } else {
        img_2.src = rocketPop
    }


}



