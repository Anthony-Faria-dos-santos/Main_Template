
# Guide des fonctions et propriétés du DOM

Ce guide résume les principales fonctions et propriétés utilisées pour interagir avec le Document Object Model (DOM) en JavaScript.

## Accéder aux éléments

Pour sélectionner des éléments dans le DOM, vous pouvez utiliser les méthodes suivantes :

- `getElementsByTagName()` : Sélectionne tous les éléments avec la balise spécifiée.

  ```javascript
  var divs = document.getElementsByTagName('div');
  ```

- `getElementById()` : Sélectionne l'élément unique ayant l'ID spécifié.

  ```javascript
  var header = document.getElementById('header');
  ```

- `getElementsByClassName()` : Sélectionne tous les éléments qui ont la classe spécifiée.

  ```javascript
  var buttons = document.getElementsByClassName('btn');
  ```

- `querySelector()` : Sélectionne le premier élément qui correspond au sélecteur CSS spécifié.

  ```javascript
  var nav = document.querySelector('.nav-menu');
  ```

- `querySelectorAll()` : Sélectionne tous les éléments qui correspondent au sélecteur CSS spécifié.

  ```javascript
  var items = document.querySelectorAll('.list-item');
  ```

## Modifier les éléments

Vous pouvez modifier le contenu ou la structure des éléments sélectionnés :

- `textContent` : Modifie ou récupère le texte contenu dans un élément.

  ```javascript
  header.textContent = 'Nouveau titre';
  ```

- `innerHTML` : Modifie ou récupère le contenu HTML à l'intérieur d'un élément.

  ```javascript
  div.innerHTML = '<span>Hello World!</span>';
  ```

## Ajouter et supprimer des éléments

Pour manipuler les éléments du DOM, utilisez les méthodes suivantes :

- `createElement()` : Crée un nouvel élément DOM.

  ```javascript
  var newDiv = document.createElement('div');
  ```

- `prepend()` : Insère un nœud au début de la liste des enfants d'un parent spécifié.

  ```javascript
  parentElement.prepend(newDiv);
  ```

- `append()` : Ajoute un nœud à la fin de la liste des enfants d'un parent spécifié.

  ```javascript
  parentElement.append(newDiv);
  ```

- `appendChild()` : Ajoute un nœud à la fin de la liste des enfants d'un élément parent spécifié (similaire à `append` mais ne prend que des nœuds).

  ```javascript
  parentElement.appendChild(newDiv);
  ```

- `insertBefore()` : Insère un nouvel élément avant l'élément référencé.

  ```javascript
  parentElement.insertBefore(newDiv, referenceElement);
  ```

## Modifier le style d'un élément

La propriété `style` permet de changer le style d'un élément :

- `style.property` : Applique une nouvelle valeur à la propriété CSS de l'élément.

  ```javascript
  element.style.color = 'orange';
  ```

- `className` : Change la ou les classes CSS appliquées à l'élément.

  ```javascript
  element.className = 'new-class';
  ```

# Interagir avec le DOM : Cas d'usage

## Les sélecteurs

```javascript
let header = document.getElementsByTagName('header');
let logo = document.getElementById('logo');
let container = document.getElementsByClassName('container');
```

## Sélecteur "querySelector"

Sélectionne précisément le premier élément du DOM qui correspond au sélecteur CSS défini.

```javascript
let h1 = document.querySelector('h1');
let h2 = document.querySelector('.h2');
let h3 = document.querySelector('#h3');
```

## Super Sélecteur "querySelectorAll"

Sélectionne tous les éléments du DOM qui correspondent au sélecteur CSS défini.

```javascript
let p = document.querySelectorAll('p');
let span = document.querySelectorAll('.span');
let a = document.querySelectorAll('#a');
```

```javascript
console.log(header);
console.log(logo);
console.log(container);
console.log(h1);
console.log(p);
```

# Modifier le DOM

## Modification de contenu

```javascript
let select_h1 = document.querySelector('h1');
select_h1.textContent = "Hello World !";
select_h1.innerHTML = '<div style="color: red">Hello World !</div>';
```

## Ajout d'éléments dans le DOM

### Méthode 1 : Écriture de texte

```javascript
document.write('test');
```

### Méthode 2 : Ajouter un élément brut ("String")

```javascript
document.body.append('test');
let h1 = document.querySelector('h1');
h1.append('test');
```

### Méthode 3 : Création d'un objet HTML

```javascript
let helloWorld = document.createElement('div');
helloWorld.textContent = "Hello World !";
helloWorld.style.color = "red";
document.body.append(helloWorld);
document.body.appendChild(helloWorld);
document.body.insertBefore(helloWorld, document.querySelector(".container"));
document.querySelector(".container").prepend(helloWorld);
```

## Suppression d'un élément du DOM

```javascript
let h1 = document.querySelector('h1');
h1.remove();
document.querySelector('h1').remove();
document.body.removeChild(h1);
```

## Modifier le style CSS d'un élément

```javascript
let header = document.querySelector('header');
header.style.backgroundColor = '#ffbd69';
header.style.padding = '20px';

document.querySelector('h1').style.color = '#111d5e';
document.querySelector('h1').style.textAlign = 'center';

document.querySelector('header').className = 'ma_class';
```

# Les événements

## Événements de base

```javascript
let a = document.querySelector('a');
let button = document.querySelector('button');

a.onclick = () => {
    if (confirm('Souhaitez-vous quitter le site ?')) {
        location.href = 'https://google.fr';
    }
};

button.onmouseover = () => {
    document.body.style.backgroundColor = "orange";
};

button.onmouseout = () => {
    document.body.style.backgroundColor = "white";
};
```

## Les écouteurs d'événements (Event Listeners)

### Ajout et utilisation d'écouteurs d'événements

```javascript
a.addEventListener('click', (e) => {
    if (confirm('Etes-vous sur de vous ?')){
        location.href = "https://www.google.fr";
    }
    console.log(e);
});

button.addEventListener('mouseover', (e) => {
    document.body.style.backgroundColor = "orange";
    console.log(e);
});

button.addEventListener('mouseout', (e) => {
    document.body.style.backgroundColor = "white";
    console.log(e);
});
```

### Via une fonction

Définition de fonctions pour les écouteurs d'événements.

```javascript
function fontArial() {
    document.body.style.fontFamily = "arial";
}

function fontTimes() {
    document.body.style.fontFamily = "times";
}

button.addEventListener('mouseout', fontArial);
button.addEventListener('mouseover', fontTimes);
```

### Suppression d'écouteurs d'événements

```javascript
button.removeEventListener('mouseout', fontArial);
```

### Propagation des événements

Méthode par délégation.

```javascript
let container = document.querySelector('.container');

container.addEventListener('click', () => {
    alert('Vous avez cliqué sur le container !');
})
```

Pour éviter la propagation, on peut utiliser `e.stopPropagation()` dans la fonction de rappel.
```
