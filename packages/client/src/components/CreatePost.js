import { useState } from "react";
import ButtonDiv from "./ButtonDiv";
import Button from "./Button";
import InputDiv from "./InputDiv";
import Input from "./Input";
import InputLabel from "./InputLabel";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";
import Form from "./Form";
import FormHeader from "./FormHeader";

// Data looks like this (for backend)
// console.log({
//     title:'string',
//     body:'string',
//     isDraft:boolean
// })
const backend = process.env.REACT_APP_BACKEND;
const endpoint = `${backend}/api/createPost`;
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
  );
}

export default CreatePost;
