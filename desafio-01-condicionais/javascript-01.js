let nomeHeroi = "Omniman";
let qtdExperiencia = 1000;
let nivelHeroi;

if (qtdExperiencia < 1000) {
    nivelHeroi = "Ferro";
} else if (qtdExperiencia <= 2000) {
    nivelHeroi = "Bronze";
} else if (qtdExperiencia > 2000 && qtdExperiencia <= 5000) {
    nivelHeroi = "Prata";
} else if (qtdExperiencia > 5000 && qtdExperiencia <= 7000) {
    nivelHeroi = "Ouro";
} else if (qtdExperiencia > 7000 && qtdExperiencia <= 8000) {
    nivelHeroi = "Platina";
} else if (qtdExperiencia > 8000 && qtdExperiencia <= 9000) {
    nivelHeroi = "Ascendente";
} else if (qtdExperiencia > 9000 && qtdExperiencia <= 10000) { 
    nivelHeroi = "Imortal";
} else if (qtdExperiencia > 10000) {
    nivelHeroi = "Radiante";
}

console.log(´O Herói tem nome ${nomeHeroi} e está no nível ${nivelHeroi}´);
