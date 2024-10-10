let com3= document.createElement('div');
com3.className = "comp3";

// Crear el contenedor del formulario
let contactDiv = document.createElement('div');
contactDiv.className = "contact-div";

// Título del formulario
let contactTitle = document.createElement('h2');
contactTitle.innerText = "Contactar";
contactDiv.appendChild(contactTitle);

// Crear el campo de entrada para el nombre
let nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.className = "input-field";
contactDiv.appendChild(nameInput);

// Crear el campo de entrada para el correo electrónico
let emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.className = "input-field";
contactDiv.appendChild(emailInput);

export {com3};
