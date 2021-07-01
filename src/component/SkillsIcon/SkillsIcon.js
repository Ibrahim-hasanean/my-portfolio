import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";

let useStyle = makeStyles((theme) => ({
  paper: {
    width: "70px",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    "&:hover": {
      boxShadow: "0 10px 28px rgb(0 0 0 / 20%)",
    },
  },
  icon: {
    width: "30px",
    height: "30px",
  },
}));
const SkillsIcon = ({ skill }) => {
  let classes = useStyle();
  return (
    <Paper className={classes.paper}>
      <img
        className={classes.icon}
        src={skill.img}
        alt={skill.title + "icon"}
      />
      <Typography variant="body2">{skill.title}</Typography>
    </Paper>
  );
};

export default SkillsIcon;
