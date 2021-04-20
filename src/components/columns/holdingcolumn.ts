import { Column } from "react-table";
interface holdingColumn {
    name: string;
    ticker: string;
    asset_class: string;
    avg_price: number;
    market_price: number;
    latest_chg_pct : number;
    market_value_ccy: number;
}

const Columns: Column<holdingColumn>[] = [
    {
        Header: "Name",
        accessor: "name" as keyof holdingColumn
    },
    {
        Header: "Ticker",
        accessor: "ticker" as keyof holdingColumn
    },
    {
        Header: "Asset Class",
        accessor: "asset_class" as keyof holdingColumn
    },
    {
        Header: "Average Price",
        accessor: "avg_price" as keyof holdingColumn
    },
    {
        Header: "Market Price",
        accessor: "market_price" as keyof holdingColumn
    },
    {
        Header: "Latest change percentage",
        accessor: "latest_chg_pct" as keyof holdingColumn
    },
    {
        Header: "Market Value in Base CCY",
        accessor: "market_value_ccy" as keyof holdingColumn
    }
]


export default Columns;
export type {holdingColumn}