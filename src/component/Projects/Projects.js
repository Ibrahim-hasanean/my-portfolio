import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import ProjectsItem from "../ProjectsItem/ProjectsItem";
import SectionBox from "../SectionBox/SectionBox";
import kstroeimg from "../../assets/kstore.png";
import netfliximg from "../../assets/Netfliximg.png";
import landingpageimg from "../../assets/landing.png";
let useStyle = makeStyles((theme) => ({
  root: {
    padding: "50px",
  },
}));
const Projects = () => {
  let classes = useStyle();
  const projects = [
    {
      title: "KStore",
      detailes: [
        " site shows to user items ,category(ex:t-shirt,pants ...elc),price and type(man,woman).",
        "clothes sort by mot popular,new ,most sales.",
        "Provide cards Payment.",
        "site provide shopping cart to make it easy to users for buy multiple items.",
      ],
      img: kstroeimg,
      techs: ["React js", "Node js", "REST API", "mongo db"],
      repoLink: "https://github.com/Ibrahim-hasanean/sport-store-front",
      demoLink: "https://wonderful-pike-82f674.netlify.app",
    },
    {
      title: "Netflix Clone",
      detailes: [
        "get movies data from IMDB api and display in screen",
        " build beautiful design for website",
      ],
      img: netfliximg,
      techs: ["React js", "Material UI"],
      repoLink: "https://github.com/Ibrahim-hasanean/netflix-clone",
      demoLink: "https://netflix-clone-6ced4.firebaseapp.com",
    },
    {
      title: "Landing Page",
      detailes: [
        "Landing Page For AirPnP",
        "landing page with nice style and simple animation.",
      ],
      img: landingpageimg,
      techs: ["React js", "Material UI"],
      repoLink: "https://github.com/Ibrahim-hasanean/landing-page",
      demoLink: "https://gifted-gates-25b5f2.netlify.app",
    },
  ];
  return (
    <Grid
      id="works"
      className={classes.root}
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <Subtitle subtitle="TAKE A LOOK AT MY" />
      <Title title="PROJECTS" />
      <SectionBox>
        {projects.map((project, index) => (
          <ProjectsItem project={project} key={index} />
        ))}
      </SectionBox>
    </Grid>
  );
};

export default Projects;
