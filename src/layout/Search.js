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

  const [searchText, setSearchText] = React.useState("");
  const [searchType, setSearchType] = React.useState("");

  const [error, setError] = React.useState(false);

  const handleChangeText = e => {
    setSearchText(e.target.value);
    props.onInputChange(e.target.value);
  };

  const handleChangeSelector = text => {
    setSearchType(text);
    props.onSelectorChange(text);
  };

  const handleSubmit = e => {  

    if (searchText.length > 0 && searchType.length > 0) {
      setError(false);
    } else {    
      setError(true);
    }

    props.onSubmit(e);
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
      onSubmit={handleSubmit}
    >
      <TextField
        error={error}
        style={{ width: "40%" }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={handleChangeText}
      />

      <DefaultSelector
        error={error}
        searchTypeName="Search Type"
        typeList={["", "movie", "multi", "tv"]}
        onSelectorChange={handleChangeSelector}
      />

      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </form>
  );
};

export default Search;
