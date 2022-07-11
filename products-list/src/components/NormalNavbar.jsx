import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "beige",
    display: "flex",
    justifyContent: "space-between",
  },
  navbar_title: {
    color: "black",
    fontSize: "20px !important",
  },
});

const NormalNavbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.navbar}>
          <Typography className={classes.navbar_title}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Product Center
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NormalNavbar;
