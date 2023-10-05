let container = document.querySelector('.container')
let formulario = document.querySelector('.formulario')
let pesquisa = document.querySelector('.form-control')

async function getFilmes(buscar){
    let request = await fetch(`https://www.omdbapi.com/?s=${buscar}&apikey=e6c43dc6`)
    let data = await request.json()
    
    console.log(data);

    data.Search.forEach((filmes) => {
        container.innerHTML += `
        <div class="card">
            <p>Titulo: ${filmes['Title']} </p>
            <img src="${filmes['Poster']}" alt="">
        </div>`

    });
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    container.innerHTML = ''
    getFilmes(pesquisa.value)
    pesquisa.value = '' 
})

