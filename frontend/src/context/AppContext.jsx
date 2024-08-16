import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [searchResultsData, setSearchResultData] = useState({
    location: "noida",
    propertyType: [],
    propertyCondition: [],
    bhkType: [],
    bugetType: "1000",
    builtUpArea: "",
    furnishedType: [],
    facingType: [],
    PostedBy: [],
    sortOrder: "",
  });
  return (
    <AppContext.Provider value={{ searchResultsData, setSearchResultData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
