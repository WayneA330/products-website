import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useQuery } from "react-query";

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
  category_btn: {
    color: "black !important",
  },
  menu_category: {},
});

const getAllCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  return res.json();
};

const Navbar = ({ setCategory, setIsCategory }) => {
  const { data } = useQuery("All-categories", getAllCategories);
  const [selected, setSelected] = useState();
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectedCategory = (value) => {
    setSelected(value);
    if (value === "Category") {
      setIsCategory(false);
    } else {
      setIsCategory(true);
    }
    handleClose();
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${selected}`)
      .then((res) => res.json())
      .then((data) => setCategory(data.products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const open = Boolean(anchorEl);

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.navbar}>
          <Typography className={classes.navbar_title}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Product Center
            </Link>
          </Typography>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className={classes.category_btn}
            onClick={handleClick}
          >
            {selected === undefined ? "Category" : selected}
            {<KeyboardArrowDown />}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            className={classes.menu_category}
          >
            <MenuItem onClick={() => selectedCategory("Category")}>
              Default
            </MenuItem>
            {data === undefined
              ? null
              : data.map((item, idx) => (
                  <MenuItem onClick={() => selectedCategory(item)} key={idx}>
                    {item.toUpperCase()}
                  </MenuItem>
                ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
