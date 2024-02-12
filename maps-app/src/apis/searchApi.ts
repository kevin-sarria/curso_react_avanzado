import axios from "axios";


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoic2FycmlhZGV2IiwiYSI6ImNsc2FvYjFybjA1bGoyaXFtNDF5aGNrZG4ifQ.5tFk8o5yXhgkL7g3NYyfVw'
    }
});

export default searchApi;