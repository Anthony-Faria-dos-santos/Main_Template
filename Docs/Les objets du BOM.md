# Les Objets du Modèle d'Objets du Navigateur (BOM)

Le Modèle d'Objets du Navigateur (BOM) offre aux scripts client la possibilité d'interagir avec le navigateur. Dans ce document, nous explorerons les objets globaux `window` et `navigator` qui sont des composants essentiels du BOM.

## L'Objet Global "window" - Le Super Objet

L'objet `window` est l'objet global en JavaScript qui correspond à la fenêtre du navigateur. Il agit comme un conteneur pour l'ensemble du modèle d'objet JavaScript et offre des méthodes et des propriétés pour contrôler la fenêtre du navigateur.

### Exemples d'Utilisation de l'Objet "window"

<details>
  <summary>Cliquez pour voir le menu</summary>

  Contenu du menu déroulant.
</details>

```javascript
window.alert('Bonjour !'); // Affiche une boîte de dialogue avec "Bonjour !".
window.prompt('Quel est votre nom ?'); // Demande le nom de l'utilisateur.
window.confirm('Voulez-vous continuer ?'); // Demande confirmation pour continuer.
window.open('https://www.google.com'); // Ouvre Google dans une nouvelle fenêtre.
window.close(); // Ferme la fenêtre courante.
window.document; // Référence au document HTML actuel.
window.location; // Contient l'URL de la fenêtre courante.
window.history; // Permet la navigation dans l'historique de navigation.
window.navigator; // Fournit des informations sur le navigateur.
window.screen; // Donne des informations sur l'écran de l'utilisateur.
window.title; // Récupère ou définit le titre du document.
```

### Méthodes Courantes de l'Objet "window"

- Gestion des fenêtres et dialogues : `alert()`, `confirm()`, `prompt()`, `open()`, etc.
- Gestion du temps : `setTimeout()`, `clearTimeout()`, `setInterval()`, `clearInterval()`, etc.
- Gestion de l'URL et de l'historique : `location.reload()`, `history.back()`, etc.
- Gestion des événements : `addEventListener()`, `removeEventListener()`.
- Gestion du stockage : Manipulation de `localStorage` et `sessionStorage`.
- Performance et debugging : `getComputedStyle()`, `matchMedia()`.
- Autres méthodes utiles : `postMessage()`, `queueMicrotask()`.

Pour une liste complète des méthodes, consultez la documentation officielle sur [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/API/Window).

## L'Objet "navigator"

L'objet `navigator` est une propriété de l'objet global `window` qui représente l'état et l'identité du navigateur.

### Exemples d'Utilisation de l'Objet "navigator"

```javascript
navigator.cookieEnabled; // Indique si les cookies sont activés.
navigator.language; // Affiche la langue du navigateur.
navigator.onLine; // Indique si le navigateur est en ligne.
navigator.userAgent; // Détails sur le navigateur et le système d'exploitation.
navigator.geolocation; // Accès aux services de géolocalisation.
navigator.mediaDevices; // Interactions avec les dispositifs multimédias.
```

### Méthodes Courantes de l'Objet "navigator"

- Géolocalisation : `getCurrentPosition()`, `watchPosition()`.
- Médias : `getUserMedia()`, `enumerateDevices()`.
- Service Worker : `register()`, `getRegistration()`.
- Connexion : Informations sur la connexion Internet via `navigator.connection`.
- Authentification : Gestion des identifiants avec `navigator.credentials`.
- Presse-papiers : Accès au presse-papiers avec `navigator.clipboard`.
- Performances : Surveillance de l'état de la batterie avec `navigator.getBattery()`.

Pour une liste exhaustive et à jour des méthodes, référez-vous à la documentation officielle sur [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/API/Navigator).

---

En résumé, les objets `window` et `navigator` sont des outils puissants pour interagir avec le navigateur et le système sous-jacent. Ils permettent aux développeurs web de créer des expériences utilisateur riches et réactives.

<details>
<summary><span style="color: red;">Exemples d'objets du BOM et utilisations </summary>


## L'objet Global "window" - Le super Objet

