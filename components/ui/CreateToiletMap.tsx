import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import osmProviders from "../../config/osm-providers";
import useGeoLocation from "../../hooks/useGeoLocation";
import DraggableMarkerWithRef from "../widgets/DraggableMarkerWithRef";
import MapProps from "../../types/mapProps.interface";

const defaultCenter = {
  lat: 22.427509,
  lng: 114.205905,
};

const CreateToiletMap: React.FC<MapProps> = ({ onChange, value }) => {
  const center = useGeoLocation();

  useEffect(() => {
    if (center.coordinates) {
      onChange(center.coordinates);
    }
  }, [center]);

  return (
    <>
      <div>
        {center.loaded && (
          <MapContainer zoom={30} center={center.coordinates || defaultCenter}>
            <TileLayer
              url={osmProviders.maptiler.url}
              attribution={osmProviders.maptiler.attribution}
            />
            <DraggableMarkerWithRef
              markerCoordinate={value}
              onChange={onChange}
            />
          </MapContainer>
        )}
      </div>

      <style jsx>{`
        div {
          width: 100%;
          height: 600px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default CreateToiletMap;
