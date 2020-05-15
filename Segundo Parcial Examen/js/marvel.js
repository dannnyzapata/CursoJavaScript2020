const marvel = {
	
	render:()=>{
		const urlAPI = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=064c3983b85fc5f50926697ba48d20ce&hash=9f12d92f680e0c5401b784be3e977492`;
		const container = document.querySelector('#marvel-row');
		let contentHTML =  '';
		
    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
         
          contentHTML += `
            <div class="col-md-4">
                
                  <a href="info.html?id=${hero.id}"><img src="${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail" ></a>
				  
                
                <h3 class="title">${hero.name}</h3>
				<div >
				Id:
				${hero.id}  <br /> ${hero.description}
				</div>
				
            </div>
			
			
			`
			
			;
        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();