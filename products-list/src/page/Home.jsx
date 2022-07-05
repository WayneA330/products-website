import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};

const Home = () => {
  const { data, status } = useQuery("planets", getProducts);
  console.log(data);

  return (
    <>
      <Navbar />
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
