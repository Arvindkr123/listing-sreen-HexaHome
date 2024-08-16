import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const [searchResultsData, setSearchResultData] = useState({
    location: "noida",
    propertyType: [],
    propertyCondition: [],
    bhkType: [],
    bugetType: "",
    builtUpArea: "",
    furnishedType: [],
    facingType: [],
    postedByType: [],
    sortOrder: "",
  });
  return (
    <AppContext.Provider value={{ searchResultsData, setSearchResultData }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
