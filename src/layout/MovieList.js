import React from "react";
import MovieItem from "./MovieItem";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

// Layout for representing a list
const MovieList = props => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {/* Add a container here, like a grid */}

        {props.movieList.map(movie => {
          const { id, title } = movie;
          return <MovieItem key={id} id={id} title={title} />;
        })}

        {/* Add a container here, like a grid */}
      </Grid>
    </div>
  );
};

export default MovieList;
