import React, { useEffect } from "react";
import useStyles from "./styles.js";
import Map, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

import { Room, Star, StarBorder } from "@material-ui/icons";
import { useSelector } from "react-redux/es/exports.js";

const MapBox = () => {
  const classes = useStyles();
  const viewportStore = useSelector(state => state.data.viewport)
  const {longitude, latitude} = viewportStore;
  const [viewport, setViewport] = useState({  
  });

  
  useEffect(()=>{
      setViewport({longitude:longitude, 
        latitude: latitude,
        zoom: 10,
        width: "100%",
        height: "100%"})
  },[latitude, longitude])
  console.log( "start ",viewportStore.latitude, viewport)
 
  const handleMarkerClick = (lat, long) => {
  
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  return (
    <div className={classes.mapContainer}>
      <Map
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoidHJpeDAwN2tpbmciLCJhIjoiY2w2MXlyNm90MGUzdjNjbXJiY2F3Nm9hYSJ9.Wzr5qn0tTQE3XP_Zzo-pcA"
        onMove={(evt) => setViewport(evt.viewport)}
      >
        
      </Map>
    </div>
  );
};


export default MapBox;

 
        // <Marker
        //       latitude={viewport.latitude}
        //       longitude={viewport.longitude}
        //       offsetLeft={-3.5 * viewport.zoom}
        //       offsetTop={-7 * viewport.zoom}
        //     >
        //       <Room
        //         style={{
        //           fontSize: 4 * viewport.zoom,
        //           color:
        //             "black",
        //           cursor: "pointer",
        //         }}/* 
        //         onClick={() => handleMarkerClick(viewport.latitude, viewport.longitude)} */ 
              
        //       />
        //     </Marker> 