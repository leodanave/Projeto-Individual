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

var hyperBeast = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_hyper_beast_light_large.55efa5e3094af71ca6a56b6eac96cb022f7ecd8b.png'
var aquamarine = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_courage_alt_light_large.27e4e7d38dc2ce36ffe86bd6ec65d6f525751eaa.png'
var cyrex = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_cyrex_light_large.ef2fb1e4d88e8eb7c0efe12e231a773ca1792a4d.png'
var nemesis = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_nemsis_light_large.72074e71a27827f41dc5d6f511d2f003c1b60d8a.png'
var yellowJacket = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_cz75a_chastizer_light_large.d3234c712c3c068adbbfd5718c468c778f2351dd.png'
var evilDaimyo = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_evil_daimyo_light_large.c208ba252c0d8902caa973a634cbfa945508a716.png'
var loudmouth = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_annihilator_light_large.421039357ccbbcb9ba1456caa1ed2ae4829b5495.png'
var handgun = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_aq_p2000_boom_light_large.39f01b0b86b795bea56300432fecfbf93415ee58.png'
var poisonDart = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_am_mp9_nitrogen_light_large.3a0b5a7cd31a7cfd5f0d90b9a0a1dbfcdb642cca.png'
var neuralNet = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_am_famas_dots_light_large.dc6f19278bac52ea06b8e3576fa324624f2f82b4.png'
var rocketPop = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galilar_particles_light_large.8732f64d53dbc9b0c732641655d4f99124d8cacc.png'
var torque = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_progressiv_light_large.91cde781cd0c8502bbbb66f37cc7f1baf2a10c05.png'
var eliteBuild = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_mastery_light_large.f58ff489c92ffa8c6e4c42814bad01c352df0ab6.png'
var bunsenBurner = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_aq_glock18_flames_blue_light_large.5fed23d5a32793c25914eeb99b45f1a2b0cb9d6c.png'
var ranger = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_ranger_light_large.e3e9d3d47d5707092223a268ef59adb53ce76278.png'
var riot = 'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_uproar_light_large.04cd84320c4370bced14a3989b0e141cff67ec88.png'

let variavel;
let variavel1;
let variavel2;

function roletar() {

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
    }, 10000);

}

function consoleLog() {
    randomico = parseInt(Math.random() * 10)
    randomico1 = parseInt(Math.random() * 10)
    randomico2 = parseInt(Math.random() * 10)

    if (randomico < 3) {
        img_1.src = hyperBeast
    } else if (randomico < 5) {
        img_1.src = aquamarine
    } else {
        img_1.src = cyrex
    }

    if (randomico1 < 3) {
        img_2.src = hyperBeast
    } else if (randomico1 < 5) {
        img_2.src = aquamarine
    } else {
        img_2.src = cyrex
    }

    if (randomico2 < 3) {
        img_3.src = hyperBeast
    } else if (randomico2 < 5) {
        img_3.src = aquamarine
    } else {
        img_3.src = cyrex
    }
}



