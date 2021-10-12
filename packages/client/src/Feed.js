import { useState, useEffect } from "react";
import Post from "./components/Post";
import styled from "styled-components";
import Footer from "./components/Footer";

const Feed = () => {
  const FeedDiv = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const FeedContainer = styled.div`
    padding-bottom: 1.5rem;
  `;
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
    <FeedDiv>
      <FeedContainer>
        {/* posts.map(post => {
            
            render a post component using the data from the current post in the loop
            
            example:

              return
              <Post
                  title = post.title
                  body = post.body
                  isDraft = post.isDraft 
                  isAdmin = isAdmin
                  id = post._id
              />
            }
              
          }) */}

        {/*test components*/}
        <Post
          title={`Week1`}
          body={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`}
          isAdmin={isAdmin}
          isDraft={false}
          id={1}
        />
        <Post
          title={`Week2`}
          body={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          `}
          isAdmin={isAdmin}
          isDraft={false}
          id={2}
        />
        <Post
          title={`Week3`}
          body={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
          isAdmin={isAdmin}
          isDraft={true}
          id={3}
        />
        <Post
          title={`Week4`}
          body={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
          isAdmin={isAdmin}
          isDraft={true}
          id={4}
        />
      </FeedContainer>
      <Footer isAdmin={isAdmin} />
    </FeedDiv>
  );
};

export default Feed;
