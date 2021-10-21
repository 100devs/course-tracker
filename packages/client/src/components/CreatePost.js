import { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ButtonDiv from "./styled/ButtonDiv";
import Button from "./styled/Button";
import InputDiv from "./styled/InputDiv";
import Input from "./styled/Input";
import InputLabel from "./styled/InputLabel";
import TextArea from "./styled/TextArea";
import Form from "./styled/Form";
import FormHeader from "./styled/FormHeader";
import Container from "./styled/Container";
import TextLink from "./TextLink";
import { AuthContext } from "../context/AuthContext";

const backend = process.env.REACT_APP_BACKEND;
const endpoint = `${backend}/api/create-post`;
function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    body: "",
    isDraft: true,
  });

  const [redirect, setRedirect] = useState(false);

  const createPostObject = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    // we might want to go to the next page to see the published post (have to verify this)
    e.preventDefault();

    setPost({ ...post, isDraft: e.target.value });

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

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container minHeight="100vh">
        <Form onSubmit={handleSubmit}>
          <FormHeader>
            <h2>Create Post</h2>
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

          <ButtonDiv>
            <TextLink
              onClick={() => setRedirect(true)}
              text="Cancel"
              link="/"
            />
            <div className="subButtonDiv">
              <Button value={true} onClick={handleSubmit}>
                Save Draft
              </Button>
              <Button
                value={false}
                onClick={handleSubmit}
                margin="0 0 0 1.5rem"
              >
                Publish
              </Button>
            </div>
          </ButtonDiv>
        </Form>
      </Container>
    </>
  );
}
export default CreatePost;
