import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import "./Note.css";
import {
  getNotes,
  createNote,
  editNote,
  deleteNote,
  moveToTrash,
} from "../apis/note";

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [refresh, setRefresh] = useState("");
  const navigate = useNavigate();
  const [isEdit, toggleEdit] = useState(false);

  useEffect(() => {
    getNotes()
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deleteId, editIndex, refresh]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddOrEditNote = () => {
    if (inputValue.trim() !== "") {
      if (isEdit === true) {
        editNote(notes[editIndex]._id, inputValue)
          .then((updatedNote) => {
            const updatedNotes = [...notes];
            updatedNotes[editIndex] = updatedNote.data;
            setNotes(updatedNotes);
            setInputValue("");
            setEditIndex("");
            toggleEdit(false);
          })
          .catch((error) => {
            console.error("Error editing note:", error);
          });
      } else {
        createNote(inputValue)
          .then((newNote) => {
            setRefresh(newNote._id);
            setInputValue("");
          })
          .catch((error) => {
            console.error("Error creating note:", error);
          });
      }
    }
  };

  const handleDeleteNote = (note) => {
    moveToTrash(note._id)
      .then(() => {
        setRefresh(new Date().getTime());
        navigate("/RestoreNotes");
      })
      .catch((error) => {
        console.error("Error moving note to trash:", error);
      });
  };
  const handleEditNote = (index) => {
    setInputValue(notes[index].text);
    setEditIndex(index);
    toggleEdit(true);
  };

  return (
    <div
      className="note-container"
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1 className="note-header" style={{ color: "black" }}>
        {" "}
        <b> Notes</b>
      </h1>

      <div className="search-container" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search notes"
          className="search-input"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"
          style={{ marginLeft: "10px" }}
        />
      </div>

      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your note"
          className="note-input"
          // style={{
          //   padding: "10px",
          //   borderRadius: "5px",
          //   border: "1px solid #ccc",
          //   marginBottom: "10px",
          // }}
        />
        <button
          onClick={handleAddOrEditNote}
          className="add-button"
          // style={{
          //   padding: "10px",
          //   borderRadius: "5px",
          //   border: "none",
          //   backgroundColor: "#4CAF50",
          //   color: "white",
          //   cursor: "pointer",
          // }}
        >
          {isEdit === true ? "Edit Note" : "Add Note"}
        </button>
      </div>

      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={note._id} className="note-item">
            <span className="note-text">{note.text}</span>
            <button
              onClick={() => handleDeleteNote(note)}
              className="delete-button"
              // style={{
              //   padding: "5px",
              //   borderRadius: "5px",
              //   border: "none",
              //   backgroundColor: "#f44336",
              //   color: "white",
              //   marginRight: "10px",
              //   cursor: "pointer",
              // }}
            >
              Delete
            </button>
            <button
              onClick={() => handleEditNote(index)}
              className="edit-button"
              // style={{
              //   padding: "5px",
              //   borderRadius: "5px",
              //   border: "none",
              //   backgroundColor: "#2196F3",
              //   color: "white",
              //   cursor: "pointer",
              // }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <Link
        to="/RestoreNotes"
        className="inline-block p-2 rounded-full shadow-md bg-white transition-transform hover:shadow-lg"
      >
        <FontAwesomeIcon
          icon={faWindowRestore}
          className="text-green-500 text-2xl"
          style={{ marginLeft: "10px" }}
        />
      </Link>
    </div>
  );
}

export default NoteApp;
