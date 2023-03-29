import React, { useEffect} from "react";
import  L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from "react-leaflet";
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';


let Routing=()=>{
let map = useMap();
let icons = L.icon({
  iconUrl:"https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize:[20,35],
})

useEffect(()=>{ 
  L.marker([17.360589,78.4740613],{icon:icons}).addTo(map)
  L.Routing.control({
  waypoints:[
    L.latLng(17.360589,78.4740613)
  ],
  routeWhileDragging:false,
  geocoder:L.Control.Geocoder.nominatim(),
}).addTo(map)
  },[])
  return null
}
export default Routing;