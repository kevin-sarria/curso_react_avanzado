import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FycmlhZGV2IiwiYSI6ImNsc2FvYjFybjA1bGoyaXFtNDF5aGNrZG4ifQ.5tFk8o5yXhgkL7g3NYyfVw';


if( !navigator.geolocation ) {
  alert('Tu navegador no tiene opcion de Geolocalizacion');
  throw new Error('Tu navegador no tiene opcion de Geolocalizacion');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
