btn = document.querySelector('button'); // selection du bouton
p = document.querySelector('P'); // selection du paragraphe

let hidden = false; // initialisation de la variable hidden à false


btn.addEventListener('click', () => { // ajout d'un ecouteur d'evenement click sur le bouton
    // a chaque click sur le bouton, on inverse la valeur de la variable hidden
    hidden = !hidden
    if (hidden) { // si la variable hidden est true, on affiche le message et on modifie le texte du bouton
        hidden = true;
        btn.textContent = 'Cacher le message';
        p.textContent = 'Voici Notre Spoiler !!!';
        p.style.color = 'red';               
    }
    else { // sinon on cache le message et on modifie le texte du bouton       
        btn.textContent = 'Afficher le message';
        p.textContent = '';        
    }
});















