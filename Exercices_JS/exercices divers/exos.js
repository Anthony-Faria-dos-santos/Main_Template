//TODO Liste d'exercices perso ayant pour objectif de confirmer l'acquisition des notions essentiels sur CommonJS et NodeJS + L'algorithmie.



//! - Fonction qui calcul l'imc de l'utilisateur, avec poid en kg et taille en cm

function imc(poid, taille) {
  poid = prompt("Quel est votre poid en kg ?");
  taille = prompt("Quel est votre taille en centimètres ?");
  result = poid / Math.pow(taille/100, 2);
  return alert('Votre IMC est de '+ Math.floor(result) +'.');
}

imc();


//! - Fonction qui demande l'age de l'utilisateur et qui lui dit s'il est majeur ou mineur.

let age = prompt("Quel est votre âge ?");

if (age<18) {
   alert("Vous êtes mineur.");
}
else if (age>=18 && age<=20) {
   alert("Vous êtes majeur en France.");
}
else  {
   alert("Vous êtes majeur partout, à vous les casinos !");
};

//! fonction qui renvoie un message avec le prénom, le nom et l'age de l'utilisateur.

function abracadabra() {
   let prenom = prompt("Quel est votre prénom ?");
   let nom = prompt("Quel est votre nom ?");
   let age = prompt("Quel est votre âge ?");
     alert(`Sapristi ! On ne m'avait pas prévenu que c'était vous, `
          + prenom+` ! Euh... Je veux dire... Monsieur le grand magicien `
          + nom + ` ! Cela fait déjà `
          + age +` ans que vous faites rayonner notre contrée !`)
};


  abracadabra();


  //! -- Choix d'une arme et ajustement des dégats.

let recompense = prompt("Choississez une récompense parmis une 'épée' (dgt 40), un 'arc' (dgt 30) ou deux 'haches' (dgt 20x2) ");
let degats = 5;

while (true) {
    try {

      switch (recompense) {
        case "épée":
          degats = 40;
          break;

        case "arc":
          degats = 30;
          break;

        case "haches":
          degats = 20;
          break;

        default:
          throw new Error ("Vous devez choisir une récompense parmis une 'épée' (dgt 40), un 'arc' (dgt 30) ou deux 'haches' (dgt 20x2)")
      }

      alert("Vous avez choisi : " + recompense + " pour " + degats + " points de dégats !");
      alert('Vous vous équipez de votre nouvelle arme et vous remettez sur le chemin de votre aventure !');
      break;

    }
    catch (error) {
        alert(error);
        recompense = prompt("Choississez une récompense parmis une 'épée' (dgt 40), un 'arc' (dgt 30) ou deux 'haches' (dgt 20x2) ");
    }
}

//! Exercice sur les fonctions recurcives
//todo créer une fonction somme qui calculera la somme des nombres en partant de 1 jusqu'au nombre que nous lui donnerons en paramètres.

let nbr=0
let i=0

function somme(nombre){

  if (nombre == 1 && (i==1)) {
    return console.log ("Le résultat est de 1");
  }

  nbr = (nbr + (nombre));

  if (nombre > 0) {
    i = i+1;
    console.log (nbr);
    somme(nombre-1);
  }

  else {
    return console.log (`La somme de ces nombres en partant de 1 jusqu\'a ${i} est de ${nbr}.`);
   }

};

somme(1);