L'objet "window" est un objet global qui représente la fenêtre du navigateur. Il contient des propriétés et des méthodes qui permettent de manipuler la fenêtre du navigateur.

Exemples :
```javascript
window.alert('Bonjour !'); // Affiche une boite de dialogue avec le message "Bonjour !".
window.prompt('Quel est votre nom ?'); // Affiche une boite de dialogue avec le message "Quel est votre nom ?".
window.confirm('Voulez-vous continuer ?'); // Affiche une boite de dialogue avec le message "Voulez-vous continuer ?".
window.open('https://www.google.com'); // Ouvre une nouvelle fenêtre avec l'URL "https://www.google.com".
window.close(); // Ferme la fenêtre courante.
window.document; // Affiche le document HTML de la fenêtre courante.
window.location; // Affiche l'URL de la fenêtre courante.
window.history; // Affiche l'historique de navigation de la fenêtre courante.
window.navigator; // Affiche les informations sur le navigateur de la fenêtre courante.
window.screen; // Affiche les informations sur l'écran de la fenêtre courante.
window.title; // Affiche le titre de la fenêtre courante.
```

Liste étendue des méthodes de l'objet window disponibles sur [MDN Web API Window](https://developer.mozilla.org/fr/docs/Web/API/Window)

### Méthodes de Gestion des Fenêtres et des Dialogues
- alert()
- blur()
- close()
- confirm()
- focus()
- moveBy()
- moveTo()
- open()
- print()
- prompt()
- resizeBy()
- resizeTo()
- scroll()
- scrollBy()
- scrollTo()

### Méthodes de Gestion du Temps
- clearInterval()
- clearTimeout()
- requestAnimationFrame()
- cancelAnimationFrame()
- setInterval()
- setTimeout()

### Méthodes de Gestion de l'URL et de l'Historique de Navigation
- atob()
- btoa()
- fetch()
- history.back()
- history.forward()
- history.go()
- history.pushState()
- history.replaceState()
- location.reload()
- location.replace()
- location.assign()

### Méthodes de Gestion des Événements
- addEventListener()
- removeEventListener()
- dispatchEvent()

### Méthodes de Gestion du Stockage
- localStorage.getItem()
- localStorage.setItem()
- localStorage.removeItem()
- localStorage.clear()
- sessionStorage.getItem()
- sessionStorage.setItem()
- sessionStorage.removeItem()
- sessionStorage.clear()

### Méthodes de Gestion de la Performance et du Debugging
- getComputedStyle()
- matchMedia()
- requestIdleCallback()
- cancelIdleCallback()

### Autres Méthodes Utiles
- postMessage()
- queueMicrotask()
- getSelection()
- find()

---

## L'objet navigator

L'objet navigator est une propriété de l'objet global window, qui représente le navigateur. Il contient des propriétés et des méthodes qui permettent de manipuler le navigateur.

Exemples :
```javascript
navigator.cookieEnabled; // Affiche si les cookies sont activés ou non dans le navigateur.
navigator.language; // Affiche la langue du navigateur.
navigator.onLine; // Affiche si le navigateur est connecté à internet ou non.
navigator.userAgent; // Affiche le type de navigateur.
navigator.geolocation; // Affiche la géolocalisation du navigateur.
navigator.mediaDevices; // Affiche les médias du navigateur.
```

Liste complète des méthodes de l'objet navigator disponibles sur [MDN Web API Navigator](https://developer.mozilla.org/fr/docs/Web/API/Window/navigator)

### navigator.geolocation
- getCurrentPosition()
- watchPosition()
- clearWatch()

### navigator.mediaDevices
- getUserMedia()
- enumerateDevices()
- getSupportedConstraints()

### navigator.serviceWorker
- register()
- getRegistration()
- getRegistrations()
- ready

### navigator.connection
Propriétés pour obtenir des informations sur la connexion Internet de l'utilisateur.

### navigator.credentials
- get()
- create()
- preventSilentAccess()
- store()

### navigator.clipboard
- writeText()
- readText()
- write()
- read()

### navigator.sendBeacon()
Permet d'envoyer des données HTTP de manière asynchrone.

