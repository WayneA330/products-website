import React from "react";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  img_container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  details_title: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem !important",
    marginBottom: "2rem !important",
  },
  images: {
    width: "250px",
    marginRight: "20px",
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
      <Typography className={classes.details_title} variant="h4">
        {data.title}
      </Typography>
      <div className={classes.img_container}>
        {pictures.map((picture, idx) => (
          <img
            key={idx}
            src={`${picture}`}
            alt={data.title}
            className={classes.images}
          />
        ))}
      </div>
    </>
  );
};

export default Details;
