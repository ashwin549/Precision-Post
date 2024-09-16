import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fallback icon definition
const fallbackIcon = L.divIcon({
  html: '<div style="background-color: #2196F3; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white;"></div>',
  className: "custom-div-icon",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const RouteMap: React.FC = () => {
  // Coordinates for New Delhi, India
  const indiaPosition: [number, number] = [28.6139, 77.209];

  return (
    <div style={{ height: "400px", width: "100%", position: "relative" }}>
      <MapContainer
        center={indiaPosition}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={indiaPosition} icon={fallbackIcon}>
          <Popup>
            Your Current Location.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RouteMap;
