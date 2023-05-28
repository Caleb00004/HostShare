import { createContext, useState } from "react";

const mapsContext = createContext()

function MapsContextProvider({children}) {
    const [geoError, setGeoError]  = useState({status: false, message: ''})
    const [userCoordinates,setUserCoordinates] = useState({lat:'', lng: ''})

    return (
        <mapsContext.Provider value={{geoError, setGeoError, userCoordinates, setUserCoordinates}}>
            {children}
        </mapsContext.Provider>
    )
}

export {MapsContextProvider, mapsContext}