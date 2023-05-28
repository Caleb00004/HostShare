import { createContext, useState } from "react";
import JSON from '../listings.json'

const appContext = createContext()


function AppContextProvider({children}) {
    let data = []
    let locationData = []
    const [mapCenter, setMapCenter] = useState({ lat: 9.07636, lng: 7.397796 })

    for(let i = 0; i < 21; i++) {   
        data.push(JSON.data[i])
    }

    data.map(data => locationData.push(data.info.location))

    // console.log(data)
    console.log('YES')
    return (
        <appContext.Provider value={{data, locationData, mapCenter, setMapCenter}}>
            {children}
        </appContext.Provider>
    )
}

export {AppContextProvider, appContext}