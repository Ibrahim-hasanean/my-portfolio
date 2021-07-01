import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
let useStyles = makeStyles((theme) => ({
  box: {
    padding: "10px",
  },
  aboutmeText: {
    color: "#333",
  },
}));

const Title = ({ title }) => {
  let classes = useStyles();

  return (
    <Grid className={classes.box} container item alignItems="center">
      <Typography className={classes.aboutmeText} variant="h4">
        {title}
      </Typography>
    </Grid>
  );
};

export default Title;
