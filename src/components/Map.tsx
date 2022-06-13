import React, { FC } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

interface Props {
  location: { lng: number; lat: number };
}

const MapView: FC<Props> = ({ location }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API!,
  });

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  return isLoaded ? (
    <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <>Map Loading...</>
  );
};

export default React.memo(MapView);
