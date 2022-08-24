import React from "react";
//import { getPlacesData } from "./api/geoLocationAPI";
import { CssBaseline, Grid } from "@material-ui/core";
import "./App.css";

import Header from "./components/header/Header";
import List from "./components/list/List";
import MapBox from "./components/map/Map";

const App = () => {
  /*   const [viewport, setViewport] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 10,
    width: "100%",
    height: "100%",
  });
  const [currentLoc, setCurrentLoc] = useState("new york");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setViewport({ ...viewport, longitude, latitude });
      }
    );
    console.log(currentLoc);
  }, []);

  useEffect(() => {
    getPlacesData(currentLoc).then((data) => {
      console.log(data.lat);
      const lat = data.lat;
      const lon = data.lon;
      setViewport({ ...viewport, latitude: lat, longitude: lon });
    });
  }, [currentLoc]);
 */
  return (
    <>
      <CssBaseline>
        <Header></Header>
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List></List>
          </Grid>
          <Grid item xs={12} md={8}>
            <MapBox></MapBox>
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};

export default App;
