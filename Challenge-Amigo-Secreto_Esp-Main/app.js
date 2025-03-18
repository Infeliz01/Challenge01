

let listaAmigos = [];

function agregarAmigo() {

    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre !== "") {
        listaAmigos.push(nombre); 
                let lista = document.getElementById("listaAmigos");
                let nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);

        input.value = "";
    } else {
        alert("Por favor ingresa un nombre válido.");
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("¡Agrega al menos un amigo antes de sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSecreto} es el amigo secreto 🎉</li>`;

    document.getElementById("listaAmigos").style.display = "none";
}
