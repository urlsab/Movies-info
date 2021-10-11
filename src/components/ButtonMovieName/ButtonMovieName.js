import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ButtonMovieName = ({ linkPath, text }) => {
  return (
    <Button
      //how dose this work? you have no component with the name "Link"...
      // look here - https://stackoverflow.com/questions/51642532/how-to-make-a-material-ui-react-button-act-as-a-react-router-dom-link
      // they may be other better solutions
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
