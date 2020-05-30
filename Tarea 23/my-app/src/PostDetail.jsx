import React, {Fragment, useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom"

const PostDetail = () => {
    const {id} = useParams();
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [events, setEvents] = useState([])
    const [comics, setComics] = useState([])
    const [comicsPages, setComicsPages] = useState([])
    const [eventsPages, setEventsPages] = useState([])
    const [comicsSelectedPage, setComicsSelectedPage] = useState(1)
    const [eventsSelectedPage, setEventsSelectedPage] = useState(1)

    const loadEventsPage = async(newPage, content) => {
        setEvents([])

        if(content == null)
            content = await fetch(`https://gateway.marvel.com/v1/public/characters?id=${id}&ts=1&apikey=064c3983b85fc5f50926697ba48d20ce&hash=9f12d92f680e0c5401b784be3e977492&limit=100&offset=${(newPage - 1) * 100}`);

        const eventsJson = await content.json();
        setEvents(eventsJson.data.results)

        let eventsPages = [];
        for(let i = 1; i <= Math.ceil(eventsJson.data.total / 100); i++)
            eventsPages.push(i)
        setEventsPages(eventsPages);
        setEventsSelectedPage(newPage);
    }

    const loadComicsPage = async(newPage, content) => {
        setComics([])

        if(content == null)
            content = await fetch(`https://gateway.marvel.com/v1/public/characters?id=${id}&ts=1&apikey=064c3983b85fc5f50926697ba48d20ce&hash=9f12d92f680e0c5401b784be3e977492&limit=100&offset=${(newPage - 1) * 100}`);

        const comicsJson = await content.json();
        setComics(comicsJson.data.results)

        let comicPages = [];
        for(let i = 1; i <= Math.ceil(comicsJson.data.total / 100); i++)
            comicPages.push(i)
        setComicsPages(comicPages);
        setComicsSelectedPage(newPage);
    }

    const displayCharacter = async (id) => {
        const content = await fetch(`https://gateway.marvel.com/v1/public/characters?id=${id}&ts=1&apikey=064c3983b85fc5f50926697ba48d20ce&hash=9f12d92f680e0c5401b784be3e977492`);

        const json = await content.json();
        const character = json.data.results[0];
        setTitle(character.id + " " + character.name);
        setImageURL(`${character.thumbnail.path}.${character.thumbnail.extension}?ts=1&apikey=064c3983b85fc5f50926697ba48d20ce&hash=9f12d92f680e0c5401b784be3e977492`);
        setDescription(character.description)
    }
   

    useEffect(() => {
        displayCharacter(id)
        loadEventsPage(eventsSelectedPage)
        loadComicsPage(comicsSelectedPage)
    }, []);

    return (
        <Fragment>
            <div className="max-width-70 mx-auto shadow p-3">
                <h2>{title}</h2>
                <p>{description}</p>
                <img id="image" className="img-fluid mx-auto d-block" src={imageURL} alt="Character"/>
                <h3 id="ComicsTitle" className="text-center">Comics</h3>
                <ul className="list-group">
                    {
                        comics.map((comic) =>
                            <li className="list-group-item"> {comic.title} </li>)
                    }
                </ul>
                <nav aria-label="Page navigation" className="d-flex justify-content-center mt-2">
                    <ul id="comicsNavigation" className="pagination flex-wrap">
                        {
                            comicsPages.map((page) =>
                                <li className={comicsSelectedPage === page ? "active page-item" : "page-item"}>
                                    <a href="#ComicsTitle" className="page-link" onClick={() => loadComicsPage(page)}>{page}</a>
                                </li>)
                        }
                    </ul>
                </nav>
                <h3 className="text-center">Events</h3>
                <ul id="events" className="list-group">
                    {
                        events.map((event) =>
                            <li className="list-group-item"> {event.title} </li>)
                    }
                </ul>
                <nav aria-label="Page navigation" className="d-flex justify-content-center mt-2">
                    <ul id="eventsNavigation" className="pagination flex-wrap">
                        {
                            eventsPages.map((page) =>
                                <li className={eventsSelectedPage === page ? "active page-item" : "page-item"}>
                                    <a href="#" className="page-link" onClick={() => loadEventsPage(page)}>{page}</a>
                                </li>)
                        }
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}

export default PostDetail;