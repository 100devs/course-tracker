import { useState, useEffect } from "react";
import mockPost from "./mockuser";
import CollapsibleDiv from "./CollapsibleDiv";
import styled from "styled-components";
import { Eye, EyeSlash } from "phosphor-react";

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
`;
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
const PostDiv = styled.div`
  width: 100%;
  border: solid red 2px;
  padding: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
`;

/* 
{({ hidden }) => {
    if (hidden) {
        return 
        border: dashed red 2px;
        overflow: hidden;
        transform: scaleY(0);
        transition: transform 3000ms ease-in-out 2000ms;
        webkit-transition: transform 3000ms ease-in-out 2000ms;
    }
}}
*/
// const CollapsibleChildren = styled.div`
// {({ hidden }) => {
//     if(hidden) {
//         return
//         opacity: 0;
//         transition: opacity 100ms ease-in-out;

//     }
//     opacity: 1;
//     transition: opacity 150ms ease-in-out 150ms;
// }}
// `;

let isAdmin = true;

const Post = ({ children }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [hidden, setHidden] = useState(true);

  // const styles = {
  //     show:{
  //         backgroundColor: 'aliceblue',
  //         maxHeight: '7500px',
  //         position: 'static',
  //         overflow: 'hidden',
  //         webkitTransition: `max-height 2000ms`,
  //         transition:`max-height 2000ms`
  //     },
  //     hide:{
  //         maxHeight: '0rem',
  //         overflow: 'hidden',
  //         webkitTransition: `max-height 3000ms ease-in-out 2000ms`,
  //         transition:`max-height 3000ms ease-in-out 2000ms`
  //     },
  //     showChildren: {
  //         opacity: 1,
  //         transition:`opacity 150ms ease-in-out 150ms`,
  //     },
  //     hideChildren: {
  //         opacity: 0,
  //         transition:`opacity 100ms ease-in-out`
  //     }
  // }

  const handleGetPost = async () => {
    // const data = await axios.get('some url')
    const post = mockPost;
    setTitle(post.title);
    setBody(post.body);
  };

  const handleCollapse = () => {
    setHidden((prev) => !prev);
  };

  useEffect(() => {
    handleGetPost();
  }, []);

  // Runs when title or body are updated
  useEffect(() => {
    // run function to perform PUT request
  }, [title, body]);

  return (
    <PostDiv>
      <PostHeading>
        <h2>{title}</h2>
        {hidden ? (
          <Eye aria-label="" size={48} color="green" onClick={handleCollapse} />
        ) : (
          <EyeSlash
            aria-label=""
            size={48}
            color="red"
            onClick={handleCollapse}
          />
        )}
      </PostHeading>

      <CollapsibleDiv hidden={hidden}>
        <Body>{children}</Body>

        <div>
          {isAdmin && (
            <ButtonDiv>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </ButtonDiv>
          )}
        </div>
      </CollapsibleDiv>
    </PostDiv>
  );
};

export default Post;
