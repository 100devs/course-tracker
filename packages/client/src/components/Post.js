import { useState } from "react";
import CollapsibleDiv from "./styled/CollapsibleDiv";
import PostDiv from "./styled/PostDiv";
import PostHeader from "./styled/PostHeader";
import Button from "./styled/Button";
import Body from "./styled/Body";
import ButtonDiv from "./styled/ButtonDiv";
import { Eye, EyeSlash } from "phosphor-react";
import Form from "./styled/Form";
import FormHeader from "./styled/FormHeader";
import InputDiv from "./styled/InputDiv";
import Input from "./styled/Input";
import InputLabel from "./styled/InputLabel";
import TextArea from "./styled/TextArea";
import Container from "./styled/Container";
import TextLink from "./TextLink";
import axios from "axios";

const Post = ({ title, body, isDraft, isAdmin, id, user }) => {
  const [hiddenState, setHiddenState] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [post, updatePost] = useState({
    title: title,
    body: body,
    isDraft: isDraft,
    isAdmin: isAdmin,
    id: id,
  });

  const [changeObj, setChangeObj] = useState({});

  const createChangeObject = (e) => {
    const { name, value } = e.target;
    setChangeObj({ ...changeObj, [name]: value });
    updatePost({ ...changeObj, [name]: value });
  };

  const sendChangeObj = async (e) => {
    e.preventDefault();
    await axios.put(
      `api/post/edit-post/${id}`,
      { ...changeObj, isDraft: e.target.value },
      { headers: { Authentication: user.accesstoken } }
    );
    setChangeObj({});
    setIsEdit((prevState) => !prevState);
  };

  const deletePost = async (e) => {
    e.preventDefault();
    await axios.delete(`api/post/delete-post/${id}`, {
      headers: { Authentication: user.accesstoken },
    });
  };

  const handleCollapse = () => {
    setHiddenState((prev) => !prev);
  };
  if (isEdit) {
    // all the stuff from create post form
    return (
      <Container height="100vh">
        <Form>
          <FormHeader justify="space-between">
            {/* phantom eye for correct eye placement ... yikes! */}
            {isDraft ? (
              <EyeSlash aria-label="" size={48} color="none" />
            ) : (
              <Eye aria-label="" size={48} color="none" />
            )}

            <h2>Edit Post</h2>

            {isDraft ? (
              <EyeSlash aria-label="" size={48} color="grey" />
            ) : (
              <Eye aria-label="" size={48} color="green" />
            )}
          </FormHeader>
          <InputDiv>
            <InputLabel htmlFor="title">Title</InputLabel>
            <Input
              name="title"
              value={post.title}
              onChange={(e) => createChangeObject(e)}
            />
          </InputDiv>

          <InputDiv>
            <InputLabel htmlFor="body">Body of Post</InputLabel>
            <TextArea
              name="body"
              value={post.body}
              onChange={(e) => createChangeObject(e)}
            />
          </InputDiv>

          {/* Publish and Submit Section */}
          <ButtonDiv>
            <TextLink
              onClick={() => setIsEdit((prevState) => !prevState)}
              text="Cancel"
              link="/"
            />

            <div className="subButtonDiv">
              <Button value={true} onClick={(e) => sendChangeObj(e)}>
                Save Draft
              </Button>
              <Button
                value={false}
                onClick={(e) => sendChangeObj(e)}
                margin="0 0 0 1.5rem"
              >
                Publish
              </Button>
            </div>
          </ButtonDiv>
        </Form>
      </Container>
    );
  } else {
    return (
      <Container padding="1.5rem 1.5rem 0 1.5rem">
        <PostDiv>
          <PostHeader onClick={() => !isEdit && handleCollapse()} edit={isEdit}>
            <h2>{title}</h2>
            {isAdmin && isDraft ? (
              <EyeSlash aria-label="" size={48} color="grey" />
            ) : isAdmin ? (
              <Eye aria-label="" size={48} color="green" />
            ) : (
              <></>
            )}
          </PostHeader>

          <CollapsibleDiv hidden={hiddenState} edit={isEdit}>
            <Body>{body}</Body>

            {isAdmin ? (
              <ButtonDiv justify="flex-end">
                <Button onClick={(e) => deletePost(e)}>Delete</Button>
                <Button
                  onClick={() => setIsEdit((prevState) => !prevState)}
                  margin="0 0 0 1.5rem"
                >
                  Edit
                </Button>
              </ButtonDiv>
            ) : (
              <> </>
            )}
          </CollapsibleDiv>
        </PostDiv>
      </Container>
    );
  }
};

export default Post;
