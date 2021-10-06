import { useState } from "react";
import ButtonDiv from "./styled/ButtonDiv";
import Button from "./styled/Button";
import InputDiv from "./styled/InputDiv";
import Input from "./styled/Input";
import InputLabel from "./styled/InputLabel";
import TextArea from "./styled/TextArea";
import Checkbox from "./styled/Checkbox";
import Form from "./styled/Form";
import FormHeader from "./styled/FormHeader";
import Container from "./styled/Container";

// Data looks like this (for backend)
// console.log({
//     title:'string',
//     body:'string',
//     isDraft:boolean
// })
const backend = process.env.REACT_APP_BACKEND;
const endpoint = `${backend}/api/create-post`;
function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    body: "",
    isDraft: true,
  });

  const createPostObject = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? setPost({ ...post, [name]: checked })
      : setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    // we might want to go to the next page to see the published post (have to verify this)
    e.preventDefault();
    // Question: Do we need form validation here for Leon?
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ post }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container height="100vh">
      <Form padding="2rem 18% 5rem" onSubmit={handleSubmit}>
        <FormHeader>
          <h2>Add a New Post</h2>
        </FormHeader>
        {/* Title Section */}
        <InputDiv>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            name="title"
            placeholder="Post Title"
            value={post.title}
            onChange={(e) => createPostObject(e)}
          />
        </InputDiv>

        {/* Body Text Section */}
        <InputDiv>
          <InputLabel htmlFor="body">Body of Post</InputLabel>
          <TextArea
            name="body"
            placeholder="Body Info"
            value={post.body}
            onChange={(e) => createPostObject(e)}
          />
        </InputDiv>

        {/* Publish and Submit Section */}
        <InputDiv flexDirection="row" justify="center" align="center">
          <Checkbox
            name="isDraft"
            checked={post.isDraft}
            onChange={(e) => createPostObject(e)}
          />
          <span>Draft?</span>
        </InputDiv>

        {/* Change button element to component once avail. */}
        <ButtonDiv>
          <Button fontSize="1.5rem" size="11rem">
            Submit
          </Button>
          <Button fontSize="1.5rem" size="11rem">
            Cancel
          </Button>
        </ButtonDiv>
      </Form>
    </Container>
  );
}

export default CreatePost;
