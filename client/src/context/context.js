import React from "react";
import { initialState, reducer } from "./Reducer";

const Context = React.createContext();

export default function ContextProvider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <Context.Provider
            value={[state, dispatch]}
        >
            {children}
        </Context.Provider>
    );
}

export const useContextData = () => {
    const context = React.useContext(Context);
    return context;
}

