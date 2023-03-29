import React, { useState } from "react";
import L from 'leaflet';
import { useMap } from "react-leaflet";

function SearchBar(){
    const map = useMap()
 const [searching,setSearching]=useState('')


 let icons = L.icon({
    iconUrl:"https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize:[20,30],
  })


const handler=()=>{
 }
return (
    <div>
        <input type='text' value={searching} onChange={(e)=>setSearching(e.target.value)} />
        <button className="btn" onClick={handler} >searchhere</button>
    </div>
)
}
export default SearchBar;