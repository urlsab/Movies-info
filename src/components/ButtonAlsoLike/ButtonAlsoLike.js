import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// no css import because we style inside the button with mui attribiutes

const ButtonAlsoLike = ({ linkPath, text }) => {
  return (
    <Button
      //how dose this work? you have no component with the name "Link"...
      // look here - https://stackoverflow.com/questions/51642532/how-to-make-a-material-ui-react-button-act-as-a-react-router-dom-link
      // they may be other better solutions

      // q: still it dosen't make any sense - how it's working???
      // ans: maybe it's working because we do give a to= prop, that anyway shpuld be in the <Link> component 
      component={Link}
      to={linkPath}
      color="primary"
      variant="secondary"
    >
      {text}
    </Button>
  );
};

export default ButtonAlsoLike;