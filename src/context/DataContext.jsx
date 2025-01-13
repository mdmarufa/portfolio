import { createContext, useState } from 'react'
import Data from './data'

const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [data, setData] = useState(Data);

  const updateData  = newData => {
    setData(newData)
  };

  return (
    <DataContext.Provider value={{data, updateData}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;