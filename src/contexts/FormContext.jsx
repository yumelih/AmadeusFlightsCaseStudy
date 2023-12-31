import { createContext, useContext, useReducer } from "react";

const FormContext = createContext();

const initialState = {
    departureAirport: '',
    arrivalAirport: '',     
    tripOptions: ["Round trip", "One way"],
    currentTripOption: 'Round trip',
    departureDate: new Date(),
    arrivalDate: null,
    sortBy:null,
    isSearching: false,
}

function reducer(state, action) {
    switch(action.type) {
        case 'formSubmit/update': 
            return {
                ...state,
                isSearching: action.payload,
            }
        case'departureAirport/update':
            return {
                ...state,
                departureAirport: action.payload,
            };
        case'arrivalAirport/update':
            return {
                ...state,
                arrivalAirport: action.payload,
            };
        case'departureDate/update':
            return {
                ...state,
                departureDate: action.payload,
            };
        case'arrivalDate/update':
            return {
                ...state,
                arrivalDate: action.payload,
            };
        case'currentTripOption/update':
            return {
                ...state,
                currentTripOption: action.payload,
            }; 
        case'sortBy/update':
            return {
                ...state,
                sortBy: action.payload,
            };
        default:
            throw new Error("Action unknown");
    }
}

function FormProvider({children}) {
    const [{departureAirport, arrivalAirport, tripOptions, currentTripOption, departureDate, arrivalDate, sortBy, isSearching}, dispatch] = useReducer(reducer, initialState)


    return (
        <FormContext.Provider value={{
            departureAirport, arrivalAirport, tripOptions, currentTripOption, departureDate, arrivalDate, sortBy, isSearching, dispatch
        }}>
            {children}
        </FormContext.Provider>
    )
}

function useForm() {
    const context = useContext(FormContext);
    if(context === undefined)  throw new Error("FormContext is used outside of the FormProvider");
    return context;
}

export {FormProvider, useForm}