import React, { useState, useEffect } from "react";
import { getTrash, restore, deleteNoteForever } from "../apis/note";
import "./RestoreNotes.css";

const RestoreNotes = () => {
  const [recycleBin, setRecycleBin] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    getTrash()
      .then((res) => {
        console.log(res.data);
        setRecycleBin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRestoreNote = (note) => {
    restore(note._id, { trashed: false })
      .then(() => {
        setRecycleBin((prevRecycleBin) =>
          prevRecycleBin.filter((item) => item._id !== note._id)
        );
      })
      .catch((error) => {
        console.error("Error restoring note:", error);
      });
  };

  const handleDeleteNote = (note) => {
    setSelectedNote(note);
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = () => {
    if (selectedNote) {
      deleteNoteForever(selectedNote._id)
        .then(() => {
          setRecycleBin((prevRecycleBin) =>
            prevRecycleBin.filter((item) => item._id !== selectedNote._id)
          );
          setSelectedNote(null);
          setShowConfirmDialog(false);
        })
        .catch((error) => {
          console.error("Error deleting note forever:", error);
        });
    }
  };

  const handleCancelDelete = () => {
    setSelectedNote(null);
    setShowConfirmDialog(false);
  };

  return (
    <div className="restore-notes-container">
      <div className="restore-notes-content">
        <h2 className="restore-notes-title">Restore Notes</h2>
        <ul>
          {recycleBin.map((note) => (
            <li key={note._id} className="restore-note-item">
              <div className="restore-note-info">
                <span className="restore-note-text">{note.text}</span>
                <div className="restore-note-buttons">
                  <button
                    onClick={() => handleRestoreNote(note)}
                    className="restore-note-button restore-button"
                  >
                    Restore
                  </button>
                  <button
                    onClick={() => handleDeleteNote(note)}
                    className="restore-note-button delete-button"
                  >
                    Delete Forever
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showConfirmDialog && (
        <div className="confirm-dialog">
          <p>Are you sure you want to permanently delete this note?</p>
          <div className="confirm-dialog-buttons">
            <button onClick={handleConfirmDelete} className="confirm-button">
              Confirm
            </button>
            <button onClick={handleCancelDelete} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestoreNotes;
