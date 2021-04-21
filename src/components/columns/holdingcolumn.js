const Columns = [
    {
        Header: "Name",
        accessor: "name",
        type: "string"
    },
    {
        Header: "Ticker",
        accessor: "ticker",
        type: "string"
    },
    {
        Header: "Asset Class",
        accessor: "asset_class",
        type: "string"
    },
    {
        Header: "Average Price",
        accessor: "avg_price",
        Cell: ({ value }) => {
            let avg = value ? value : 0;
            return avg
        },
        type: "number"
    },
    {
        Header: "Market Price",
        accessor: "market_price",
        Cell: ({ value }) => {
            let avg = value ? value : 0;
            return avg
        },
        type: "number"
        
    },
    {
        Header: "Latest change percentage",
        accessor: "latest_chg_pct",
        type: "float"
    },
    {
        Header: "Market Value in Base CCY",
        accessor: "market_value_ccy",
        Cell: ({ value }) => {
            let avg = value ? value : 0;
            return avg
        },
        type: "float"
    }
]


export default Columns;