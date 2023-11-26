import React, { useContext, useReducer } from "react";

const AppContext = React.createContext();

const initialState = {
  isDarkActive: true,
};

const reducer = (state, action) => {
  if (action.type == "TOGGLE_DARK")
    return { ...state, isDarkActive: !state.isDarkActive };
  return state;
};

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleDark = () => dispatch({ type: "TOGGLE_DARK" });

  return (
    <AppContext.Provider value={{ ...state, toggleDark }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobally = () => useContext(AppContext);
