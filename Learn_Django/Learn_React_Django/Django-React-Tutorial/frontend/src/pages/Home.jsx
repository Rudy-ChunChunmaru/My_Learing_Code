import { useEffect, useState } from "react";
import api from "../api";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNote();
  }, []);

  const getNote = () => {
    api
      .get("/api/notes/")
      .then((res) => {
        res.data;
      })
      .then((data) => {
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
      })
      .catch((error) => {
        alert(error);
      });
    getNote();
  };

  const createNote = (e) => {
    e.preventDefault();
    api.post("/api/notes/", { content, title }).then((res) => {
      if (res.status == 201) alert("Note created !!!");
    });
  };

  return <div>Home</div>;
}

export default Home;
