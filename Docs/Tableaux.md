# Fonctionnalités liées aux tableaux en JavaScript

Ce document offre un aperçu des fonctions essentielles pour la manipulation des tableaux en JavaScript.

## Exemple de tableau

Considérons le tableau suivant pour nos exemples :

```javascript
let fruits = ['pomme', 'banane', 'poire', 'fraise'];
```

### Propriétés et méthodes courantes

- `fruits.length` : Renvoie le nombre d'éléments dans le tableau.

  ```javascript
  // Retourne 4
  console.log(fruits.length);
  ```

- `fruits[0]` : Accède au premier élément du tableau.

  ```javascript
  // Affiche 'pomme'
  console.log(fruits[0]);
  ```

- `fruits[fruits.length - 1]` : Accède au dernier élément du tableau.

  ```javascript
  // Affiche 'fraise'
  console.log(fruits[fruits.length - 1]);
  ```

- `fruits.push('pamplemousse')` : Ajoute un élément à la fin du tableau.

  ```javascript
  fruits.push('pamplemousse');
  ```

- `fruits.unshift('pamplemousse')` : Ajoute un élément au début du tableau.

  ```javascript
  fruits.unshift('pamplemousse');
  ```

- `fruits.pop()` : Supprime le dernier élément du tableau.

  ```javascript
  fruits.pop();
  ```

- `fruits.shift()` : Supprime le premier élément du tableau.

  ```javascript
  fruits.shift();
  ```

- `fruits.indexOf('banane')` : Retourne l'indice de la première occurrence de l'élément spécifié dans le tableau.

  ```javascript
  // Affiche 1
  console.log(fruits.indexOf('banane'));
  ```

- `fruits.join(', ')` : Crée et retourne une chaîne de caractères en concaténant tous les éléments du tableau, séparés par une virgule ou tout autre séparateur spécifié.

  ```javascript
  // Affiche 'pomme, banane, poire, fraise'
  console.log(fruits.join(', '));
  ```

- `fruits.slice()` : Crée une copie superficielle d'une portion de tableau dans un nouveau tableau.

  ```javascript
  let fruitsCopy = fruits.slice();
  ```

- `fruits.splice(start, deleteCount, item1, item2, ...)` : Change le contenu d'un tableau en retirant, remplaçant ou ajoutant des éléments.

  ```javascript
  // Supprime 2 éléments à partir de l'indice 1 et ajoute 'orange'
  fruits.splice(1, 2, 'orange');
  ```

**Note** :

- **Début** : Indice à partir duquel commencer le changement.
- **nbASupprimer** : Nombre d'éléments à supprimer à partir de l'indice spécifié.
- **Element(s)** : Éléments à ajouter à partir de l'indice spécifié.

Ces méthodes fournissent les bases pour manipuler des tableaux en JavaScript et sont essentielles pour toute opération de gestion de données dans les applications web.

<br>
<br>


# Fiche Mémo - Notions approfondies-  Les Tableaux en JavaScript

## Tableaux Simples
<details>
<summary>Tableau Simple</summary>

### Création de Tableaux
```javascript
// Anciennes synthaxes
let tableau = new Array('un', 'deux', 'trois');
let tableau = Array('un', 'deux', 'trois');

// Synthaxe moderne
let tableau = ['un', 'deux', 'trois'];
</details>
```

### Opérations sur Tableaux Simples

```javascript
console.log(tableau[0]); // Accès à un élément
console.log(tableau.indexOf('deux')); // Trouver l'index d'un élément
console.log(tableau.join(' ')); // Concaténation en String
console.log(tableau[tableau.length - 1]); // Dernier élément

tableau.push('quatre'); // Ajouter à la fin
tableau.unshift('zero'); // Ajouter au début
tableau.pop(); // Supprimer le dernier élément
tableau.shift(); // Supprimer le premier élément

tableau.splice(index, nbASupprimer, element1, element2, etc...); // Splice: Ajouter, remplacer, supprimer
```

</details>

## Tableaux Multidimensionnels

<details>
<summary>Tableau Multidimensionnel</summary>

### Création de Tableaux Multidimensionnels

```javascript
// Ancienne synthaxe
let tableau2D = new Array(
  Array('prenom1', 'prenom2', 'prenom3'),
  Array('nom1', 'nom2', 'nom3')
);

// Synthaxe moderne
let tableau2D = [
  ['prenom1', 'prenom2', 'prenom3'],
  ['nom1', 'nom2', 'nom3']
];
```

### Opérations sur Tableaux Multidimensionnels

```javascript
console.log(tableau2D[0][0]); // Accès à un élément
tableau2D[0].push('prenom4'); // Ajouter un élément à la fin
console.log(tableau2D.join('/')); // Concaténation en String
tableau2D[1].unshift('nom0'); // Ajouter un élément au début
tableau2D[0].pop(); // Supprimer le dernier élément
tableau2D[1].shift(); // Supprimer le premier élément

tableau2D.splice(2, 0, ['age1', 'age2', 'age3']); // Ajouter un tableau
console.log(tableau2D);
```

</details>

## Tableaux Associatifs

<details>
<summary>Tableau Associatif</summary>

### Création et Opérations

```javascript
let tableauAssociatif = {
  'prenom': 'Mark',
  'nom': 'Zuckerberg',
  'poste': 'PDG de Facebook'
};

console.log(tableauAssociatif['prenom']); // Accès à un élément
tableauAssociatif['age'] = 36; // Ajouter un élément
delete tableauAssociatif['age']; // Supprimer un élément

let chaine = '';
for (const valeur in tableauAssociatif){
  chaine += (valeur + ' : ' + tableauAssociatif[valeur] + '\n');
}
console.log(chaine);

function concaténer(unTableauAssociatif) {
  let chaine = '';
  for (const valeur in unTableauAssociatif){
    chaine += (valeur + ' : ' + unTableauAssociatif[valeur] + '\n');
  }
  return console.log(chaine);
};

concaténer(tableauAssociatif);
```

</details>
```
