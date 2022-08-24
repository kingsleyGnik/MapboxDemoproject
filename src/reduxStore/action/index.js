import * as types from "../actionTypes";
import axios from "axios";

const fetchPlacesDataStart = () => ({
  type: types.FETCH_PLACES_DATA_START,
});

const fetchPlacesDataSuccess = (data) => ({
  type: types.FETCH_PLACES_DATA_SUCCESS,
  payload: data,
});

const fetchPlacesDataFail = (error) => ({
  type: types.FETCH_PLACES_DATA_FAIL,
  payload: error,
});

export default function fetchPlacesData(place) {
  return function (dispatch) {
    dispatch(fetchPlacesDataStart());

    axios
      .get("https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname", {
        params: { name: place },
        headers: {
          "X-RapidAPI-Key":
            "1cf8eea820mshfffc2fed4475980p199c76jsn482b2c819b7c",
          "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com",
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        dispatch(fetchPlacesDataSuccess(data));
      })
      .catch((error) => {
        console.log("error");
        dispatch(fetchPlacesDataFail(error));
      });
  };
}
