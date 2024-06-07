import Counter from "./features/counter/Counter";
import AddPostsForm from "./features/posts/AddPostsForm";
import PostList from "./features/posts/PostsList";

function App() {
  return (
    <main className="App">
      <Counter />
      <AddPostsForm />
      <PostList />
    </main>
  );
}

export default App;
