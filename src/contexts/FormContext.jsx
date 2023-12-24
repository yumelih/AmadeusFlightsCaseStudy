import { createContext, useContext, useReducer } from "react";

const FormContext = createContext();

const initialState = {
   
    departureAirport: '',
    arrivalAirport: '',     
    tripTypeOptions: ["Round trip", "One way"],
    currentTripType: '',
    departureDate: new Date(),
    arrivalDate: null,

}

function reducer(state, action) {
    switch(action.type) {
        case'departureAirport/update':
            return {
                ...state,
                departureAirport: action.payload,
            };
        case'arrivalAirport/update':
            return {
                ...state,
                departureAirport: action.payload,
            };
        default:
            throw new Error("Action unknown");
    }
}

function FormProvider({children}) {
    const [{departureAirport, arrivalAirport, tripTypeOptions, currentTripType, departureDate, arrivalDate}, dispatch] = useReducer(reducer, initialState)


    return (
        <FormContext.Provider value={{
            departureAirport, arrivalAirport, tripTypeOptions, currentTripType, departureDate, arrivalDate, dispatch
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