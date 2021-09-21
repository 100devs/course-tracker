import { useState} from "react";
import CollapsibleDiv from "./CollapsibleDiv";
import PostDiv from "./PostDiv";
import PostHeader from "./PostHeader";
import Button from "./Button";
import Body from "./Body";
import ButtonDiv from "./ButtonDiv";
import { Eye, EyeSlash } from "phosphor-react";


const Post = ({ title, body, isDraft, isAdmin, id }) => {
  const [hiddenState, setHiddenState] = useState(true);

  const handleCollapse = () => {
    setHiddenState((prev) => !prev);
  };

  const editPost = async () => {

    // takes in the Id of the post and uses it to call the editPost Endpoint
    console.log(`http://localhost:5000/api/post/editPost/${id}`)
  };

  return (
    <PostDiv>
      <PostHeader onClick={handleCollapse}>
        <h2>{title}</h2>
        {isAdmin &&
          <>
            {isDraft ? 
              (<EyeSlash aria-label="" size={48} color="grey" />) 
              : 
              (<Eye aria-label="" size={48} color="green"/>)
            }
          </> 
        }
      </PostHeader>

      <CollapsibleDiv hidden={hiddenState}>
        <Body>{body}</Body>

        {isAdmin && (
          <ButtonDiv>
            <Button onClick={(id) => editPost(id)}>Edit</Button>
            <Button>Delete</Button>
          </ButtonDiv>
        )}
      </CollapsibleDiv>
    </PostDiv>
  );
};

export default Post;
