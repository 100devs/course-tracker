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
import Checkbox from "./styled/Checkbox";
import Container from "./styled/Container";

const Post = ({ title, body, isDraft, isAdmin, id }) => {
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

  const createChangeObject = (e) => {
    console.log(changeObj);
    // e.currentTarget.checked

    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? setChangeObj({ ...changeObj, [name]: checked })
      : setChangeObj({ ...changeObj, [name]: value });
    type === "checkbox"
      ? updatePost({ ...changeObj, [name]: checked })
      : updatePost({ ...changeObj, [name]: value });
  };

  const sendChangeObj = async () => {
    // make call to api/post/editPost/:id and pass in the updated object
    // ex
    // const res = await axios.put('api/post/editPost/id', changeObj)
    // use updatePost to update ... the post ?? Will this automagically update via the feed useEffect and it's dependencies ?
    // updatePost(res.data)
    // clear out changeObj to start your next edit with a fresh change object
    // setChangeObj({});
    // display the post
    setIsEdit((prevState) => !prevState);
  };

  const handleCollapse = () => {
    setHiddenState((prev) => !prev);
  };
  if (isEdit) {
    // all the stuff from create post form
    return (
      <Container height="100vh">
        <Form padding="2rem 18% 5rem">
          <FormHeader>
            <h2>Edit: {post.title}</h2>
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

          <InputDiv flexDirection="row" justify="center" align="center">
            <Checkbox
              name="isDraft"
              checked={post.isDraft}
              onChange={(e) => createChangeObject(e)}
            />
            <span>Draft?</span>
          </InputDiv>

          <ButtonDiv>
            <Button onClick={(id) => sendChangeObj(id)}>Save</Button>
            {/* <Button fontSize="1.5rem" size="11rem">
              Cancel
            </Button> */}
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
            {/* look into logic for eye; should be isAdmin && published? */}
            {isAdmin ? <Eye aria-label="" size={48} color="green" /> : <></>}
          </PostHeader>

          <CollapsibleDiv hidden={hiddenState} edit={isEdit}>
            <Body>{body}</Body>

            {isAdmin && (
              <ButtonDiv justify="space-evenly">
                <Button onClick={() => setIsEdit((prevState) => !prevState)}>
                  Edit
                </Button>
                <Button>Delete</Button>
              </ButtonDiv>
            )}
          </CollapsibleDiv>
        </PostDiv>
      </Container>
    );
  }
};

export default Post;
