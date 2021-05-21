import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, IconButton, makeStyles, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { blue, purple, red, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "movies") {
        return red[500];
      }
      if (note.category === "books") {
        return yellow[700];
      }
      if (note.category === "music") {
        return purple[700];
      }
      return blue[500];
    },
  },
});

const NoteCard = ({ note, deleteNoteHandler }) => {
  const classes = useStyles(note);

  return (
    <Card elevation={1}>
      <CardHeader
        action={
          <IconButton onClick={deleteNoteHandler}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        }
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        title={note.title}
        subheader={note.category}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
