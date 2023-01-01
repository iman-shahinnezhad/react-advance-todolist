import { TextField } from "@mui/material";
import React from "react";
import { SearchBarContainer } from "../../styles/searchbar";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <TextField variant="outlined" type="search" name="search" fullWidth />
    </SearchBarContainer>
  );
};

export default SearchBar;
