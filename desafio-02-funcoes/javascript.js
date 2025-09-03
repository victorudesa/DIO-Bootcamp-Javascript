let winsUser = parseInt(gets());
let lossesUser = parseInt(gets());

function calculateRanked(vitorias, derrotas) {
    let netWins = vitorias - derrotas;
    return netWins;
}

let netWinsRanked = calculateRanked(winsUser, lossesUser);

let rankUser;

if (winsUser < 10) {
    rankUser = "Ferro";
} else if (winsUser >= 11 && winsUser <= 20) {
    rankUser = "Bronze";
} else if (winsUser >= 21 && winsUser <= 50) {
    rankUser = "Prata";
} else if (winsUser >= 51 && winsUser <= 80) {
    rankUser = "Ouro";
} else if (winsUser >= 81 && winsUser <= 90) {
    rankUser = "Diamante";
} else if (winsUser >= 91 && winsUser <= 100) {
    rankUser = "Lendário";
} else {
    rankUser = "Imortal";
}

print(`O Herói tem de saldo de ${netWinsRanked} está no nível de ${rankUser}`);