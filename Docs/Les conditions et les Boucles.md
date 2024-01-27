


# Cours sur les Boucles en JavaScript

Les boucles permettent de répéter des actions de manière efficace. En JavaScript, il existe plusieurs types de boucles, chacune avec ses propres cas d'usage.

> ## Conseils et Bonnes Pratiques
>
> 1. **Choix de la Boucle** : Utilisez `for` quand le nombre d'itérations est connu, `while` ou `do...while` dans le cas contraire.
> 2. **Optimisation** : Dans les boucles `for`, évitez les calculs inutiles dans la condition.
> 3. **Clarté** : Utilisez des noms de variables clairs pour les compteurs et les itérateurs.
> 4. **Précaution** : Faites attention à ne pas créer de boucles infinies.


## La Boucle `for`

La boucle `for` est l'une des plus utilisées. Elle est idéale lorsque le nombre d'itérations est connu à l'avance.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Affiche les nombres de 0 à 4
}
```

### Syntaxe

```javascript
for ([initialisation]; [condition]; [incrémentation]) {
  // Code à exécuter à chaque itération
}
```

- **Initialisation** : En général, on initialise une variable qui servira de compteur.
- **Condition** : La boucle continue tant que cette condition est vraie.
- **Incrémentation** : Modifie le compteur à chaque itération.

## La Boucle `while`

La boucle `while` est utilisée quand le nombre d'itérations n'est pas connu à l'avance. Elle s'exécute tant que la condition est vraie.

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Syntaxe

```javascript
while (condition) {
  // Code à exécuter tant que la condition est vraie
}
```

## La Boucle `do...while`

Similaire à `while`, mais la condition est évaluée après l'exécution du code dans la boucle, assurant ainsi au moins une exécution du bloc de code.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### Syntaxe

```javascript
do {
  // Code à exécuter
} while (condition);
```

## La Boucle `for...in`

Cette boucle est spécialement conçue pour parcourir les propriétés d'un objet.

```javascript
const obj = {a: 1, b: 2, c: 3};
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
```

### Syntaxe

```javascript
for (variable in objet) {
  // Code à exécuter
}
```

## La Boucle `for...of`

Introduite en ES6, elle permet de parcourir les éléments d'objets itérables comme les tableaux, les chaînes de caractères, etc.

```javascript
const arr = ['a', 'b', 'c'];
for (const value of arr) {
  console.log(value);
}
```

### Syntaxe

```javascript
for (variable of iterable) {
  // Code à exécuter
}
```



# Fiche Mémo - Structures de Contrôle en JavaScript

# Exemples

<details>
<summary><span style="color: blue;">Opérateurs Conditionnels (OR, AND, NOT)</span></summary>

```javascript
var arrive = "a";
var depart = "b";
var chauffeur = "";

if ((depart != "" && arrive != "") && (chauffeur != "")) {
  console.log('Le train va démarrer.');
} else {
  console.log('Le train ne peut pas démarrer.');
}
```
</details>

<details>
<summary><span style="color: blue;">Conditions Ternaires</span></summary>

```javascript
let x = 5;
x > 3 ? console.log('x est supérieur à 3') : console.log('x est inférieur ou égal à 3');

// Version if-else équivalente
if (x > 3) {
  console.log('x est supérieur à 3');
} else {
  console.log('x est inférieur ou égal à 3');
}
```
</details>

<details>
<summary><span style="color: blue;">Définir des Valeurs par Défaut avec condition Ternaire</span></summary>

```javascript
var depart = "Paris";
var arrive = prompt("Où souhaitez-vous aller ?") || "Lyon";
var chauffeur = "Anthony F.";

if ((depart != "" && arrive != "") && (chauffeur != "")) {
  alert('Le train va démarrer à destination de ' + arrive + '.');
} else {
  alert('Le train ne peut pas démarrer.');
}
```
</details>

<details>
<summary><span style="color: blue;">Les Boucles While</span></summary>

### Boucle While
```javascript
let i = 1;
while (i < 5) {
  console.log('Ligne : ' + i);
  i++;
}
```

### Boucle Do While
```javascript
do {
  var prenom = prompt("Quel est votre prénom ?");
} while (prenom == "" || prenom == null);

alert('Bonjour ' + prenom + '.');
```

### Boucle For vs. While
#### While
```javascript
let i = 1;
while (i < 5) {
  console.log('Ligne : ' + i);
  i++;
}
```

#### For
```javascript
for (let i = 1; i < 5; i++) {
  console.log('Ligne : ' + i);
}
```
</details>

<details>
<summary><span style="color: blue;">Les Boucles FOR</span></summary>

### Boucle FOR In
```javascript
let panier = ['fraise', 'banane', 'poire', 'pomme', 'cerise'];
for (const fruit in panier) {
  console.log(fruit); // Index
  console.log(panier[fruit]); // Contenu
  panier[fruit] = 'abricot'; // Remplacement
}
```

### Boucle FOR Of
```javascript
let panier = ['fraise', 'banane', 'poire', 'pomme', 'cerise'];
for (const fruit of panier) {
  console.log(fruit); // Contenu
  console.log(panier.indexOf(fruit)); // Index
}
```

### Boucle FOR Each
```javascript
let listeDePays = ['France', 'Belgique', 'Japon', 'Maroc'];
listeDePays.forEach(pays => console.log(pays)); // Fonction fléchée
```
</details>


<details>
<summary><span style="color: blue;">Try / Catch</span></summary>

### Exemple 1
```javascript
try {
  alert(hello);
} catch (error) {
  alert('Une erreur est survenue ! 😱 (message 1/4)');
  alert(error + ' (message 2/4)');
  alert(error.message + ' (message 3/4)');
  alert(error.stack + ' (message 4/4)');
}
```

### Exemple 2 - Choix d'une arme et ajustement des dégâts
```javascript
let recompense = prompt("Choisissez une récompense parmi une 'épée' (dgt 40), un 'arc' (dgt 30) ou deux 'haches' (dgt 20x2) ");
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
          throw new Error("Vous devez choisir une récompense parmi une 'épée' (dgt 40), un 'arc' (dgt 30) ou deux 'haches' (dgt 20x2)")
      }
      alert("Vous avez choisi : " + recompense + " pour " + degats + " points de dégâts !");
      alert('Vous vous équipez de votre nouvelle arme et vous remettez sur le chemin de votre aventure !');
      break;
    } catch (error) {
        alert(error);
        recompense = prompt("Choisissez une récompense parmi une 'épée' (dgt 40), un 'arc' (dgt 30) ou deux 'haches' (dgt 20x2) ");
    }
}
```
</details>



