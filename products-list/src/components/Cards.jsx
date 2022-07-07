import Grid from "@mui/material/Grid";
import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

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
  //   details: {
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: '',
  //   },
});

const ItemCards = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3} xl={1}>
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
            <div className={classes.details}>
              <div>
                <Typography
                  variant="body2"
                  color="black"
                  sx={{ marginTop: "15px" }}
                >
                  {data?.description}
                </Typography>
              </div>
              <div>
                <Typography variant="body2" color="black">
                  {data?.price}
                </Typography>
                <Typography variant="body2" color="black">
                  {data?.stock}
                </Typography>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ItemCards;
