const novoButton = document.getElementById('novo');
const apiDiv = document.getElementById('api');

function carregarPersonagem() {
    fetch('https://rickandmortyapi.com/api/character/?page=19')
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            const randomIndex = Math.floor(Math.random() * characters.length);
            const character = characters[randomIndex];
            apiDiv.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.image}" alt="${character.name}">
                <p>Status: ${character.status}</p>
                <p>Espécie: ${character.species}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao carregar personagem:', error);
        });
}

novoButton.addEventListener('click', carregarPersonagem);

// Carregar personagem inicial ao carregar a página
carregarPersonagem();



