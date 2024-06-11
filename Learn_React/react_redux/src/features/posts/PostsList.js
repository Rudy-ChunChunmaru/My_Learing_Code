import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostsAuthor from "./PostsAuthor";
import TimeAgo from "./TimeAgo";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedposts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedposts.map((posts) => (
    <article>
      <h3>{posts.title}</h3>
      <h4>{posts.content.substring(0, 100)}</h4>
      <PostsAuthor userId={posts.userId} />
      <TimeAgo timestamp={posts.date} />
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
