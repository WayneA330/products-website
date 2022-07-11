import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useQuery } from "react-query";
import ItemCards from "../components/Cards";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ModalError from "../components/ModalError";
import CategoryItemCards from "../components/CategoryItemCards";

const useStyles = makeStyles({
  title_text: {
    width: "75vw",
    textAlign: "center",
    margin: "auto",
    marginTop: "3rem",
  },
  card_container: {
    width: "98%",
    margin: "auto",
    height: "fit-content",
  },
  loading: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=50");
  return res.json();
};

const Home = () => {
  const [searchValue, setSearchValue] = useState();
  const [category, setCategory] = useState();
  const [isCategory, setIsCategory] = useState(false);
  const { data, status } = useQuery("products", getProducts);

  console.log(category);
  const classes = useStyles();

  return (
    <>
      {/* Navbar */}
      <Navbar setCategory={setCategory} setIsCategory={setIsCategory} />

      {/* Title Text */}
      <div className={classes.title_text}>
        <Typography variant="h5">
          ALL THE PRODUCTS THAT YOU WILL EVER NEED FOR YOUR EVERYDAY LIFE CAN BE
          FOUND HERE AT PRODUCT CENTER.
        </Typography>
      </div>

      {/* Search */}
      <Search setSearchValue={setSearchValue} />

      {/* Data Render */}
      <div>
        {/* If error */}
        {status === "error" && <ModalError />}

        {/* While loading */}
        {status === "loading" && (
          <CircularProgress className={classes.loading} />
        )}

        <Box className={classes.card_container}>
          <Grid container spacing={2}>
            {!isCategory
              ? status === "success" &&
                data.products.map((items) => (
                  <ItemCards key={items.id} data={items} />
                ))
              : status === "success" &&
                category.map((items) => (
                  <CategoryItemCards key={items.id} data={items} />
                ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Home;
