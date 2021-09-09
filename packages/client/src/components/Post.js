import { useState, useEffect } from 'react';
import mockPost from './mockuser';
import styled from 'styled-components';
import { Eye, EyeSlash } from 'phosphor-react'

const Button = styled.button`
background-color: black;
border: none;
color: white;
width: 12rem;
padding: 1rem 0;
&:hover {
    background-color: #e5e5e5;
    color: black;
}
font-size: 1.875rem;
`;

const ButtonDiv = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 1.5rem;
`
const PostHeading = styled.div`
text-align: left;
background-color: #e5e5e5;
padding: 1rem 3rem;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 1000;
h2 {
    font-size: 3rem;    
}
`;

const Body = styled.section`
    padding: 4em;
    color: black;
    width: 100%;
`;

const PostContainer = styled.div`
width: 100%;
height: 100vh;
padding: 1.5rem;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-content: center;
position: relative;
`;

let isAdmin = true;

const Post = ({children}) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [isCollapsed, setIsCollapsed] = useState(false)

    const styles = {
        show:{
            // backgroundColor: `aliceblue`,
            transform: 'scaleY(1)',
            transformOrigin: 'top',
            // visibility: `visible`,
            position: 'static',
            overflow: 'hidden',
            webkitTransition: `transform 200ms`,
            transition:`transform 200ms`
        },
        hide:{
            transform: 'scaleY(0)',
            transformOrigin: 'top',
            // height: '0%',
            // visibility: `hidden`,
            // position: `absolute`,
            // overflowX: `hidden`,
            webkitTransition: `transform 300ms ease-in-out 200ms`,
            transition:`transform 300ms ease-in-out 200ms`
        },
        showChildren: {
            opacity: 1,
            transition:`opacity 150ms ease-in-out 150ms`,
        },
        hideChildren: {
            opacity: 0,
            transition:`opacity 100ms ease-in-out`            
        }
    }

    const handleGetPost = async () => {
        // const data = await axios.get('some url')
        const post = mockPost;
        setTitle(post.title)
        setBody(post.body)
    };

    const handleCollapse = () => {
        setIsCollapsed(prev => !prev);
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
        <PostContainer>
            <PostHeading>
                <h2>{title}</h2>
                {isCollapsed ? <Eye aria-label="" size={48} color="green" onClick={handleCollapse} /> : <EyeSlash aria-label="" size={48} color="red"  onClick={handleCollapse} />}
            </PostHeading>
            <div style={isCollapsed ? styles.hide : styles.show}>
                <Body style={isCollapsed ? styles.hideChildren : styles.showChildren}>
                { children }
                </Body>
                <div style={isCollapsed ? styles.hideChildren : styles.showChildren}>
                    {isAdmin && (
                    <ButtonDiv>
                        <Button>Edit</Button>
                        <Button>Delete</Button>   
                    </ButtonDiv>
                    ) }
                </div>
            </div>
            
        </PostContainer>
    )
}

export default Post;

