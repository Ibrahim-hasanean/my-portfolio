import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import SectionBox from "../SectionBox/SectionBox";
let useStyles = makeStyles((theme) => ({
  root: {
    padding: "80px 50px",
  },
  subtitle: {
    fontFamily: "inherit",
    fontSize: "small",
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
  primary: {
    color: "#8444df",
  },
  aboutmeText: {
    color: "#333",
  },
  aboutme: {
    textAlign: "left",
    padding: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  aboutmeContainer: {
    background: "white",
    padding: "30px",
    borderRadius: "30px",
  },
}));
const AboutMe = () => {
  let classes = useStyles();
  let Summary = (
    <Typography className={classes.aboutme} variant="h6" color="textPrimary">
      I'm a full-stack web developer with a background in computer systems and
      network infrastructure. My 5 years of IT experience has given me a strong
      foundation for web development and building complex solutions. Recently, I
      graduated from the <span className={classes.primary}> IUG college</span>.
      I am passionate about coding and solving problems through code, and I am
      excited to work alongside other amazing programmers and learn so much
      more!
    </Typography>
  );
  return (
    <Grid
      id="about"
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      className={classes.root}
    >
      <Subtitle subtitle="SOME INFO" />
      <Title title="ABOUT ME" />
      <SectionBox>{Summary}</SectionBox>
    </Grid>
  );
};

export default AboutMe;
