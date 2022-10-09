import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map(props) {
  return (
    <div>
      {props.lat === null || props.lon === null ? (
        "Loading..."
      ) : (
        <MapContainer
          id="map"
          center={[props.lat, props.lon]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[props.lat, props.lon]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}
export default Map;
