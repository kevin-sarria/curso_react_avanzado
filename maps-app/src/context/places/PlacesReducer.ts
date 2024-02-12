import { PlacesState } from ".";
import { Feature } from "../../interfaces";

type PlacesAction =
    | { type: 'setUserLocation', payload: [number, number] }
    | { type: 'setLoadingPlaces' }
    | { type: 'setPlaces', payload: Feature[] }
    ;

export const PlacesReducer = ( state: PlacesState, action: PlacesAction ): PlacesState => {

    switch (action.type) {
        case 'setUserLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
        
        case 'setLoadingPlaces':
            return {
                ...state,
                isLoading: true,
                places: []
            }
        
        case 'setPlaces':
            return {
                ...state,
                isLoading: false,
                places: action.payload
            }


        default:
            return state;
    }

}