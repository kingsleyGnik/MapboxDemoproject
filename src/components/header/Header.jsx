import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

import useStyles from "./styles.js";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Location Finder
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
