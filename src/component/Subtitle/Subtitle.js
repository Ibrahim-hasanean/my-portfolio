import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
let useStyles = makeStyles((theme) => ({
  root: {
    padding: "80px 50px",
  },
  subtitle: {
    fontFamily: "inherit",
    fontSize: "0.7rem",
  },
  span: {
    // border: "1px solid black",
    width: "60px",
    height: "1px",
    marginRight: "30px",
    background: "black",
  },
  box: {
    padding: "10px",
  },
}));
const Subtitle = ({ subtitle }) => {
  let classes = useStyles();
  return (
    <Grid className={classes.box} container alignItems="center">
      <span className={classes.span}></span>
      <Typography
        className={classes.subtitle}
        color="textPrimary"
        variant="subtitle2"
      >
        {subtitle}
      </Typography>
    </Grid>
  );
};

export default Subtitle;
