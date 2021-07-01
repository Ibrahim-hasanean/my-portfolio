import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import DnsOutlinedIcon from "@material-ui/icons/DnsOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
let useStyle = makeStyles((theme) => ({
  root: {
    padding: "10px",
    background: "#8444df",
    position: "fixed",
    zIndex: "2",
    width: "80px",
    height: "100vh",
    overflow: "hidden",
    transition: "all 0.4s ease-in",
    "&:hover": {
      width: "200px",
    },
    // [theme.breakpoints.down("sm")]: {
    //   left: "-100px",
    // },
  },

  links: {
    fontSize: "1.2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
    color: "#fff",
    fontWeight: "600",
    textDecoration: "none",
    paddingRight: "10px",
    paddingLeft: "5px",
    "&:hover": {
      background: "#9D69E5",
      //   opacity: "0.1",
      //   color: "white",
      borderRadius: "5px",
    },
  },
  paper: {
    background: "none",
  },
  icons: {
    marginRight: "28px",
  },
}));
const Nav = ({ navRef }) => {
  let classes = useStyle();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      ref={navRef}
    >
      <Typography variant="h3">IH</Typography>
      <Grid item container justify="space-between" alignItems="center" xs={7}>
        <a className={classes.links} href="#home">
          <HomeIcon className={classes.icons} />
          Home
        </a>
        <a className={classes.links} href="#about">
          <PersonOutlineIcon className={classes.icons} />
          About
        </a>
        <a className={classes.links} href="#skills">
          <DnsOutlinedIcon className={classes.icons} />
          Skills
        </a>
        <a className={classes.links} href="#works">
          <WorkOutlineOutlinedIcon className={classes.icons} />
          Works
        </a>
        <a className={classes.links} href="#contact">
          <PhoneIcon className={classes.icons} />
          Contact
        </a>
      </Grid>
    </Grid>
  );
};

export default Nav;
