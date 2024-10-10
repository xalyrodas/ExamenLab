let com1p = document.createElement('div');
com1p.className = "comp-1";

let title = document.createElement('h3');
title.innerText = "COMPONENTE 1";

let description = document.createElement('p');
description.innerText = "Descripción del componente";

// Crear el elemento para la imagen o el icono
let imagePlaceholder = document.createElement('div');
imagePlaceholder.className = "image-placeholder";

// Agregar los elementos al contenedor del componente
com1p.appendChild(title);
com1p.appendChild(imagePlaceholder);
com1p.appendChild(description);

export { com1p };
