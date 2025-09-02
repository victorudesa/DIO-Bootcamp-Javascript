let nomeHeroi = "Omniman";
let qtdExperiencia = 10001;
let nivelHeroi;


switch(true) {
    case(qtdExperiencia < 1000):
        nivelHeroi = "Ferro";
        break;
    case(qtdExperiencia <= 2000):
        nivelHeroi = "Bronze";
        break;
    case(qtdExperiencia > 2000 && qtdExperiencia <= 5000):
        nivelHeroi = "Prata";
        break;
    case(qtdExperiencia > 5000 && qtdExperiencia <= 7000):
        nivelHeroi = "Ouro";
        break;
    case(qtdExperiencia > 7000 && qtdExperiencia <= 8000):
        nivelHeroi = "Platina";
        break;
    case(qtdExperiencia > 8000 && qtdExperiencia <= 9000):
        nivelHeroi = "Ascendente";
        break;
    case(qtdExperiencia > 9000 && qtdExperiencia <= 10000):
        nivelHeroi = "Imortal";
        break;
    case(qtdExperiencia > 10000):
        nivelHeroi = "Radiante";
        break;
}

console.log(`O Herói tem nome ${nomeHeroi} e está no nível ${nivelHeroi}`);
