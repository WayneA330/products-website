import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useQuery } from "react-query";
import { blue } from "@mui/material/colors";
import NormalNavbar from "../components/NormalNavbar";

const useStyles = makeStyles({
  img_container: {
    display: "flex",
    flexWrap: "wrap",
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
    marginBottom: "20px",
  },
  product_details_reviews: {
    width: "89vw",
    margin: "auto",
    marginTop: "2rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    height: "350px",
    justifyContent: "space-evenly",
  },
  review_container: {
    border: "1px solid #918E8E",
    width: "80%",
    margin: "10px auto 10px auto",
    height: "80px",
    borderRadius: "10px",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  review_nav: {
    display: "flex",
    alignItems: "center",
  },
});

const Details = () => {
  const [amount, setAmount] = useState(1);
  const location = useLocation();
  const axios = require("axios");
  const { data: reviewsItem } = useQuery(["review"], () =>
    axios.get("https://dummyjson.com/comments?limit=15")
  );
  const classes = useStyles();

  const data = location.state;
  const pictures = data.images;
  let reviews;
  if (reviewsItem === undefined) {
    return null;
  } else {
    reviews = reviewsItem.data.comments;
  }

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  let numbers = [];

  for (let i = 1; i < data.stock + 1; i++) {
    numbers.push(i);
  }

  const totalSum = (price, amount) => {
    const total = price * amount;
    return total;
  };

  return (
    <>
      <NormalNavbar />
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
      <div className={classes.product_details_reviews}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {/* Details */}
            <div className={classes.details}>
              {/* Details Title */}
              <Typography
                variant="h6"
                sx={{ textAlign: "center", marginBottom: "10px" }}
              >
                Details
              </Typography>
              {/* About */}
              <Typography variant="body1">
                <strong>About:</strong> {data.description}
              </Typography>
              {/* Brand */}
              <Typography variant="body1">
                <strong>Brand:</strong> {data.brand}
              </Typography>
              {/* Category */}
              <Typography variant="body1">
                <strong>Category:</strong> {data.category}
              </Typography>
              {/* Discount */}
              <Typography variant="body1">
                <strong>Discount:</strong> {Math.round(data.discountPercentage)}
                %
              </Typography>
              {/* In Stock */}
              <Typography variant="body1">
                <strong>In Stock:</strong> {data.stock}
              </Typography>
              {/* Rating */}
              <Typography variant="body1" sx={{ display: "flex" }}>
                <strong>Rating:</strong>{" "}
                {
                  <Rating
                    name="rating"
                    defaultValue={Math.round(data.rating)}
                    readOnly
                  />
                }
              </Typography>
              {/* Amount */}
              <Typography
                variant="body"
                component="span"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <strong>Amount:</strong>
                <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Amount
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={amount}
                    onChange={handleChange}
                    label="Amount"
                  >
                    {numbers.map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Typography>
              {/* Total */}
              <Typography variant="body1">
                <strong>Total:</strong> {totalSum(data.price, amount)}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.reviews}>
              {/* Review Title */}
              <Typography
                variant="h6"
                sx={{ textAlign: "center", marginBottom: "10px" }}
              >
                Reviews
              </Typography>
              {/* Review */}
              {reviewsItem === undefined
                ? null
                : reviews.map((review) => (
                    <div className={classes.review_container} key={review.id}>
                      <div className={classes.review_nav}>
                        <Avatar
                          sx={{ backgroundColor: blue[300] }}
                          alt={review.user.username.toUpperCase()}
                          src="/broken-image.jpg"
                        />
                        <Typography sx={{ marginLeft: "10px" }}>
                          {review.user.username}
                        </Typography>
                      </div>
                      <div className={classes.review_body}>
                        <Typography variant="body2">{review.body}</Typography>
                      </div>
                    </div>
                  ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Details;
