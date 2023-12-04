// Escriba una función que utilice The Cat API para obtener una
//lista aleatoria de 10 imágenes de gatos
//(https://api.thecatapi.com/v1/images/search?limit=10).
//La función debería devolver una serie de cadenas que contengan las URL de las imágenes.

const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const contenedor = document.querySelector(".container");

async function showCats(link) {
  try {
    const firstCall = await fetch(link);
    const cats = await firstCall.json();
    console.log(cats);
    const titulo = document.createElement("h1");
    titulo.textContent = "The cats are:";
    contenedor.appendChild(titulo);
    const lista = document.createElement("ul");
    contenedor.appendChild(lista);
    cats.forEach((cat) => {
      const div = document.createElement("div");
      div.className = "cat-container";
      lista.appendChild(div);
      const elLista = document.createElement("li");
      elLista.innerHTML = `<h3>The cat ${cats.indexOf(cat)} is:</h3>`;
      const catImage = document.createElement("img");
      catImage.setAttribute("src", cat.url);
      catImage.style.width = "300px";
      div.appendChild(elLista);
      div.appendChild(catImage);
    });
  } catch (err) {
    console.error("ERROR", err);
  }
}

showCats(url);
