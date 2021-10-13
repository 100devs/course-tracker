import { useContext, useState, useEffect } from "react";
import Post from "./components/Post";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "./context/AuthContext";

const backend = process.env.REACT_APP_BACKEND;

const Feed = () => {
  const FeedDiv = styled.div``;

  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState();
  const [posts, setPosts] = useState();

  const { user } = useContext(AuthContext);

  const getAdminStatus = async () => {
    const res = await axios.get(
      `${backend}api/get/admin-status/${user.userId}`
    );
    setIsAdmin(res.data.isAdmin);
  };

  const populateFeed = async (adminState) => {
    const res = await axios.get(
      `${backend}api/get/${adminState ? "all-posts" : "published"}`
    );
    setPosts(res.data.posts);
    setLoading(false);
  };

  useEffect(() => {
    user.userId ? getAdminStatus() : setIsAdmin(false);
    populateFeed(isAdmin);
  }, [isAdmin]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
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
          />
        );
      })}
    </FeedDiv>
  );
};

export default Feed;
