import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ButtonMovieName = ({ linkPath, text }) => {
  return (
    <Button
      component={Link}
      to={linkPath}
      color="primary"
      variant="outlined"
    >
      {text}
    </Button>
  );
};

export default ButtonMovieName;