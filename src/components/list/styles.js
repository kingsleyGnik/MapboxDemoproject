import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  search: {
    position: "relative",
    backgroundColor: "black",
    marginLeft: "10px",
    marginTop: "10px",
    marginRight: "10px",
    width: "100%",
    borderRadius: "8px",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  inputbox: {
    color: "white",
    backgroundColor: "black",
    marginLeft: "7px",
    margintop: "15px",
    border: "2px solid white",
    borderRadius: "7px",
    padding: "8px",
  },
  button: {
    color: "white",
    backgroundColor: "black",
    marginLeft: "40px",
    marginTop: "4px",
    marginBottom: "4px",
    padding: "8px",
    border: "2px solid white",
    borderRadius: "8px",
  },
  formControl: {
    backgroundColor: "black",
    marginTop: "10px",
    marginRight: "10px",
    marginLeft: "10px",
  },
}));
