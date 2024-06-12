import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reacttionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const ReactionButton = Object.entries(reacttionEmoji).map(([name, value]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {value} {post.reactions[name]}
      </button>
    );
  });

  return <div>{ReactionButton}</div>;
};

export default ReactionButton;
