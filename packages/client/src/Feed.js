import { useContext, useState, useEffect } from "react";
import Post from "./components/Post";
import axios from "axios";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FeedDiv from "./components/styled/FeedDiv";
import { AuthContext } from "./context/AuthContext";

const backend = process.env.REACT_APP_BACKEND;

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  const { user, isAdmin, getAdminStatus, logout } = useContext(AuthContext);

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
  }, [isAdmin, posts]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <Navbar isAdmin={isAdmin} logout={logout} />
      <FeedDiv>
        {posts.map((post, i) => {
          return (
            <Post
              title={post.title}
              body={post.body}
              isDraft={post.isDraft}
              isAdmin={isAdmin}
              id={post._id}
              key={i}
              user={user}
            />
          );
        })}
        <Footer isAdmin={isAdmin} />
      </FeedDiv>
    </>
  );
};

export default Feed;
