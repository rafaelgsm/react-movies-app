import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    margin: "1rem"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: "1.5rem"
  },
  pos: {
    marginBottom: 12
  },
  grayText: {
    color: "#808080",
    fontSize: "1rem"
  }
});

//Layout for representing a list item
const MovieItem = ({ poster, name, release_date, popularity, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} display="flex">
      <Box display="flex">
        <img src={poster} alt={name} />

        <Box
          margin="auto"
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="1rem"
        >
          <span className={classes.title}>{name}</span>
          <span className={classes.grayText}>
            Release Date: {release_date} | Popularity: {popularity}
          </span>
          <p className={classes.grayText}>{description}</p>
        </Box>
      </Box>
    </Card>
  );
};

export default MovieItem;
