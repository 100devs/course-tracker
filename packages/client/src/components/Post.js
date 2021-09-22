import { useState } from "react";
import CollapsibleDiv from "./CollapsibleDiv";
import PostDiv from "./PostDiv";
import PostHeader from "./PostHeader";
import Button from "./Button";
import Body from "./Body";
import ButtonDiv from "./ButtonDiv";
import { Eye, EyeSlash } from "phosphor-react";

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
    const { name, value } = e.target;
    setChangeObj({
      ...changeObj,
      [name]: value,
    });
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
      <PostHeader onClick={() => !isEdit && handleCollapse()}>
        {isEdit ? (
          <input
            htmlFor="title"
            label="Title"
            type="text"
            name="title"
            placeholder={post.title}
            onChange={(e) => createChangeObject(e)}
          />
        ) : (
          <h2>{title}</h2>
        )}
        {isAdmin && (
          <>
            {isDraft ? (
              <EyeSlash aria-label="" size={48} color="grey" />
            ) : (
              <Eye aria-label="" size={48} color="green" />
            )}
          </>
        )}
      </PostHeader>

      <CollapsibleDiv hidden={hiddenState}>
        {isEdit ? (
          <textarea
            htmlFor="body"
            label="Body"
            type="text"
            name="body"
            placeholder={post.body}
            onChange={(e) => createChangeObject(e)}
          ></textarea>
        ) : (
          <Body>{body}</Body>
        )}

        {isAdmin && (
          <ButtonDiv>
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
