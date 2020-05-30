import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

const PostsComponent = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        obtenerPosts();
    }, []);

    const obtenerPosts = async () =>{
        const letra = String.fromCharCode((Math.floor(Math.random() * (122 - 97)) + 97).toString());
        const datos = await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${letra}&limit=100&ts=1&apikey=4139f54900658138dc2740df3f8c8b58&hash=6e791c7487549bcaf009a7668b4dd0f6`)
        const listadoPosts = await datos.json();
        setPosts(listadoPosts.data.results);
    }
    return (
        <div>
            <h1>Marvel Superheroes</h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => (
                            <tr>
                                <td>
                                    <Link to={`/posts/${post.id}`}>{post.id}</Link>
                                </td>
                                <td>
                                    {post.name}
                                </td>
                                <td>
                                    {post.description}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PostsComponent
