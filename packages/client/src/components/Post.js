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
  setEditSubmitted,
}) => {
  const [hiddenState, setHiddenState] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
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
    setIsEdit((prevState) => !prevState);
    await axios.put(
      `api/post/edit-post/${id}`,
      { ...changeObj, isDraft: e.target.value },
      { headers: { Authentication: user.accesstoken } }
    );
    setChangeObj({});
    setEditSubmitted((prev) => !prev);
  };

  const deletePost = async (e) => {
    e.preventDefault();
    await axios.delete(`api/post/delete-post/${id}`, {
      headers: { Authentication: user.accesstoken },
    });
    setEditSubmitted((prev) => !prev);
  };

  const handleCollapse = () => {
    setHiddenState((prev) => !prev);
  };

  const cancel = async () => {
    setChangeObj({});
    setEditSubmitted((prev) => !prev);
    updatePost({
      title,
      body,
      isDraft,
      isAdmin,
      id,
      user,
      setEditSubmitted,
    });
    setIsEdit((prevState) => !prevState);
  };

  return (
    <Container padding="1.5rem 1.5rem 0 1.5rem">
      {isEdit ? (
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
          <PostHeader onClick={() => !isEdit && handleCollapse()} edit={isEdit}>
            <h2>{title}</h2>
            {isAdmin &&
              (isDraft ? (
                <EyeSlash aria-label="" />
              ) : (
                <Eye aria-label="" className="published" />
              ))}
          </PostHeader>
          <CollapsibleDiv hidden={hiddenState} edit={isEdit}>
            <MarkdownParser markdown={body} />
            {isAdmin && (
              <ButtonDiv justify="flex-end">
                <Button onClick={(e) => deletePost(e)}>Delete</Button>
                <Button
                  onClick={() => setIsEdit((prevState) => !prevState)}
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
