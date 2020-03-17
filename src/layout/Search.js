import React from "react";

import { makeStyles } from "@material-ui/core/styles";

//TextField:
import TextField from "@material-ui/core/TextField";

//Selector:
import DefaultSelector from "./DefaultSelector";

//Button:
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

//Layout for the Search inputs
const Search = props => {
  const classes = useStyles();

  const [searchType, setSearchType] = React.useState("");

  const handleChange = event => {
    setSearchType(event.target.value);

    props.onSelectorChange(event.target.value);
  };

  return (
    <form
      style={{
        marginTop: "4rem",
        marginBottom: "4rem",

        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }}
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={props.onSubmit}
    >
      <TextField
        style={{ width: "40%" }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={e => props.onInputChange(e.target.value)}
      />

      <DefaultSelector
        searchTypeName="Search Type"
        typeList={["", "movie", "multi", "tv"]}
        onSelectorChange={handleChange}
      />

      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </form>
  );
};

export default Search;
