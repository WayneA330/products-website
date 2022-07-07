import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  search_textfield: {
    width: "50vw",
  },
  search_container: {
    margin: "3rem auto",
    width: "fit-content",
  },
});

const Search = ({ setSearchValue }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.search_container}>
        <TextField
          className={classes.search_textfield}
          variant="outlined"
          size="small"
          label="Search a product"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Search;
