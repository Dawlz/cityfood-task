import { useState, useMemo, useEffect } from "react";
import { useTable } from "react-table";
import Columns, {holdingColumn} from "../columns/holdingcolumn";

const HoldingsView = () => {
    const [holding, setHolding] =  useState([{}]);
    useEffect(() => {
        fetch("https://canopy-frontend-task.now.sh/api/holdings")
            .then(res => res.json())
            .then(res => {setHolding([...res.payload])})
    }, [holding])

    const columnView = useMemo(()=> Columns, [])
    const holdingData = useMemo(() => holding, [holding])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable <holdingColumn> ({
                columnView,
                holdingData
    })

    return (
        <div>
            
        </div>
    )
}

export default HoldingsView
