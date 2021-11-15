import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import Footer from "./Footer";
import axios from "axios";

function CreatePost() {
  const { user, isAdmin, getAdminStatus, logout } = useContext(AuthContext);
  const [editSubmitted, setEditSubmitted] = useState(false);

  const history = useHistory();

  const [post, setPost] = useState({
    title: "",
    body: "",
    isDraft: true,
  });

  const createPostObject = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      `/api/post/create-post`,
      { ...post, isDraft: e.target.value },
      { headers: { Authentication: user.accesstoken } }
    );
    history.goBack();
  };

  useEffect(() => {
    getAdminStatus(user.userId);
  }, []);

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
              onClick={() => history.push("/")}
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
      <Footer isAdmin={isAdmin} logout={logout} setEditSubmitted={setEditSubmitted}/>
    </>
  );
}
export default CreatePost;
