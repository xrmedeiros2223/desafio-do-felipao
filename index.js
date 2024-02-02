//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
let heroi = "pai "
let level = "119200"

while(level <= 1000){
    level = "Ferro"
}
while(level <= (2000)){
    level = "Bronze"
}
while(level <= 5000){
    level = "Prata"
}
while(level <= 7000){
    level = "Ouro"
}
while(level <= 8000){
    level = "Platina"
}
while(level <= 9000){
    level = "Ascendente"
}
while(level <= 10000){
    level = "Imortal"
}
while(level >= 10001){
    level = "Radiante"
}

console.log("O Herói de nome " + heroi + "esta no level " + level)