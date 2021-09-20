import { useState, useEffect } from "react";
import axios from "axios";
import mockPost from "./mockPost";
import CollapsibleDiv from "./CollapsibleDiv";
import PostDiv from "./PostDiv";
import PostHeader from "./PostHeader";
import Button from "./Button";
import Body from "./Body";
import ButtonDiv from "./ButtonDiv";
import styled from "styled-components";
import { Eye, EyeSlash } from "phosphor-react";

// let isAdmin = true;

const Post = ({ title, body, isDraft, isAdmin }) => {
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
        <h2>{title}</h2>
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
        <Body>{body}</Body>

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
