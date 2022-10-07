import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { selectCityById } from "../store/cities/selectors";
import { useSelector } from "react-redux";

function Map() {
  const city = useSelector(selectCityById);
  return (
    <div>
      <MapContainer
        id="map"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Map;
