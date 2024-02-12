import axios from "axios";


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoic2FycmlhZGV2IiwiYSI6ImNsc2FvYjFybjA1bGoyaXFtNDF5aGNrZG4ifQ.5tFk8o5yXhgkL7g3NYyfVw'
    }
});

export default directionsApi;