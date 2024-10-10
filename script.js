// "use strict";

function openBox(element) {
  element.classList.toggle("open");
}

function addReview() {

  const review =
    document.getElementById("reviewPost").value;
  const addedReview =
    document.getElementById("addedReview");
  const fullName =
    document.getElementById("fullName").value;

  document.getElementById("fullName").value = "";
  document.getElementById("company").value = "";
  document.getElementById("position").value = "";
  document.getElementById("reviewPost").value = "";

  if (fullName){
  addedReview.innerHTML = fullName + ", gracias por tu reseña! Seguiré trabajando para mejorar mi portafolio.";
  }
} 

function toggleMode() {
  const el =
    document.querySelector("link");

  if (el.getAttribute("href") === "style.css") {
    el.setAttribute("href", "darkMode.css");
  }
  else {
    el.setAttribute("href", "style.css");
  }
}

// function toggleMode() {
//   const el = document.querySelector("body")
//   el.classList.toggle("darkMode");
// } OTRA FORMA DE CAMBIAR A MODO OSCURO, PERO TENGO QUE CREAR EN CSS UN .darkMode CON EL ESTILO QUE QUIERO

// function changeColor() {
//   const el =
//     document.querySelector("#páginaDesarrollada");
//   el.style.backgroundColor = "efefef";
// }