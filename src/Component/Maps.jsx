import React,{ useRef} from "react"
import { MapContainer , TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Routing from "./Routing";



function Maps(){
let position =[17.360589,78.4740613];
const ref = useRef();

const URL = "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=8crlYfRhy44ZcLA6grzK"

return (
    <>
  <MapContainer
  center={position}
   zoom={8} 
  ref={ref}
   style={{ width: '100%', height: '100vh'}} 
   >
  <TileLayer 
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url={URL}
      />
      <Routing />
  </MapContainer>
  </>
)
  }
export default Maps;