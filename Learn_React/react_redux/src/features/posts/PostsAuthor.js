import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostsAuthor = ({ userId }) => {
  const user = useSelector(selectAllUsers);

  const author = user.find((user) => user.id === userId);

  return <span> by {author ? author.name : "unknow author"}</span>;
};

export default PostsAuthor;
