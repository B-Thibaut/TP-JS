
let tabJour = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]; 
let tabMois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];

let nomJour = "Jeudi"; 
let numJour = 14; 
let nomMois = 9; 
let isHiver = false;

let maDateV1 = {
	"jour" : tabJour[4],
	"mois" : tabMois[1]
}

let maDateV2 = {};
maDateV2.jour = tabJour[1];
maDateV2.mois = tabMois[5];

console.log(nomJour);
console.log(numJour);
console.log(nomMois);
console.log(isHiver);
console.log(" ");
console.log(tabJour[3]);
console.log(tabMois[8]);
console.log(" ");
console.log("maDateV1:");
console.log(maDateV1.jour);
console.log(maDateV1.mois);
console.log(" ");
console.log("maDateV2:");
console.log(maDateV2.jour);
console.log(maDateV2.mois);

//TP6

let nbr1 = 3;
let nbr2 = 7;
let nbr3 = 8;
let nbr4 = 21;

console.log("nbr1 + nbr2:");
console.log(nbr1 + nbr2);

console.log("nbr4 - nbr3:");
console.log(nbr4 - nbr3);

console.log("nbr2 = nbr1 * nbr2:");
nbr2 = nbr1 * nbr2;
console.log(nbr2);

console.log("nbr4 / nbr1:");
console.log(nbr4 / nbr1);

console.log("nbr4 % nbr1:");
console.log(nbr4 % nbr1);

//TP7

let nomSerie;
nomSerie = prompt('Quelle est ta série préférée ?');

let nomPerso; 
nomPerso = prompt('Quelle est ton personnage favori ?');

alert("Ma série préférée est "+nomSerie+" et mon personnage est "+nomPerso+" !");