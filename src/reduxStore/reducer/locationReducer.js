import * as types from "../actionTypes";

const initialState = {
  viewport: {
    longitude: 13.08784,
    latitude: 80.27847,
    zoom: 14,
    width: "100%",
    height: "100%",
  },
  currentLoc: "chennai",

  loading: false,
  error: null,
};
const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PLACES_DATA_START:
      return { ...state, loading: true };

    case types.FETCH_PLACES_DATA_SUCCESS:
      return {
        ...state,
        currentLoc: action.payload.name,
        viewport: {
          latitude: action.payload.lat,
          longitude: action.payload.lon,
        },
        loading: false,
      };

    case types.FETCH_PLACES_DATA_FAIL:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};

export default locationReducer;
