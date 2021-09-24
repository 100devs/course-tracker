import { useState, useEffect } from "react";
import axios from "axios";
import mockPost from "./mockPost";
import CollapsibleDiv from "./styled/CollapsibleDiv";
import PostDiv from "./styled/PostDiv";
import PostHeader from "./styled/PostHeader";
import Button from "./styled/Button";
import Body from "./styled/Body";
import ButtonDiv from "./styled/ButtonDiv";
import styled from "styled-components";
import { Eye, EyeSlash } from "phosphor-react";

let isAdmin = true;

const Post = ({ children }) => {
  const [post, setPost] = useState({});
  const [hiddenState, setHiddenState] = useState(true);

  const handleGetPost = async () => {
    // const data = await axios.get('some url')
    const post = mockPost;
    setPost(post);
  };

  const handleCollapse = () => {
    setHiddenState((prev) => !prev);
  };

  const editPost = async () => {
    try {
      await axios.post(`api/editPost/${post._id}`).then((data) => {
        setPost(data.post);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Runs when title or body are updated
  useEffect(() => {
    handleGetPost();
  }, [post.title, post.body, post.isDraft]);

  return (
    <PostDiv>
      <PostHeader>
        <h2>{post.title}</h2>
        {hiddenState ? (
          <Eye aria-label="" size={48} color="green" onClick={handleCollapse} />
        ) : (
          <EyeSlash
            aria-label=""
            size={48}
            color="red"
            onClick={handleCollapse}
          />
        )}
      </PostHeader>

      <CollapsibleDiv hidden={hiddenState}>
        <Body>{children}</Body>

        {isAdmin && (
          <ButtonDiv>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </ButtonDiv>
        )}
      </CollapsibleDiv>
    </PostDiv>
  );
};

export default Post;
