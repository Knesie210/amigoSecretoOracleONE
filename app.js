let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const errorText = document.getElementById("error-text");
    const nombre = input.value.trim();
    const errorAmigos = document.getElementById("error-amigos");
    
    if ((nombre === "") ||(nombre ===" ")) {
        input.style.borderColor = "red";
        errorText.textContent = "Nombre requerido o no válido";
        return;
    }
    
    input.style.borderColor = "";
    errorText.textContent = "";
    errorAmigos.textContent="";
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
  const errorAmigos = document.getElementById("error-amigos");
    if (amigos.length === 0) {
        errorAmigos.textContent= "No hay nombres en la lista para sortear";
        return;
    }
    errorAmigos.textContent="";
    
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceSorteado, 1)[0];
    
    document.getElementById("resultado").innerHTML = `<li>Amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    actualizarLista();
}
