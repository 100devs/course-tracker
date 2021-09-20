import { useState } from "react";
import ButtonDiv from "../../../packages/client/src/components/ButtonDiv";
import Button from "../../../packages/client/src/components/Button";
import InputDiv from "../../../packages/client/src/components/InputDiv";
import Input from "../../../packages/client/src/components/Input";
import InputLabel from "../../../packages/client/src/components/InputLabel";
import TextArea from "./components/TextArea";
import Checkbox from "../../../packages/client/src/components/Checkbox";

// Data looks like this (for backend)
// console.log({
//     title:'string',
//     body:'string',
//     isDraft:boolean
// })
const backend = process.env.REACT_APP_BACKEND;
const endpoint = `${backend}/api/createPost`;
function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isDraft, setIsDraft] = useState(true);

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
        body: JSON.stringify({
          title,
          body,
          isDraft,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      {/* Title Section */}
      <InputDiv>
        <InputLabel htmlFor="title">Title</InputLabel>
        <Input
          name="title"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputDiv>

      {/* Body Text Section */}
      <InputDiv>
        <InputLabel htmlFor="body">Body of Post</InputLabel>
        <TextArea
          name="body"
          placeholder="Body Info"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </InputDiv>

      {/* Publish and Submit Section */}
      <InputDiv flexDirection="row" justify="center" align="center">
        <Checkbox
          name="isDraft"
          checked={isDraft}
          value={isDraft}
          onChange={(e) => setIsDraft(e.currentTarget.checked)}
        />
        <InputLabel htmlFor="isDraft" fontSize="normal">
          Draft?
        </InputLabel>
      </InputDiv>

      {/* Change button element to component once avail. */}
      <ButtonDiv>
        <Button>Submit</Button>
        <Button>Cancel</Button>
      </ButtonDiv>
      {/* <button className="btn" type="submit">
          Submit
        </button> */}
    </form>
  );
}

export default CreatePost;
