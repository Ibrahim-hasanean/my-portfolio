import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import SectionBox from "../SectionBox/SectionBox";
import SkillsIcon from "../SkillsIcon/SkillsIcon";
import htmlimg from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import nodeimg from "../../assets/node js.png";
import reactimg from "../../assets/react.png";
import restimg from "../../assets/api.png";
import aspimg from "../../assets/asp.net.jpg";
import git from "../../assets/git.png";
import unittestimg from "../../assets/unit test.jpg";
import angularimg from "../../assets/angular.png";
import mongoimg from "../../assets/mongo.png";
import mysqlimg from "../../assets/mysql.png";

let useStyles = makeStyles(() => ({
  root: {
    padding: "100px 50px",
  },
  skillsContainer: {
    gap: "60px",
  },
}));
const Skills = () => {
  let classes = useStyles();
  const skills = [
    { title: "html", img: htmlimg },
    { title: "css", img: css },
    { title: "javascript", img: js },
    { title: "node js", img: nodeimg },
    { title: "react", img: reactimg },
    { title: "angular", img: angularimg },
    { title: "rest api", img: restimg },
    { title: "asp.net", img: aspimg },
    { title: "git", img: git },
    { title: "unit test", img: unittestimg },
    { title: "mongo db", img: mongoimg },
    { title: "my sql", img: mysqlimg },
  ];
  return (
    <Grid
      id="skills"
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      className={classes.root}
    >
      <Subtitle subtitle="CHECK OUT MY" />
      <Title title="SKILLS" />
      <SectionBox>
        <Grid
          container
          justify="flex-start"
          wrap="wrap"
          alignItems="flex-start"
          className={classes.skillsContainer}
        >
          {skills.map((skill, index) => (
            <SkillsIcon skill={skill} key={index} />
          ))}
        </Grid>
      </SectionBox>
    </Grid>
  );
};

export default Skills;
