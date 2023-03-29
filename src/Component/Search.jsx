import { useEffect } from 'react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import Routing from './Routing';




const Search=()=>{
    let map = useMap()
    let icons = L.icon({
        iconUrl:"https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
        iconSize:[20,30],
    })

    useEffect(()=>{
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          }).addTo(map);
        L.Control.geocoder({
            defaultMarkGeocode:false,
            placeholder:'search here',
        })
        .on('markgeocode',function(e) {
        console.log(e)
        let latlng= e.geocode.center;     
        L.marker(latlng,{icon:icons})
        .addTo(map)
        .bindPopup(e.geocode.name)
        .openPopup();
        map.fitBounds(e.geocode.bbox)
        })
        .addTo(map)
    },[])

return null
}
export default Search;