import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Paper,
  TextField,
  Button,
  Hidden,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Subtitle from "../Subtitle/Subtitle";
import SectionBox from "../SectionBox/SectionBox";
import Title from "../Title/Title";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
init("user_5Gs2CEmPHRolE9TQys7tC");
let useStyle = makeStyles((theme) => ({
  root: {
    padding: "50px",
  },
  paperBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    height: "150px",
  },
  paper: {
    width: "50px",
    height: "50px",
    padding: "5px 5px 3px 5px ",
    background: "#F3F9F4",
    color: "#82c690",
  },
  link: {
    color: "#000",
    fontWeight: "600",
  },
  contactForm: {
    padding: "60px 0px",
    height: "calc(max-content+100px)",
  },
  textField: {
    width: "100%",

    "&:focus": {
      borderColoe: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgb(0 123 255 / 25%)",
    },
    "&:hover": {
      border: "none",
    },
  },
  textContainer: {
    margin: "15px",
  },
  button: {
    width: "30%",
    padding: "10px",
    borderRadius: "30px",
  },
  emailSendMessage: {
    transition: "all 0.5s ease-in",
  },
}));
const Contact = () => {
  let classes = useStyle();
  const [emailSent, setEmailSent] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInfo({ ...info, [name]: value });
  };

  let sendEmail = (e) => {
    e.preventDefault();
    send("service_in4cyhm", "template_l1s5t48", {
      to_name: "Ibrahim",
      from_name: info.name,
      from_email: info.email,
      message: info.message,
      subject: info.subject,
    })
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setInfo({ name: "", email: "", subject: "", message: "" });
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 3000);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <Grid
      id="contact"
      container
      className={classes.root}
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Subtitle subtitle="SAY HELLO" />
      <Title title="CONTACT" />
      <SectionBox>
        <Typography variant="h5" color="textPrimary">
          Get in Touch
        </Typography>
        <Grid container justify="center" spacing={6}>
          <Grid
            container
            item
            xs={5}
            direction="column"
            justify="flex-start"
            alignContent="center"
          >
            <Paper className={classes.paperBox}>
              <Paper className={classes.paper}>
                <MailOutlineIcon fontSize="large" color="inherit" />
              </Paper>
              <Typography variant="body1">
                <a className={classes.link} href="mailto:imh19970408@gmail.com">
                  imh19970408@gmail.com
                </a>
              </Typography>
              <Typography color="textSecondary" variant="button">
                Email Me
              </Typography>
            </Paper>
          </Grid>
          <Grid
            container
            item
            xs={5}
            direction="column"
            justify="flex-start"
            alignContent="center"
          >
            <Paper className={classes.paperBox}>
              <Paper className={classes.paper}>
                <PhoneAndroidIcon fontSize="large" color="inherit" />
              </Paper>
              <Typography variant="body1" className={classes.link}>
                {/* <a className={classes.link} href="callto:+972 59-780-1611"> */}
                +972 59-780-1611
                {/* </a> */}
              </Typography>
              <Typography color="textSecondary" variant="button">
                Call Me
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <form id="form" onSubmit={sendEmail}>
          <Grid
            className={classes.contactForm}
            container
            justify="space-between"
            //   spacing={4}
          >
            <Grid className={classes.textContainer} container item xs={12}>
              <Typography variant="h5" color="textPrimary">
                Contact Form
              </Typography>
            </Grid>
            <Grid
              className={classes.textContainer}
              container
              item
              xs={12}
              md={5}
            >
              <TextField
                onChange={handleChange}
                className={classes.textField}
                variant="outlined"
                placeholder="Your Name"
                name="name"
                value={info.name}
              />
            </Grid>
            <Grid
              className={classes.textContainer}
              container
              item
              xs={12}
              md={5}
            >
              <TextField
                onChange={handleChange}
                name="email"
                type="email"
                className={classes.textField}
                variant="outlined"
                placeholder="Your Email"
                value={info.email}
              />
            </Grid>
            <Grid className={classes.textContainer} container item xs={12}>
              <TextField
                onChange={handleChange}
                name="subject"
                className={classes.textField}
                variant="outlined"
                placeholder="Subject"
                value={info.subject}
              />
            </Grid>
            <Grid className={classes.textContainer} container item xs={12}>
              <TextField
                onChange={handleChange}
                className={classes.textField}
                variant="outlined"
                placeholder="Message"
                multiline
                rows={2}
                rowsMax={6}
                name="message"
                value={info.message}
              />
            </Grid>
            <Grid container item xs={12} justify="center">
              <Hidden xsUp={!emailSent}>
                <Alert className={classes.emailSendMessage} severity="success">
                  email send successfully
                </Alert>
              </Hidden>
            </Grid>

            <Grid
              className={classes.textContainer}
              container
              item
              xs={12}
              justify="center"
            >
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </SectionBox>
    </Grid>
  );
};

export default Contact;
