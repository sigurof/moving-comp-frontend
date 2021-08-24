import React from "react";
import {TableHeader} from "./Table";

const TableRow = ({}) => {

}

const ComponentTable = ({columnNames, rows}: { columnNames: string[], rows: React.ReactElement[] }) => {
    if (columnNames?.length === 0) {
        return null;
    }

    const headerRow = columnNames.length > 0 ? <TableHeader fields={columnNames}/> : null;
    return (
        <div className="table-wrapper">
            <table>
                {headerRow}
                <tbody>
                {rows.map(row => row)}
                </tbody>
            </table>
        </div>
    )
};

export default ComponentTable;
