import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
let useStyles = makeStyles((theme) => ({
  box: {
    padding: "10px",
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "5px",
    },
  },

  aboutmeContainer: {
    background: "white",
    padding: "30px",
    borderRadius: "30px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "5px",
    },
  },
}));
const SectionBox = ({ children }) => {
  let classes = useStyles();

  return (
    <Grid
      className={classes.box}
      container
      item
      justify="center"
      alignItems="center"
      // xs={11}
    >
      <Grid
        container
        item
        justify="flex-start"
        alignItems="center"
        className={classes.aboutmeContainer}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default SectionBox;
