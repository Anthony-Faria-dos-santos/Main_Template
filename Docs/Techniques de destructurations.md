
# Fiche Mémo - JavaScript ES6 et Collections

<details>
<summary><span style="color: red;">Affectation par décomposition (destructuring)</span></summary>

## Sans décomposition
```javascript
let informations = ['superSayen', '25', 'homme'];
let pseudo = informations[0];
let age = informations[1];
let sexe = informations[2];
```

## Avec décomposition
```javascript
let [pseudo, age, sexe] = informations;
console.log(pseudo, age, sexe); // superSayen, 25, homme
```
</details>

<details>
<summary><span style="color: red;">Objet "Set" (ensembles)</span></summary>

```javascript
let nombres = [10, 45, 75, 10, 24, 45];
let monSet = new Set(nombres);
monSet.add('70');
monSet.add(80);
monSet.add(['mon', 'tableau', 'de', 'string']);
monSet.delete(80);
console.log(monSet.size);
console.log(monSet.has(80));
console.log(monSet);
```
</details>

<details>
<summary><span style="color: red;">Objet "Map" (dictionnaires)</span></summary>

```javascript
let monMap = new Map([
    ['prenom', 'Mark'],
    ['nom', 'Zuckerberg'],
]);
monMap.set('poste', 'PDG de Facebook');
monMap.delete('poste');
console.log(monMap);

let utilisateurs = new Map();
utilisateurs.set('Mark Zuckerberg', {
  email: 'mark@facebook.com',
  poste: 'PDG de Facebook',
});
utilisateurs.set('Bill Gates', {
  email: 'Bill@gatesnotes.com',
  poste: 'Fondateur de Microsoft',
});
console.log(utilisateurs);
```
</details>

<details>
<summary><span style="color: red;">Objet "WeakSet" (collection d'objets)</span></summary>

```javascript
let voitureA = { constructeur: 'Renault', modele: 'Clio' };
let voitureB = { constructeur: 'Peugeot', modele: '208' };
let voitures = new WeakSet([voitureA, voitureB]);
voitures.add(voitureA);
voitures.add(voitureB);
console.log(voitures);
```
</details>

<details>
<summary><span style="color: red;">Objet "WeakMap" (collection d'objets)</span></summary>

```javascript
let index = { id: 1 };
let voitureA = { constructeur: 'Renault', modele: 'Clio' };
let voitures = new WeakMap();
voitures.set(index, voitureA);
console.log(voitures);
voitures.delete(index);
console.log(voitures);
```
</details>

<details>
<summary><span style="color: red;">Conclusion : Map et WeakMap différences</span></summary>

En JavaScript, Map et WeakMap diffèrent par leurs types de clés, la référence des clés, l'énumérabilité, l'utilisation de la mémoire, et les cas d'utilisation. Map est plus polyvalent, tandis que WeakMap est conçu pour des cas spécifiques où les clés sont des objets et la gestion automatique de la mémoire est nécessaire.
</details>

<details>
<summary><span style="color: red;">Conclusion : Set et WeakSet différences</span></summary>

Set et WeakSet en JavaScript diffèrent par leurs types de valeurs, la référence des valeurs, l'énumérabilité, l'utilisation de la mémoire, et les cas d'utilisation. Set est idéal pour stocker des valeurs uniques de tout type, tandis que WeakSet est conçu pour des cas spécifiques avec des objets en tant qu'éléments.
</details>

<details>
<summary><span style="color: red;">Fonction : Le REST parameter</span></summary>

Le REST parameter permet de représenter un nombre indéfini d'arguments sous la forme d'un tableau.

### Exemple 1 :
```javascript
function addition1(...nombres) {
  let resultat = 0;
  for (const nombre of nombres) {
    resultat += nombre;
  }
  return console.log(resultat);
}
addition1(10, 20, 30, 40, 50, 50, 60, 60, 10, 20); // 350
```

### Exemple 2 :
```javascript
function addition2(...nombres) {
  let resultat = 0;
  nombres.forEach(nombre => resultat

 += nombre);
  return console.log(resultat);
}
addition2(10, 20, 30, 40, 50, 50, 60, 60, 10, 20); // 350
```
</details>

<details>
<summary><span style="color: red;">Fonction : Le SPREAD operator</span></summary>

Le SPREAD operator permet de séparer les éléments d'un tableau ou les propriétés d'un objet.

### Exemple 1 : Fusionner plusieurs tableaux
```javascript
let fruits1 = ['fraise', 'banane', 'poire', 'pomme', 'cerise'];
let aliments1 = ['pain', 'beurre', 'jambon', 'fromage'];
let total = aliments1.concat(fruits1);
console.log(total);

let fruits2 = ['fraise', 'banane', 'poire', 'pomme', 'cerise'];
let aliments2 = ['pain', 'beurre', 'jambon', 'fromage', ...fruits2];
console.log(aliments2);
```

### Exemple 2 : Découper une chaine de caractères
```javascript
let phrase = "Bonjour !";
let phraseTableau = [...phrase];
console.log(phraseTableau);
```

### Exemple 3 : Sélectionner un élément d'un tableau
```javascript
let devises = ['euro', 'dollar', 'yen', 'livre', 'franc'];
let [premiereDevise, ...autres] = devises;
console.log(premiereDevise);
console.log(autres);
```
</details>
