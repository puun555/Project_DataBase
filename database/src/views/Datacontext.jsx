import { createContext, useState } from 'react';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
