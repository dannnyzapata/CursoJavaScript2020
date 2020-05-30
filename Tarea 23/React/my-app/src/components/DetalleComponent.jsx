import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PostsComponent from './PostsComponent';

const DetalleComponent = () => {

    const {id} = useParams();
    const [myId, setId] = useState([])
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [thumbnail, setThumbnail] = useState([])
    const [comics, setComics] = useState([])

    useEffect(() => {
        obtenerPosts();
    }, []);
    //'http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=4139f54900658138dc2740df3f8c8b58&hash=6e791c7487549bcaf009a7668b4dd0f6'
    
    const obtenerPosts = async () =>{
        const datos = await fetch(`http://gateway.marvel.com/v1/public/characters?id=${id}&ts=1&apikey=4139f54900658138dc2740df3f8c8b58&hash=6e791c7487549bcaf009a7668b4dd0f6`)
        const detallePost = await datos.json();
        setId(detallePost.data.results[0].id);
        setName(detallePost.data.results[0].name);
        setDescription(detallePost.data.results[0].description);
        var urlImage = detallePost.data.results[0].thumbnail.path //obtiene url de la imagen
        var urlExtension = detallePost.data.results[0].thumbnail.extension //obtiene extension de la imagen
        var imgSrc=`${urlImage}/portrait_uncanny.${urlExtension}`
        setThumbnail(imgSrc);
        setComics(detallePost.data.results[0].comics.items);
    }

    return (
        <div>
            <h1>Superhero Details</h1>
            <hr/>
            <h4>{myId}</h4>
            <br></br>
            <h3>{name}</h3>
            <br></br>
            <p>{description}</p>
            <br/>
            <img src={thumbnail}></img>
            <br/>
            <br/>
            <h4>Comics</h4>
            <ul>
            {
                comics.map(comic => (
                    <li>{comic.name}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default DetalleComponent
