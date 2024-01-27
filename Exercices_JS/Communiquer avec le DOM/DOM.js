document.querySelector('#a-supprimer').remove();

let header = document.createElement('header');
header.textContent = 'Bienvenue'
header.style.textAlign = 'center';
header.style.color = 'white';
header.style.fontSize = '50px';
header.style.backgroundColor = '#e3b04b';
header.style.padding = '20px';
document.body.prepend(header);

let sous_header = document.createElement('div');
sous_header.innerHTML = '<a href="#">Acceuil</a> / <a href="#">Une autre page</a>';
sous_header.style.textAlign = 'left';
sous_header.style.fontSize = '15px';
sous_header.style.backgroundColor = '#f1d6ab';
sous_header.style.padding = '20px';
document.body.append(sous_header);

let p = document.createElement('p');
p.textContent = 'Ceci est une page web créée à 100% avec JavaScript';
p.style.textAlign = 'left';
p.style.color = 'black';
p.style.fontSize = '15px';
p.style.paddingLeft = '20px';
document.body.append(p);

// 
let href = document.createElement('p');
href.innerHTML = '<a onclick="return confirm(\'Etes vous certain de vouloir supprimer cet article ?\')" href="https://www.google.fr">Supprimer cet article</a>';
href.style.textAlign = 'left';
document.body.appendChild(href);

