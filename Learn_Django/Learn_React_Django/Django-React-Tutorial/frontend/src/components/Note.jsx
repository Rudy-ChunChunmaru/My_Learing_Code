import React from "react";
import "../styles/Note.css";

const Note = ({ note, onDelete }) => {
  const formatedDate = new Date(note.create_at).toLocaleDateString("en-US");

  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formatedDate}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        delete
      </button>
    </div>
  );
};

export default Note;
