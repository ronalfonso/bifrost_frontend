import {FiltersContext} from "./FiltersContext";
import {useState} from "react";
import {CondoFilter} from "../models/condo-filter";
import {HouseFilter} from "../models/house-filter";

export const FiltersProvider = ({children}) => {
    const [homeSelected, setHomeSelected] = useState(null);
    const [condoSelected, setCondoSelected] = useState<CondoFilter[]>([])
    const [houseSelected, setHouseSelected] = useState<HouseFilter[]>([])

    const data = {
        homeSelected, setHomeSelected,
        condoSelected, setCondoSelected,
        houseSelected, setHouseSelected,
    }
    return (
        <FiltersContext.Provider value={data}>
            {children}
        </FiltersContext.Provider>
    )


}