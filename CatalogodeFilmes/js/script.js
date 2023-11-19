const listaDeAnimes = ["https://m.media-amazon.com/images/M/MV5BN2FlYjYxMTMtZGQzYy00OWU2LTkyYWMtNWJhODhmZmM0N2FhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg.jpg", "https://i.pinimg.com/736x/e3/5a/9e/e35a9e4fa86ff369355f9029ef54868b.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvSt-zcg_YNr-yVIM2rLwzGYc7b6SDV57NicbxwaP3yRWKYhDXZwyitBBZin-pyKqxIg&usqp=CAU.jpg", "https://upload.wikimedia.org/wikipedia/id/thumb/c/c3/The_Seven_Deadly_Sins-_Wrath_of_the_Gods.jpg/220px-The_Seven_Deadly_Sins-_Wrath_of_the_Gods.jpg"];
const listaDeNomesAnimes = ["Black Clover", "Naruto", "Pokémon", "Nanatsu no Taizai"];
const imagensContainer = document.getElementById("imagensContainer");

let i = 0;
while (i < listaDeAnimes.length) {
    const divAnime = document.createElement("div");
    divAnime.classList.add("anime-container");
    const imgAnime = document.createElement("img");

    if (listaDeAnimes[i].toLowerCase().endsWith(".jpg")) {
        imgAnime.src = listaDeAnimes[i];
        imgAnime.style.width = "200px";
        imgAnime.style.height = "400px";

        const nomeAnime = document.createElement("h2");
        nomeAnime.textContent = listaDeNomesAnimes[i];

        divAnime.appendChild(imgAnime);
        divAnime.appendChild(nomeAnime);
        imagensContainer.appendChild(divAnime);
    }

    i++;
}