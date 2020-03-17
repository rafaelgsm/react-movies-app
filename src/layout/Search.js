import React from "react";

import { makeStyles } from "@material-ui/core/styles";

//TextField:
import TextField from "@material-ui/core/TextField";

//Selector:
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

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

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

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

      <FormControl
        variant="outlined"
        className={classes.formControl}
        style={{ width: "200px" }}
      >
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Search Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={searchType}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"movie"}>movie</MenuItem>
          <MenuItem value={"multi"}>multi</MenuItem>
          <MenuItem value={"tv"}>tv</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </form>
  );
};

export default Search;
