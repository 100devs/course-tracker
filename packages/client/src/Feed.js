import { useContext, useState, useEffect } from "react";
import Post from "./components/Post";
import axios from "axios";
import FeedDiv from "./components/styled/FeedDiv";
import { AuthContext } from "./context/AuthContext";

const backend = process.env.REACT_APP_BACKEND;

const Feed = () => {
  const { user, isAdmin, getAdminStatus } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  const [editSubmitted, setEditSubmitted] = useState(false);

  const populateFeed = async () => {
    const adminCheck = await getAdminStatus(user.userId);
    const res = await axios.get(
      `${backend}api/get/${adminCheck ? "all-posts" : "published"}`
    );
    setPosts(res.data.posts);
    setLoading(false);
  };

  useEffect(() => {
    populateFeed();
  }, [editSubmitted, user.userId]);

  if (loading) {
    return <></>;
  }
  return (
    <>
      <FeedDiv>
        {posts.map((post) => {
          return (
            <Post
              title={post.title}
              body={post.body}
              isDraft={post.isDraft}
              isAdmin={isAdmin}
              id={post._id}
              key={post._id}
              user={user}
              setEditSubmitted={setEditSubmitted}
            />
          );
        })}
      </FeedDiv>
    </>
  );
};

export default Feed;
