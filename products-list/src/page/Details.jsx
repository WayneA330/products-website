import React from "react";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  img: {
    display: "flex",
    width: "100%",
  },
});

const Details = () => {
  const location = useLocation();
  const data = location.state;
  const pictures = data.images;
  const classes = useStyles();

  console.log(data);
  return (
    <>
      <div>
        <div className={classes.img}>
          {pictures.map((picture, idx) => (
            <img src={`${picture}`} alt={data.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
