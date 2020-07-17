import React from "react";
import { Box, Typography, Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#222",
    marginLeft: "41rem",
  },
  subtitle: {
    color: "black",
    marginBottom: "1rem",
    marginLeft: "42rem",
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Grid container justify="center">
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="PlaceHolder"
            justify="center"
          />
        </Grid>
      </Box>
      <Box>
        <Typography
          className={classes.title}
          variant="h4"
          color="textSecondary"
          component="p"
          justify="center"
        >
          Ryan Barron
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="h5"
          color="textSecondary"
          component="p"
        >
          Followers:34
        </Typography>
        <Typography
          className={classes.subtitle}
          variant="h5"
          color="textSecondary"
          component="p"
        >
          Following:78
        </Typography>
      </Box>
      <Box>
        <Grid container justify="center">
          <Grid item xs={10} sm={4} md={12}>
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
              justify="center"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
            <img
              src={avatar}
              className={classes.root}
              height="250"
              alt="Ryan"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
