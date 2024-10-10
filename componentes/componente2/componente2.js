
function lista(){
    let section2 = document.createElement('section');
    section2.className = 'section';
    section2.appendChild(header());
    section2.appendChild(Lista1());

    return section2;
}

function Lista1(){
    let div = document.createElement('div');
    div.className = "Lista1";

    dataProyectos.forEach((lista) => {
        div.appendChild(item(lista.nombre, lista.descripcion, lista.webGIT, lista.gitgub, lista.stack))
    });
    return div;
}