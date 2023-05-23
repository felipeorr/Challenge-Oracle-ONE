const TextArea = document.querySelector(".Text-Area");
const Mensaje = document.querySelector(".Mensaje");

function btnEncriptar() {
  const valor = Encriptador(TextArea.value);

  Mensaje.value = valor;

  TextArea.value = "";  

  Mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
  // return Desencripta(TextArea.value);

  //const valor =  Encriptador(TextArea.value);
  const valor = Desencripta(Mensaje.value);
  Mensaje.value = valor;
}

function Encriptador(MensajeAEncriptar) {
  MensajeAEncriptar = MensajeAEncriptar.toLowerCase();
  let MatrizCOde = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (i = 0; i < MatrizCOde.length; i++) {
    if (MensajeAEncriptar.includes(MatrizCOde[i][0])) {
      MensajeAEncriptar = MensajeAEncriptar.replaceAll(
        MatrizCOde[i][0],
        MatrizCOde[i][1]
      );
    }
  }

  return MensajeAEncriptar;
}

function Desencripta(MensajeADesencriptar) {
  MensajeADesencriptar = MensajeADesencriptar.toLowerCase();
  let MatrizCOde = [
    ["ai", "a"],
    ["enter", "e"],
    ["imes", "i"],
    ["ober", "o"],
    ["ufat", "u"],
  ];

  for (i = 0; i < MatrizCOde.length; i++) {
    if (MensajeADesencriptar.includes(MatrizCOde[i][0])) {
      MensajeADesencriptar = MensajeADesencriptar.replaceAll(
        MatrizCOde[i][0],
        MatrizCOde[i][1]
      );
    }
  }

  return MensajeADesencriptar;
}

function Copiar() {
  const Copiado = navigator.clipboard.writeText(Mensaje.value);

  console.log("Texto copiado " & Copiado.value);
}
