import { useState, useEffect } from "react";
import Post from "./components/Post";

const Feed = () => {
  //   Import logged in user context information and use it set a state called is Admin
  let isAdmin = true;

  //   creating loading block to await the posts variable to finish being populated
  //   const [loading, setLoading] = useState(true);

  //   const [posts, setPosts] = useState();

  //   const populateFeed = async () => {
  //        make a call to the api that responds with all posts that have been published and save them to a state using setPosts
  //        setPosts(data from response)
  //        setLoading(prev => !prev)
  // }

  useEffect(() => {
    // populateFeed()
  }, []);

  //   if (loading) {
  //     return <div>loading...</div>;
  //   }
  return (
    <div>
      {/* posts.map(post => {
          
          render a post component using the data from the current post in the loop
          
          example:

            return
            <Post
                title = post.title
                body = post.body
                isAdmin = isAdmin
            />
          }
            
        }) */}

      {/*test components*/}
      <Post title={`Week1`} body={`testing1`} isAdmin={isAdmin} />
      <Post title={`Week2`} body={`testing2`} isAdmin={isAdmin} />
      <Post title={`Week3`} body={`testing3`} isAdmin={isAdmin} />
    </div>
  );
};

export default Feed;
