import { useRef } from "react";
import useStyles from "./styles.js";
import { Room } from "@material-ui/icons";
import { useDispatch } from "react-redux/es/exports.js";
import fetchPlacesData from "../../reduxStore/action/index";

const List = () => {
  const classes = useStyles();
  const nameRef = useRef();
  const dispatch = useDispatch();
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() =>{
      dispatch(fetchPlacesData(nameRef.current.value))
    }, 500)
    console.log(nameRef.current.value);
   
  };
  return (
    <>
      <div className={classes.search}>
        <form onSubmit={handleSubmit}>
          <Room style={{ color: "white" }}></Room>
          <input
            autoFocus
            placeholder="search..."
            ref={nameRef}
            className={classes.inputbox}
          ></input>

          <button className={classes.button} type="submit">
            navigate
          </button>
        </form>
        
      </div>
    </>
  );
};

export default List;
