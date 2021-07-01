import React from "react";
import profileImage from "../../assets/profile.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
  Grid,
  makeStyles,
  Avatar,
  Typography,
  Button,
  Paper,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
let useStyle = makeStyles((theme) => ({
  root: {
    padding: "70px",
    // height: "max-content",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down(760)]: {
      flexDirection: "column",
    },
  },
  items: {
    width: "50%",
    height: "100%",
    paddingTop: "50px",
    [theme.breakpoints.down(760)]: {
      width: "80%",
      height: "max-content",
    },
  },
  avatar: {
    width: "350px",
    height: "350px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
      height: "300px",
    },
  },
  text: {
    textAlign: "left",
  },
  span: {
    color: "#8444df",
  },
  button: {
    padding: "10px 30px",
    borderRadius: "20px",
    letterSpacing: "5px",
    // lineHeight: "15px",
  },
  connections: {
    padding: "30px 0",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "stretch",
    },
  },
  icons: {
    margin: "0 15px",
    padding: "5px",
    [theme.breakpoints.down("md")]: {
      margin: "0 10px",
    },
  },
  name: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.8rem",
    },
  },
  iconContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0",
      justifyContent: "center",
    },
  },
  burgerIcon: {
    position: "fixed",
    top: "10px",
    right: "30px",
    display: "none",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  downloadLink: {
    color: "white",
    textDecoration: "none",
  },
}));
const Header = ({ setHideBar, hideBar }) => {
  let classes = useStyle();
  let toggleNav = () => {
    setHideBar(!hideBar);
  };

  return (
    <Grid
      id="home"
      className={classes.root}
      container
      justify="space-evenly"
      alignItems="center"
    >
      <IconButton onClick={toggleNav} className={classes.burgerIcon}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Grid
        className={classes.items}
        container
        item
        // sm={5}
        justify="center"
        alignItems="center"
      >
        <Avatar
          className={classes.avatar}
          alt="Ibrahim Hasaneen"
          src={profileImage}
        />
      </Grid>
      <Grid
        className={classes.items}
        container
        item
        // sm={5}
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Typography variant="h6" color="textPrimary">
          HI THERE! I'M
        </Typography>
        <Typography className={classes.name} variant="h4" color="textPrimary">
          <span className={classes.span}>IBRAHIM </span>
          HASANEEN
        </Typography>

        <Typography className={classes.text} color="secondary" variant="h6">
          A <span className={classes.span}>Full-Stack Web Developer</span>{" "}
          passionate about creating interactive applications and experiences on
          the web
        </Typography>
        <Grid
          className={classes.connections}
          container
          item
          justify="space-between"
          alignItems="center"
        >
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            // onClick={downloadResume}
          >
            {/* <a
              href="../../files/Ibrahim_Hasaneen_cv.PDF"
              download="Ibrahim_Hasaneen_cv.PDF"
            > */}
            <a
              className={classes.downloadLink}
              href="Ibrahim_Hasaneen_cv.pdf"
              download
            >
              Resume
            </a>
            {/* </a> */}
          </Button>
          <Grid
            className={classes.iconContainer}
            xs={12}
            md={6}
            container
            item
            justify="flex-start"
            alignItems="center"
          >
            <Paper className={classes.icons}>
              <a
                href="https://www.facebook.com/hima199704/"
                target="_blank"
                rel="noreferrer"
                alt="facebook"
              >
                <FacebookIcon color="primary" />
              </a>
            </Paper>
            <Paper className={classes.icons}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/himaa197"
                alt="facebook"
              >
                <TwitterIcon color="primary" />
              </a>
            </Paper>
            <Paper className={classes.icons}>
              <a href="#a" alt="facebook">
                <LinkedInIcon color="primary" />
              </a>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
