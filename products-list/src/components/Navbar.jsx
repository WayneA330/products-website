import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "beige",
  },
  navbar_title: {
    color: "black",
    fontSize: "20px !important",
  },
});

const Navbar = () => {
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

export default Navbar;
