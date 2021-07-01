import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    width: "90%",
    padding: "15px",
    margin: "15px",
    [theme.breakpoints.down("860")]: {
      flexDirection: "column",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "50%",
    [theme.breakpoints.down("860")]: {
      width: "100%",
    },
  },
  content: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "start",
  },
  detailesContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  cover: {
    width: "50%",
    height: "300px",
    borderRadius: "30px",
    backgroundSize: "contain",
    [theme.breakpoints.down("860")]: {
      width: "100%",
    },
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  span: {
    color: "#8444df",
    fontSize: "17px",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  alignText: {
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  li: {
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9rem",
    },
  },
}));

export default function MediaControlCard({ project }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={project.img}
        title={project.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.alignText} component="h5" variant="h5">
            {project.title}
          </Typography>
          <Grid>
            <Typography
              className={classes.alignText}
              variant="h6"
              color="textPrimary"
            >
              Technologies Used:
              {project.techs.map((tech, index) => (
                <span key={index} className={classes.span}>
                  {tech},
                </span>
              ))}
            </Typography>
          </Grid>
          <ul className={classes.detailesContainer}>
            {project.detailes.map((detaile, index) => (
              <Typography key={index} variant="body1">
                <li className={classes.li}>{detaile}</li>
              </Typography>
            ))}
          </ul>
          <Grid
            container
            item
            xs={8}
            spacing={2}
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <a
                className={classes.span}
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </Grid>
            <Grid item>
              <a
                className={classes.span}
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </Grid>
          </Grid>
        </CardContent>
      </div>
    </Card>
  );
}