### navigator.vibrate()
Permet de faire vibrer le dispositif de l'utilisateur.

### navigator.javaEnabled()
Détermine si Java est activé dans le navigateur.

### navigator.getBattery()
F

ournit des informations sur l'état de la batterie de l'appareil.

### navigator.getGamepads()
Retourne les informations sur les manettes de jeu connectées.

### navigator.permissions
- query()

Utilisé pour vérifier l'état des différentes permissions.

---

## L'Objet History

L'objet History est une propriété de l'objet global window, qui représente l'historique de navigation du navigateur. Il permet de manipuler l'historique de navigation, de naviguer en arrière et en avant, et de gérer les états de l'historique.

Exemples :
```javascript
history.length; // Affiche le nombre d'entrées dans l'historique de navigation.
history.back(); // Navigue vers la page précédente dans l'historique.
history.forward(); // Navigue vers la page suivante dans l'historique.
history.go(-2); // Navigue vers la page qui se trouve deux entrées en arrière dans l'historique.
history.pushState(data, title, url); // Ajoute une nouvelle entrée dans l'historique avec les données spécifiées.
history.replaceState(data, title, url); // Remplace l'entrée actuelle dans l'historique avec les données spécifiées.
```

Liste complète des méthodes de l'objet history disponibles sur [MDN Web API History](https://developer.mozilla.org/fr/docs/Web/API/Window/history)

---

## L'Objet Location

L'objet Location est une propriété de l'objet global window, qui représente l'URL de la page courante. Il permet de manipuler l'URL, de rediriger vers une autre page et d'accéder à différentes informations sur l'URL.

Exemples :
```javascript
location.href; // Affiche l'URL complète de la page courante.
location.protocol; // Affiche le protocole utilisé dans l'URL (http: ou https:).
location.host; // Affiche le nom d'hôte de l'URL (ex: www.example.com).
location.pathname; // Affiche le chemin de l'URL (ex: /path/to/page).
location.search; // Affiche la chaîne de requête de l'URL (ex: ?param1=value1&param2=value2).
location.hash; // Affiche la partie d'URL après le symbole dièse (ex: #section).
```

Liste complète des propriétés de l'objet location disponibles sur [MDN Web API Location](https://developer.mozilla.org/fr/docs/Web/API/Location)

---

## L'Objet Screen

L'objet Screen est une propriété de l'objet global window, qui représente l'écran de l'utilisateur. Il permet d'accéder à différentes informations sur l'écran, telles que la résolution, la profondeur des couleurs, etc.

Exemples :
```javascript
screen.width; // Affiche la largeur de l'écran en pixels.
screen.height; // Affiche la hauteur de l'écran en pixels.
screen.availWidth; // Affiche la largeur disponible de l'écran en pixels.
screen.availHeight; // Affiche la hauteur disponible de l'écran en pixels.
screen.colorDepth; // Affiche la profondeur des couleurs de l'écran en bits.
screen.pixelDepth; // Affiche la profondeur des pixels de l'écran en bits.
```

Liste complète des propriétés de l'objet screen disponibles sur [MDN Web API Screen](https://developer.mozilla.org/fr/docs/Web/API/Screen)

---

## L'Objet Document

L'objet Document est une propriété de l'objet global window, qui représente le document HTML chargé dans la fenêtre du navigateur. Il permet de manipuler le contenu du document, d'accéder aux éléments HTML, de modifier les styles, etc.

Exemples :
```javascript
document.getElementById('myElement'); // Récupère l'élément HTML avec l'ID 'myElement'.
document.querySelector('.myClass'); // Récupère le premier élément HTML avec la classe 'myClass'.
document.createElement('div'); // Crée un nouvel élément HTML de type 'div'.
document.createTextNode('Hello, world!'); // Crée un nouveau nœud de texte avec le contenu 'Hello, world!'.
document.body; // Accède à l'élément HTML <body>.
document.title; // Accède au titre du document.
```

Liste complète des méthodes et propriétés de l'objet document disponibles sur [MDN Web API Document](https://developer.mozilla.org/fr/docs/Web/API/Document)


</details>