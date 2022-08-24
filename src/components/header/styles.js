import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appbar: {
    backgroundColor: "black",
  },
  title: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "white",
    },
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
