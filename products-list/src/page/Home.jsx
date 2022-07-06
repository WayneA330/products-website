import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};

const Home = () => {
  const [category, setCategory] = useState();
  const [isCategory, setIsCategory] = useState(false);
  const { data, status } = useQuery("products", getProducts);
  console.log(isCategory);
  return (
    <>
      <Navbar setCategory={setCategory} setIsCategory={setIsCategory} />
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
