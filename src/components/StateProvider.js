import React, { createContext, useContext, useReducer } from "react";

//Prepares the dataLayar
export const StateContext = createContext();

//Wrap our app and provide Data layer
export const StateProvider = ({reducer, initialState, children}) => {
	// const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<StateContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</StateContext.Provider>
	)
};

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);