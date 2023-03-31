import { useContext, useState } from "react";
import { createContext } from "react";
import React from "react";

export const DataContext = createContext();

const DataProvider = () =>{
    
    // const [account, setAccount] = useState('Suje');
    const {setAccount} = useContext(DataContext);

    return(
        <DataContext.Provider value={{
            // account,
            setAccount
        }}>
        </DataContext.Provider>
    )
}

export default DataProvider;