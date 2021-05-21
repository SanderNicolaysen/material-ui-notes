import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const deleteNoteHandler = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
    });

    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const getNotes = async () => {
      const response = await fetch("http://localhost:8000/notes");
      const responseData = await response.json();

      setNotes(responseData);
    };
    getNotes();
  }, []);

  const breakpoints = {
    default: 3,
    1100: 2,
    900: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <NoteCard
                note={note}
                deleteNoteHandler={() => deleteNoteHandler(note.id)}
              />
            </div>
          );
        })}
      </Masonry>
    </Container>
  );
};

export default Notes;
