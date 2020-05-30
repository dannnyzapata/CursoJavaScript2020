import React, {Fragment, useEffect, useState} from 'react'
import {Link} from "react-router-dom"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [pages, setPages] = useState([])
    const [selectedPage, setSelectedPage] = useState(1)

    const getPosts = async (page) => {
        setSelectedPage(page);
        setPosts([]);
        const json = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=064c3983b85fc5f50926697ba48d20ce&hash=9f12d92f680e0c5401b784be3e977492&limit=100&offset=${(page - 1) * 100}`);
        const posts = await json.json();
        setPosts(posts.data.results);
        const pages = [];
        for(let i = 1; i <= Math.ceil(posts.data.total / 100); i++)
            pages.push(i)
        setPages(pages);
    }

    useEffect(() => {
        getPosts(selectedPage)
    }, []);

    return (
        <Fragment>
            <ul className="list-group">
                {
                    posts.map((post) => 
                        <li className="list-group-item">
                            <Link to={"posts/" + post.id}>{post.id} {post.name} </Link>
                            <p> {post.description}</p>
                        </li>
                    )
                }
            </ul>
            <nav aria-label="Page navigation" className="d-flex justify-content-center mt-2">
                <ul className="pagination flex-wrap">
                    {
                        pages.map((page) =>
                            <li className={selectedPage === page ? "active page-item" : "page-item"}>
                                <a href="#" className="page-link" onClick={() => getPosts(page)}>{page}</a>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </Fragment>
    )
}

export default Posts;