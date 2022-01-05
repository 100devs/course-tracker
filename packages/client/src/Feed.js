import { useContext, useState, useEffect } from "react";
import Post from "./components/Post";
import axios from "axios";
import FeedDiv from "./components/styled/FeedDiv";
import { AuthContext } from "./context/AuthContext";

const backend = process.env.REACT_APP_BACKEND;

const Feed = () => {
  const { user, isAdmin, getAdminStatus } = useContext(AuthContext);
  const [isEdit, setIsEdit] = useState({})
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  const [isNewUpdates, setIsNewUpdates] = useState(false);

  const populateFeed = async () => {
    const adminCheck = await getAdminStatus(user.userId);
    const res = await axios.get(
      `${backend}api/get/${adminCheck ? "all-posts" : "published"}`
    );
    setPosts(res.data.posts);
    setLoading(false);
    const isEditMap = {}
    for(const post of res.data.posts){
      isEditMap[post._id] = false
    }
    setIsEdit(isEditMap)
  };

  useEffect(() => {
    populateFeed();
  }, [isNewUpdates, user.userId]);

  return (
    <>
      <FeedDiv>
        {!loading &&
          posts.map((post) => {
            return (
              <Post
                title={post.title}
                body={post.body}
                isDraft={post.isDraft}
                isAdmin={isAdmin}
                id={post._id}
                key={post._id}
                user={user}
                setIsNewUpdates={setIsNewUpdates}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
              />
            );
          })}
      </FeedDiv>
    </>
  );
};

export default Feed;
