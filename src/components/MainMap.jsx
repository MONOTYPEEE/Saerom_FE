import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useRouter } from "next/router";
import { dumbData, dumbPlace } from "@/dumb";
import { useState, useEffect } from "react";
const polyRoute= [
    [
        37.547168,
        127.075749,
    ],
    [
        37.547331,
        127.075346,
    ],
    [
        37.546981,
        127.075131,
    ],
    [
        37.547188,
        127.074622,
    ],
    [
        37.547266,
        127.074374,
    ],
    [
        37.547123,
        127.074307,
    ],
    [
        37.547122,
        127.074249,
    ],
    [
        37.547073,
        127.074165,
    ],
    [
        37.546903,
        127.074085,
    ],
    [
        37.546986,
        127.073794,
    ],
    [
        37.544369,
        127.072574,
    ],
    [
        37.540547,
        127.070748,
    ],
    [
        37.540178,
        127.07059,
    ],
    [
        37.540149,
        127.070689,
    ],
    [
        37.539879,
        127.07056,
    ],
    [
        37.540143,
        127.06978,
    ],
    [
        37.539277,
        127.069402,
    ],
    [
        37.537842,
        127.068701,
    ],
    [
        37.537683,
        127.068394,
    ],
    [
        37.537764,
        127.068019,
    ],
    [
        37.537689,
        127.067629,
    ],
    [
        37.537508,
        127.066855,
    ],
    [
        37.537471,
        127.066814,
    ],
    [
        37.537328,
        127.066246,
    ],
    [
        37.537229,
        127.065546,
    ],
    [
        37.53704,
        127.064653,
    ],
    [
        37.536993,
        127.064317,
    ],
    [
        37.536637,
        127.063311,
    ],
    [
        37.536545,
        127.062974,
    ],
    [
        37.536529,
        127.062617,
    ],
    [
        37.536332,
        127.061654,
    ],
    [
        37.536334,
        127.061016,
    ],
    [
        37.536134,
        127.060874,
    ],
    [
        37.535166,
        127.060329,
    ],
    [
        37.535074,
        127.060306,
    ],
    [
        37.534933,
        127.060312,
    ],
    [
        37.534931,
        127.06012,
    ],
    [
        37.534572,
        127.059918,
    ],
    [
        37.53454,
        127.059877,
    ],
    [
        37.534529,
        127.059828,
    ],
    [
        37.534538,
        127.059784,
    ],
    [
        37.534652,
        127.059472,
    ],
    [
        37.533945,
        127.059156,
    ],
    [
        37.533409,
        127.05884,
    ],
    [
        37.533268,
        127.058826,
    ],
    [
        37.533156,
        127.058767,
    ],
    [
        37.532775,
        127.058558,
    ],
    [
        37.532804,
        127.058478,
    ],
    [
        37.532425,
        127.058329,
    ],
    [
        37.531973,
        127.058111,
    ],
    [
        37.52847,
        127.05614,
    ],
    [
        37.528156,
        127.055952,
    ],
    [
        37.527555,
        127.055518,
    ],
    [
        37.527525,
        127.055598,
    ],
    [
        37.526924,
        127.055258,
    ],
    [
        37.525788,
        127.054586,
    ],
    [
        37.525527,
        127.054358,
    ],
    [
        37.525233,
        127.054042,
    ],
    [
        37.525013,
        127.053517,
    ],
    [
        37.524936,
        127.052806,
    ],
    [
        37.525673,
        127.052666,
    ],
    [
        37.525222,
        127.048983,
    ],
    [
        37.524452,
        127.048701,
    ],
    [
        37.524273,
        127.047404,
    ],
    [
        37.524433,
        127.047317,
    ],
    [
        37.524427,
        127.047198,
    ],
    [
        37.524961,
        127.046917,
    ],
    [
        37.52468,
        127.04451,
    ],
    [
        37.524531,
        127.043386,
    ],
    [
        37.524379,
        127.042053,
    ],
    [
        37.524267,
        127.041259,
    ],
    [
        37.524049,
        127.039382,
    ],
    [
        37.524659,
        127.039589,
    ],
    [
        37.524798,
        127.038923,
    ],
    [
        37.524262,
        127.038738,
    ],
    [
        37.524309,
        127.038532,
    ],
    [
        37.523951,
        127.03841,
    ],
    [
        37.523748,
        127.037768,
    ],
    [
        37.523431,
        127.037938,
    ],
    [
        37.52338,
        127.037778,
    ]
];
export default function MainMap(){
    const here = useRouter().route;
    const [isLogined, setLogined] = useState(false);
    useEffect(()=>{
        setLogined(localStorage.getItem('lg'));
    })
    
    return(
        <MapContainer center={here==='/search' || here==='/child/Loc' ? [37.6379, 127.0326] : [37.53454, 127.059877]} zoom={here!=='/search' ? 13.5 : 14} className="leaflet-container" style={{width: '-webkit-fill-available', height: '100vh', zIndex:1}} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[37.6379, 127.0326]} />

            {isLogined && <><Polyline positions={polyRoute} pathOptions={{color: 'blue', weight: 10}}/>
            <Marker position={polyRoute[0]}/>
            <Marker position={polyRoute[polyRoute.length-1]}/></>}
        </MapContainer>
    )
}

function pathFinder(data){
    var apiKey = '10f1addb-aa8b-4e31-8fe1-3fab84534f5c';
    var start = data.from; //시작위치 위도,경도 (서울 중심)
    var end = data.to; //목적지위치 위도, 경도 (강남)
    var routingUrl = `https://graphhopper.com/api/1/route?point=${start.join(',')}&point=${end.join(',')}&vehicle=foot&locale=de&points_encoded=false&key=${apiKey}`;

    return fetch(routingUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data.paths[0].points.coordinates);
            return data.paths[0].points.coordinates;
    });
}
