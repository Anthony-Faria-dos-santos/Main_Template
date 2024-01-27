


//! Créer les 4 fonctions de calcul (addition, soustraction, multiplication, division)

  // ADDITION

  function addition(a,b) {
    return a + b ;
   };

 // SOUSTRACTION

  function soustraction (a,b) {
    return a - b;
  };

  // MULTIPLICATION

  function multiplication (a,b) {
    return a * b
  };

  // DIVISION

  function division (a,b) {
    if (b == 0) {
      alert("Erreur, Division par zéro impossible.");
      return "impossible à calculer"
    } else {
      return a / b;
    }
  };

  // Contrôle de l'entrée utilisateur

  function choixNombre (message) {
    let nombre;
    do {
      nombre = prompt(message)
    } while (isNaN(nombre) || nombre === "")
    return Number(nombre)

  }


  calculate(); // Appel de notre fonction calculatrice

    function calculate () {
       while (true) { // Boucle while(true) se répête à l'infinie jusqu'a un break ou un return !!

       // Demander le choix du mode de calcul à l'utilisateur (addition, soustraction, multiplication, division)
       let modeSelect = prompt("Choisissez le mode de calcul : \n1 pour addition, \n2 pour soustraction, \n3 pour multiplication \n4 pour division");
        // On contrôle l'entrée utilisateur afin qu'elle corresponde à une des fonctions proposées.
       if (!["1", "2", "3", "4"].includes(modeSelect)) {
        alert("Choix invalide. Veuillez choisir un mode valide.");
        continue; // Dans ce cas ci, "continue" renvoi à l'initialisation de "modeSelect" en cas d'erreur de l'utilisateur.
       }

       // Demander les valeurs des 2 nombres a et b à l'utilisateur
       let a = choixNombre("Veuillez choisir un premier nombre :");
       let b = choixNombre("Veuillez choisir un second nombre :");
       let resultat;

       // le switch initialise modeSelect et définie une action en fonction du choix de l'utilisateur.
       switch (modeSelect) {
          case "1":
          resultat = addition(a,b);
          break;

          case "2":
          resultat = soustraction(a,b);
          break;

          case "3":
          resultat = multiplication(a,b);
          break;

          case "4":
          resultat = division(a,b);
          break;

          // + Gestion des erreurs (en cas de Bug)
          default :
          throw new Error('Désolé quelque chose n\' à pas fonctionné comme prévu.');

       }
       // Afficher le résultat dans une alerte
      alert(`Le résultat est ${resultat} !` );
      break;
    }};

    // Proposer de refaire un nouveau calcul ou de quitter le programme
    if (confirm("Souhaitez-vous refaire un nouveau calcul ?")) {
      // Si oui on réinitialise la fonction calculate
      calculate();


    } else {
      // Si non on affiche un message et FIN !!
     alert("Merci d'avoir utilisé notre calculatrice ! A bientôt !");
     }

     