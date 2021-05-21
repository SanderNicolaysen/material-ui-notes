import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import { RadioGroup } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginBottom: "1rem",
    marginTop: "1rem",
    display: "block",
  },
});

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("milk");

  const history = useHistory();

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      await fetch("http://localhost:8000/notes", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ title, details, category }),
      });
      history.push("/");
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create new Note
      </Typography>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          fullWidth
          label="Note title"
          required
          variant="outlined"
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          fullWidth
          label="Details"
          multiline
          rows={4}
          required
          variant="outlined"
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Foods</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="milk" control={<Radio />} label="Milk" />
            <FormControlLabel value="water" control={<Radio />} label="Water" />
            <FormControlLabel value="ice" control={<Radio />} label="Ice" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
