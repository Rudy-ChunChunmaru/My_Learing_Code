import { useEffect, useState } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => {
        // console.log(res);
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setNotes(data);
      })
      .catch((error) => alert(error));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}`)
      .then((res) => {
        if (res.status == 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getNotes();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status == 201) alert("Note created !!!");
        else alert("Failed to make note.");
        getNotes();
      })
      .catch((error) => console.info(error));
  };

  return (
    <div>
      <div>
        <h2>Notes</h2>
        {notes &&
          notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))}
      </div>
      <h2>Create a Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="content">content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        <br />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
}

export default Home;
