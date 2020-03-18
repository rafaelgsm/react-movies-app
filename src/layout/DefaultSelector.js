import React from "react";

import { makeStyles } from "@material-ui/core/styles";

//Selector:
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

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
const DefaultSelector = props => {
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

  const { error, searchTypeName, searchTypeSelected, typeList } = props;

  return (
    <FormControl
      error={error}
      variant="outlined"
      className={classes.formControl}
      style={{ width: "200px" }}
    >
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        {searchTypeName}
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={searchTypeSelected}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {typeList.map((item, index) => {
          if (item === "") {
            return (
              <MenuItem key={index} value="">
                <em>None</em>
              </MenuItem>
            );
          }
          return (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DefaultSelector;
