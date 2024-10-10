import { com1p } from "./componentes/componente1/componente1.js";
import { com3 } from "./componentes/componente3/componente3.js";


let com1 = document.createElement('section');
com1.className = "sec-1";
com1.appendChild(com1p);
DOM.appendChild(com1);

let section2 = document.createElement('section');
section2.className = "section2";
section2.appendChild(section2);
DOM.appendChild(section2);ç

let comp3 = document.createElement('section');
comp3.className = "section3";
comp3.appendChild(com3);
DOM.appendChild(comp3);