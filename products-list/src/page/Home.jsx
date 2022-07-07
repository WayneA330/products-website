import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ItemCards from "../components/Cards";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

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
  console.log(data);
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
      {/* Data Render */}
      <div>
        {status === "error" && alert("There was an error fetching the data.")}

        <Box className={classes.card_container}>
          <Grid container spacing={2}>
            {!isCategory ? (
              status === "success" &&
              data.products.map((items) => (
                <ItemCards key={items.id} data={items} />
              ))
            ) : (
              <p>Data of category chosen</p>
            )}
          </Grid>
        </Box>
      </div>
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
