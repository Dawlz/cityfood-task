import { useMemo, useState } from "react";
import { useTable, Column, useColumnOrder, useSortBy, usePagination } from "react-table";
import "../../App.css"

type TableTypes = {
    jsonData: {}[];
    Columns: Column<object>[];
}

const HoldingsView = (props: TableTypes) => {
    const {jsonData, Columns} = props;
    const [orderChanged, setOrderChanged] = useState(false);

    const columns = useMemo(()=> Columns, [Columns])
    const data = useMemo(() => jsonData, [jsonData])

    const {
        getTableBodyProps,
        getTableProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setColumnOrder,
        state: { pageIndex },
    } = useTable({
          columns,
          data,
        },
        useColumnOrder,
        useSortBy,
        usePagination,
    );

    const changeOrder = () => {
        setOrderChanged(!orderChanged)
        orderChanged ? setColumnOrder(
            [
            "market_value_ccy",
            "latest_chg_pct",
            "market_price",
            "avg_price",
            "asset_class",
            "ticker",
            "name",
        ]) : setColumnOrder(
            [
              "name",
              "ticker",
              "asset_class",
              "avg_price",
              "market_price",
              "latest_chg_pct",
              "market_value_ccy",
            ])
    };
    
    return (
        <div className = "main">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render("Header")}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                            <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            ))}
                        </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className = "footer">
                <span>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                </span>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {"<<"}
                </button>
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    Previous
                </button>
                <span>| Go to page : {""}</span>
                <input
                    type="number"
                    value={pageIndex + 1}
                    max = {pageCount}
                    onChange={(e) => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                        gotoPage(pageNumber);
                    }}
                    style={{ width: "30px" }}
                />
                <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >
                    Next
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {">>"}
                </button>
            </div>
                <button onClick={changeOrder} className = "reorder">Reorder</button>
        </div>
    )
}

export default HoldingsView
