const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const mensajePlaceholder = document.querySelector('.mensaje-placeholder');
const boton = document.querySelector('.btn-copiar');
const logo = document.querySelector('.logo');

// Llama a validarInput al cargar la página
document.addEventListener("DOMContentLoaded", validarInput);
// Llama a validarInput cada vez que el contenido del textarea cambie
textArea.addEventListener("input", validarInput);  


function validarInput() {
  var input = textArea.value.trim();
  if (input.length === 0) {
    mensajePlaceholder.innerHTML = '<span class="lineaUno">Ningún mensaje fue encontrado</span><br><span class="lineaDos">Ingresa el texto que desees encriptar o desencriptar.</span>';
    boton.style.visibility = 'hidden';
    mensaje.value = "";
    mensaje.style.backgroundImage = 'url("./imgs/muneco.jfif")';
  }else{
    mensajePlaceholder.innerHTML = '<span class="lineaUno">Escribiendo...</span>';
    mensaje.style.backgroundImage = 'url("./imgs/muneco.jfif")';
    mensaje.value = "";
  }
}

function checkWidth() {
    if (window.innerWidth < 900) { // Cambia 900 al tamaño deseado
        logo.classList.add('hidden');
        mensaje.classList.add('hidden'); // Ocultar la imagen de fondo
    } else {
        logo.classList.remove('hidden');
        mensaje.classList.remove('hidden'); // Mostrar la imagen de fondo
    }
}

function btnEncriptar() {
  var input = textArea.value.trim();
  if (input.length===0) {
    mensaje.style.backgroundImage = 'url("/imgs/muneco.jfif")';
    mensaje.value = "";
    mensajePlaceholder.innerHTML = "<span class='lineaUno'>Ningún mensaje fue encontrado</span><br><span class='lineaDos'>Ingresa el texto que desees encriptar o desencriptar.</span>";
  } else {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensajePlaceholder.innerText = "";
    boton.style.visibility = 'visible';
  }
}

function encriptar(stringEncriptada) {
let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  var input = textArea.value.trim();
  if (input.length===0) {
    mensaje.style.backgroundImage = 'url("/imgs/muneco.jfif")';
    mensaje.value = "";
    mensajePlaceholder.innerHTML = "<span class='lineaUno'>Ningún mensaje fue encontrado</span><br><span class='lineaDos'>Ingresa el texto que desees encriptar o desencriptar.</span>";
  } else {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensajePlaceholder.innerText = "";
    boton.style.visibility = 'visible';
  }
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function copiarTexto() {
  // Selecciona el texto del textarea
  mensaje.select();
  // Copia el texto seleccionado al portapapeles
  document.execCommand("copy");
  textArea.value = "";
  mensaje.value = "";
  boton.style.visibility = 'hidden';
  mensaje.style.backgroundImage = 'url("/imgs/muneco.jfif")';
  mensajePlaceholder.innerHTML = '<span class="lineaUno">Su texto ha sido copiado al portapapeles.</span>';
}
