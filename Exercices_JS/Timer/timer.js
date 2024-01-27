
let i = 10; // durée de comptage en seconde.

// Fonction de démarage du décompte
function start() {
    reset();
    decompte(i);
};

// logique mêtier du compteur
function decompte(i) {
    if (i > 0) {
        setTimeout(() => {
            let p = document.createElement('p');
            p.textContent = `${i}`;
            document.body.appendChild(p);
            decompte(i - 1)
        }, 1000)
    } else {
        setTimeout(stop, 1000);
    }
};

// fonction de cloture du comptage
function stop() {
    let p = document.createElement('p');
    p.textContent = "STOP";
    p.style.color = "red";
    document.body.appendChild(p);
};

// fonction de réinitialisation du compteur
function reset() {
    let p = document.querySelectorAll('p');
    [...p].forEach(paraph => {  // RESET : Itère sur chaque <p> du document et le supprime du DOM.
    paraph.remove()
    });
};

// on selectionne le bouton et on y met un ecouteur d'evenements click qui appelera la fonction start().
let btn = document.querySelector('.button');
btn.addEventListener('click', start);








