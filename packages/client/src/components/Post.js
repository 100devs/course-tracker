import { useState, useEffect, Children } from 'react';
import { useParams } from 'react-router-dom'
import mockPost from './mockuser';
//eslint-disable-next-line import/no-webpack-loader-syntax
import Content from '!babel-loader!@mdx-js/loader!../markdown/Content.mdx'

let isAdmin = true;

const Post = ({Content, children}) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleGetPost = async () => {
        // const data = await axios.get('some url')
        const post = mockPost;
        setTitle(post.title)
        setBody(post.body)
    };

    /*  */
    useEffect(() => {
        handleGetPost();
    }, [])

    // Runs when title or body are updated
    useEffect(() => {
        // run function to perform PUT request
    }, [title, body])
    
    return (
        <div>
            <header className={{}}>
                <h2 className={{}}>{title}</h2>
            </header>
            <div className={{}}>
               {children}
            </div>
            <div className={{}}>
                {isAdmin && (
                <div>
                <button className={{}} onClick={() => {}}  >Edit</button>
                <button className={{}} onClick={() => {}}  >Publish</button>
                <button className={{}} onClick={() => {}}  >Delete</button>
                </div>
                )
                }
            </div>
        </div>
    )
}

export default Post;