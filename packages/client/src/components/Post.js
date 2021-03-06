import { useState } from "react";
import CollapsibleDiv from "./styled/CollapsibleDiv";
import PostDiv from "./styled/PostDiv";
import PostHeader from "./styled/PostHeader";
import Button from "./styled/Button";
import ButtonDiv from "./styled/ButtonDiv";
import { Eye, EyeSlash } from "phosphor-react";
import EditingForm from "./EditingForm";
import Container from "./styled/Container";
import axios from "axios";
import MarkdownParser from "./MarkdownParser";

const Post = ({
  title,
  body,
  isDraft,
  isAdmin,
  id,
  user,
  setIsNewUpdates,
  isEdit,
  setIsEdit
}) => {
  const [hiddenState, setHiddenState] = useState(true);
  const [post, updatePost] = useState({
    title,
    body,
    isDraft,
    isAdmin,
    id,
  });

  const [changeObj, setChangeObj] = useState({});

  const createChangeObj = (e) => {
    const { name, value } = e.target;
    setChangeObj((prevChangeObj) => ({ ...prevChangeObj, [name]: value }));
    updatePost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const sendChangeObj = async (e) => {
    e.preventDefault();
    setIsEdit((prevState) => {
      return {...prevState, id: false}
    });
    await axios.put(
      `api/post/edit-post/${id}`,
      { ...changeObj, isDraft: e.target.value },
      { headers: { Authentication: user.accesstoken } }
    );
    setChangeObj({});
    setIsNewUpdates((prev) => !prev);
  };

  const deletePost = async (e) => {
    e.preventDefault();
    await axios.delete(`api/post/delete-post/${id}`, {
      headers: { Authentication: user.accesstoken },
    });
    setIsNewUpdates((prev) => !prev);
  };

  const handleCollapse = () => {
    setHiddenState((prev) => !prev);
  };

  const cancel = async () => {
    setChangeObj({});
    setIsNewUpdates((prev) => !prev);
    updatePost({
      title,
      body,
      isDraft,
      isAdmin,
      id,
      user,
      setIsNewUpdates,
    });
    setIsEdit((prevState) => {
      return {...prevState, [id]: false}
    });
  };
  return (
    <Container padding="1.5rem 1.5rem 0 1.5rem">
      {isEdit[id] ? (
        <EditingForm
          isDraft={isDraft}
          cancel={cancel}
          updatePost={updatePost}
          createChangeObj={createChangeObj}
          sendChangeObj={sendChangeObj}
          post={post}
        />
      ) : (
        <PostDiv>
          <PostHeader onClick={() => !isEdit[id] && handleCollapse()} edit={isEdit[id]}>
            <h2>{title}</h2>
            {isAdmin &&
              (isDraft ? (
                <EyeSlash aria-label="" />
              ) : (
                <Eye aria-label="" className="published" />
              ))}
          </PostHeader>
          <CollapsibleDiv hidden={hiddenState} edit={isEdit[id]}>
            <MarkdownParser markdown={body} />
            {isAdmin && (
              <ButtonDiv justify="flex-end">
                <Button onClick={(e) => deletePost(e)}>Delete</Button>
                <Button
                  onClick={() =>  setIsEdit((prevState) => {
                    return {...prevState, [id]: true}
                  })}
                  margin="0 0 0 1.5rem"
                >
                  Edit
                </Button>
              </ButtonDiv>
            )}
          </CollapsibleDiv>
        </PostDiv>
      )}
    </Container>
  );
};

export default Post;
