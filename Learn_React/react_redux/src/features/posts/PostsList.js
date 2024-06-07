import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostsAuthor from "./PostsAuthor";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((posts) => (
    <article>
      <h3>{posts.title}</h3>
      <h4>{posts.content.substring(0, 100)}</h4>
      <PostsAuthor userId={posts.userId} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
