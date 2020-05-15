const urlLocal = new URL(window.location.href);
const search_Params = urlLocal.searchParams;
const id = search_Params.get('id');
console.log(id)
const urlapi = `https://gateway.marvel.com/v1/public/characters?id=${id}&ts=1&apikey=064c3983b85fc5f50926697ba48d20ce&hash=9f12d92f680e0c5401b784be3e977492`

const container = document.querySelector('#marvel-row');
const detalle = fetch(urlapi)
	.then(response => response.json())
	.then(hero => {
		
		const image = document.getElementById('image')
		var urlImage = hero.data.results[0].thumbnail.path;
		var urlExtension = hero.data.results[0].thumbnail.extension;		
		image.innerHTML = `<img src="${urlImage}/portrait_incredible.${urlExtension}"  class="img-thumbnail">`		
		document.getElementById('id').innerHTML = hero.data.results[0].id;
		document.getElementById('name').innerHTML = hero.data.results[0].name;
		document.getElementById('description').innerHTML = hero.data.results[0].description;
		const comics = hero.data.results[0].comics.items.map(item =>
		`<li>${item.name}</li>`
		).join('')
		const listcomics = document.getElementById('comics')
		listcomics.innerHTML = comics
		
	})