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
      const elLista = document.createElement("li");
      const div = document.createElement("div");
      div.className = "cat-container";
      lista.appendChild(elLista);
      elLista.appendChild(div);
      const elTit = document.createElement("h3");
      elTit.innerHTML = `The cat ${cats.indexOf(cat)} is:`;
      const catImage = document.createElement("img");
      catImage.setAttribute("src", cat.url);
      catImage.style.width = "300px";
      const catDescription = document.createElement("h4");
      catDescription.textContent = `and its url is: ${cat.url}`;
      div.appendChild(elTit);
      div.appendChild(catImage);
      div.appendChild(catDescription);
    });
  } catch (err) {
    console.error("ERROR", err);
  }
}

showCats(url);
