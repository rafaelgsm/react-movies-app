import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 12
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

//Layout for representing a list item
const MovieItem = ({ poster, name, release_date, popularity, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>{poster}</CardContent>
      <CardContent>{name}</CardContent>
      <CardContent>{release_date}</CardContent>
      <CardContent>{popularity}</CardContent>
      <CardContent>{description}</CardContent>
    </Card>
  );
};

export default MovieItem;
