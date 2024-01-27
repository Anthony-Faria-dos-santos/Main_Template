
# Les Objets

Voici une fiche technique résumant l'ensemble des fonctions liées aux objets Set, Map, WeakSet et WeakMap.

<details>
<summary> L'objet Set</summary>

### Créer un objet Set

```javascript
let monObjet = new Set();
// ou
let monObjet = new Set(['un', 'deux', 'trois']);
```

### Ajouter un élément

```javascript
monObjet.add('quatre');
```

### Supprimer un élément

```javascript
monObjet.delete('quatre');
```

### Supprimer tous les éléments

```javascript
monObjet.clear();
```

### Avoir la taille de l'objet (le nombre d'éléments)

```javascript
monObjet.size;
```

### Vérifier si un élément existe (renvoie donc true ou false)

```javascript
monObjet.has('un');
```

### Retourner tous les éléments

```javascript
monObjet.values();
// ou
monObjet.keys();
```

</details>

<details>
<summary>L'objet Map</summary>

### Créer un objet Map

```javascript
let monObjet = new Map();
```

### Ajouter un élément

```javascript
monObjet.set('John Doe', {
    email: 'john@doe.com',
});
```

### Supprimer un élément

```javascript
monObjet.delete('John Doe');
```

### Supprimer tous les éléments

```javascript
monObjet.clear();
```

### Vérifier si un élément existe (renvoie donc true ou false)

```javascript
monObjet.has('John Doe');
```

### Retourner un élément

```javascript
monObjet.get('John Doe');
```

### Retourner tous les éléments

```javascript
monObjet.values();
// ou
monObjet.keys();
```

</details>

<details>
<summary>L'objet WeakSet</summary>

### Créer un objet WeakSet

```javascript
let monObjet = new WeakSet();
// ou
let monObjet = new WeakSet([objet1, objet2, objet3]);
```

### Ajouter un élément

```javascript
monObjet.add(objet4);
```

### Supprimer un élément

```javascript
monObjet.delete(objet4);
```

### Avoir la taille de l'objet (le nombre d'éléments)

Il est important de noter que les objets WeakSet ne possèdent pas de propriété `size` et ne sont pas énumérables. Par conséquent, il n'est pas possible de récupérer la taille d'un `WeakSet` directement.

### Vérifier si un élément existe (renvoie donc true ou false)

```javascript
monObjet.has(objet4);
```

</details>

<details>
<summary>L'objet WeakMap</summary>

### Créer un objet WeakMap

```javascript
let monObjet = new WeakMap();
```

### Ajouter un élément

```javascript
const objet1 = {
    nom: 'John Doe',
}
 
monObjet.set(objet1, {
    email: 'john@doe.com',
});
```

### Supprimer un élément

```javascript
monObjet.delete(objet1);
```

### Avoir la taille de l'objet (le nombre d'éléments)

Comme pour `WeakSet`, les `WeakMap` ne permettent pas non plus de récupérer la taille ou le nombre d'éléments car ils ne sont pas énumérables.

### Vérifier si un élément existe (renvoie donc true ou false)

```javascript
monObjet.has(objet1);
```

### Retourner un élément

```javascript
monObjet.get(objet1);
```

</details>

# Fiche Mémo - Les Objets en JavaScript

Les objets en JavaScript sont des collections de propriétés et de méthodes. Voici comment vous pouvez créer et interagir avec les objets.

<details>
<summary><span style="color: blue;">Création d'un objet</span></summary>

```javascript
let personnage = {
  nom: 'Anthony',
  age: 38,
  sexe: 'masculin',
  cheveux: 'bruns',
  force: 50,
  vitesse: 1.5,

  attaquer() {
    console.log('Le personnage attaque !');
  },

  saluer: function() {
    console.log('Bonjour !');
  },

  crier: () => console.log('A l\'attaque Aaaaaah !')
};
```
Cette structure définit un objet personnage avec plusieurs propriétés (nom, age, sexe, etc.) et méthodes (attaquer, saluer, crier).

</details>

<details>
<summary><span style="color: blue;">Appel de méthodes d'un objet</span></summary>

```javascript
personnage.attaquer(); // Affiche "Le personnage attaque !"
personnage.saluer();   // Affiche "Bonjour !"
personnage.crier();    // Affiche "A l'attaque Aaaaaah !"
```
Les méthodes de l'objet sont appelées en utilisant la notation pointée.

</details>


<details>
<summary><span style="color: blue;">Appel de propriétés d'un objet</span></summary>

```javascript
console.log(personnage.nom); // Affiche "Anthony"
console.log(`${personnage.nom} avance à la vitesse de ${personnage.vitesse} m/s.`);
```
De même, les propriétés de l'objet peuvent être accédées et utilisées dans des expressions.
</details>

Cette fiche mémo vous aidera à comprendre la création et l'utilisation des objets en JavaScript, y compris comment définir des objets avec des propriétés et des méthodes, et comment accéder à ces propriétés et méthodes.
