import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostsAuthor from "./PostsAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedposts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedposts.map((post) => (
    <article>
      <h3>{post.title}</h3>
      <h4>{post.content.substring(0, 100)}</h4>
      <PostsAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButton post={post} />
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
