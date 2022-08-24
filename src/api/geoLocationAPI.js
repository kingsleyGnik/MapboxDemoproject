import axios from "axios";

export const getPlacesData = async (place) => {
  try {
    const { data } = await axios.get(
      "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname",
      {
        params: { name: place },
        headers: {
          "X-RapidAPI-Key":
            "1cf8eea820mshfffc2fed4475980p199c76jsn482b2c819b7c",
          "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com",
        },
      }
    );
    console.log("success");
    return data;
  } catch (error) {
    console.log(error);
  }
};
