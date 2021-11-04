import { useContext, useState, useEffect } from "react";
import Post from "./components/Post";
import axios from "axios";
import Footer from "./components/Footer";
import FeedDiv from "./components/styled/FeedDiv";
import { AuthContext } from "./context/AuthContext";

const backend = process.env.REACT_APP_BACKEND;

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  const { user, isAdmin, getAdminStatus } = useContext(AuthContext);

  const populateFeed = async (adminState) => {
    const res = await axios.get(
      `${backend}api/get/${adminState ? "all-posts" : "published"}`
    );
    setPosts(res.data.posts);
    setLoading(false);
  };

  useEffect(() => {
    getAdminStatus(user.userId);
    populateFeed(isAdmin);
  }, [posts]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
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
          />
        );
      })}
      <Footer isAdmin={isAdmin} />
    </FeedDiv>
  );
};

export default Feed;
