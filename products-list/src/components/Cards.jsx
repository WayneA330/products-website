import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  gridItem: {
    height: "190px",
    "@media (max-width: 1250px) and (min-width: 900px)": {
      height: "250px",
    },
    "@media (max-width: 900px)": {
      height: "150px",
    },
  },
});

const ItemCards = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3} xl={1}>
      <Link
        to={`product=${data.title}_id=${data.id}`}
        state={data}
        style={{ textDecoration: "none" }}
      >
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="160"
              image={data?.thumbnail}
              alt={data?.title}
            />
            <CardContent className={classes.gridItem}>
              <Typography gutterBottom variant="h6" component="div">
                {data?.title}
              </Typography>
              <div>
                <Typography
                  variant="body2"
                  color="black"
                  sx={{ marginTop: "5px" }}
                >
                  {data?.description}
                </Typography>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                  }}
                >
                  <div>
                    <Typography
                      variant="body1"
                      color="black"
                      className={classes.bottom_details}
                    >
                      In stock: {data?.stock}
                    </Typography>
                    <Typography variant="h6" color="black">
                      ${data?.price}
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default ItemCards;
