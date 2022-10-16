import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map(props) {
  return (
    <div className="flex justify-around my-10 drop-shadow-xl shadow-cust-dark-purple">
      {props.lat === null || props.lon === null ? (
        "Loading..."
      ) : (
        <MapContainer
          id="map"
          center={[props.lat, props.lon]}
          zoom={14}
          scrollWheelZoom={false}
          className="h-96 w-4/5"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[props.lat, props.lon]}></Marker>
        </MapContainer>
      )}
    </div>
  );
}
export default Map;
