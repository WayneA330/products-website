import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const useStyles = makeStyles({
  title_text: {
    width: "75vw",
    textAlign: "center",
    margin: "auto",
    marginTop: "3rem",
  },
});

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};

const Home = () => {
  const [searchValue, setSearchValue] = useState();
  const [category, setCategory] = useState();
  const [isCategory, setIsCategory] = useState(false);
  const { data, status } = useQuery("products", getProducts);
  const classes = useStyles();
  return (
    <>
      <Navbar setCategory={setCategory} setIsCategory={setIsCategory} />
      <div className={classes.title_text}>
        <Typography variant="h5">
          ALL THE PRODUCTS THAT YOU WILL EVER NEED FOR YOUR EVERYDAY LIFE CAN BE
          FOUND HERE AT PRODUCT CENTER.
        </Typography>
      </div>
      <Search setSearchValue={setSearchValue} />
    </>
  );
};

export default Home;

// eslint-disable-next-line
{
  /* <Link to={`${item}-${id}`} state={mock}>
Go to product details
</Link> */
}
