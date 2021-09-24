import { useState } from "react";
import CollapsibleDiv from "./CollapsibleDiv";
import PostDiv from "./PostDiv";
import PostHeader from "./PostHeader";
import Button from "./Button";
import Body from "./Body";
import ButtonDiv from "./ButtonDiv";
import { Eye, EyeSlash } from "phosphor-react";
import InputDiv from "./InputDiv";
import Input from "./Input";
import InputLabel from "./InputLabel";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";

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

  return (
    <PostDiv>
      <PostHeader onClick={() => !isEdit && handleCollapse()} edit={isEdit}>
        {isEdit ? (
          <InputDiv>
            <InputLabel htmlFor="title">Title</InputLabel>
            <Input
              name="title"
              value={post.title}
              onChange={(e) => createChangeObject(e)}
            />
          </InputDiv>
        ) : (
          <h2>{title}</h2>
        )}
        {isAdmin && !isEdit ? (
          <>
            {isDraft ? (
              <EyeSlash aria-label="" size={48} color="grey" />
            ) : (
              <Eye aria-label="" size={48} color="green" />
            )}
          </>
        ) : (
          <></>
        )}
      </PostHeader>

      <CollapsibleDiv hidden={hiddenState} edit={isEdit}>
        {isEdit ? (
          <>
            <InputDiv>
              <InputLabel htmlFor="body">Body of Post</InputLabel>
              <TextArea
                name="body"
                value={post.body}
                onChange={(e) => createChangeObject(e)}
              />
            </InputDiv>
            <InputDiv flexDirection="row" align="center">
              <Checkbox
                name="isDraft"
                checked={post.isDraft}
                onChange={(e) => createChangeObject(e)}
              />
              <span>Draft?</span>
            </InputDiv>
          </>
        ) : (
          <Body>{body}</Body>
        )}

        {isAdmin && (
          <ButtonDiv justify={isEdit ? "flex-end" : "space-evenly"}>
            {isEdit ? (
              <Button onClick={(id) => sendChangeObj(id)}>Save</Button>
            ) : (
              <>
                <Button onClick={() => setIsEdit((prevState) => !prevState)}>
                  Edit
                </Button>
                <Button>Delete</Button>
              </>
            )}
          </ButtonDiv>
        )}
      </CollapsibleDiv>
    </PostDiv>
  );
};

export default Post;
