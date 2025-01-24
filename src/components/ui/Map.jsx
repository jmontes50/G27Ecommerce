import { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer, Popup, useMap, useMapEvents } from "react-leaflet";

const Map = () => {
  const [coordsCenter, setCoordsCenter] = useState([-12.0678297, -77.0369672]);
  const [positionMarker, setPositionMarker] = useState(null)

  const ActionsMap = () => {

    useMapEvents({
      click: (event) => {
        console.log(event.latlng);
        const { lat, lng } = event.latlng;
        // console.log(lat, lng)
        setCoordsCenter([lat, lng]);
        setPositionMarker([lat, lng]);
      }
    })

    if(coordsCenter){
      const map = useMap();
      map.flyTo(coordsCenter);
    }

    return <>
      {positionMarker ? <Marker position={positionMarker} /> : null}
    </>
  }

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        console.log("tenemos acceso!!", latitude, longitude);
        setCoordsCenter([latitude, longitude]);
      })
    }
  }, [])

  return (
    // añadimos un div con una altura para que sepa como debe mostrar el mapa
    <div className="w-full border-2 border-gray-500 rounded h-96">
      <MapContainer center={coordsCenter} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <ActionsMap />
        {/* marcador estatico */}
        {/* <Marker position={coordsCenter}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};

export default Map;
