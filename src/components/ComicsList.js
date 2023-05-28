import React from "react";
import ComicItem from "./ComicItem";
import { Grid } from "@mui/material";

const ComicsList = ({ comics }) => {
  return (
    <Grid container spacing={2} justifyContent={"center"}>
      {comics.map((comic, idx) => {
        return (
          <Grid item md={3} key={comic?.id}>
            <ComicItem comic={comic} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ComicsList;
