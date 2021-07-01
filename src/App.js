import { useRef, useState } from "react";
// import "./App.css";
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import AbouteMe from "./component/AboutMe/AboutMe";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Contact from "./component/Contact/Contact";
import { Grid, makeStyles, Hidden } from "@material-ui/core";

let useStyle = makeStyles((theme) => ({
  root: {
    background: "#f7f7f7",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

function App() {
  let classes = useStyle();
  let navRef = useRef();
  const [hideBar, setHideBar] = useState(true);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#8444df",
      },
      secondary: {
        main: "#5F6F81",
      },
      textPrimary: {
        main: "#000",
      },
    },
  });
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        {/* <header className="App-header"> */}
        <Grid className={classes.root} container>
          <Grid container item xs={1}>
            <Hidden smDown={hideBar}>
              <Nav navRef={navRef} />
            </Hidden>
          </Grid>
          <Grid container item xs={12} sm={12} md={10} justify="flex-end">
            <Header hideBar={hideBar} setHideBar={setHideBar} />
            <AbouteMe />
            <Skills />
            <Projects />
            <Contact />
          </Grid>
        </Grid>
        {/* </header> */}
      </MuiThemeProvider>
    </div>
  );
}
//service_in4cyhm
export default App;
