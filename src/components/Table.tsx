import React from 'react'
import {nullableString} from "../types/alltypes";

export const TableHeader = ({fields}: { fields: string[] }) => {
    return (
        <thead>
        <tr>
            {fields.map((field, idx) => (<th key={idx}>{field}</th>))}
        </tr>
        </thead>
    )
};

const TableRow = ({data}: { data: nullableString[] }) => {
    return (
        <tr>
            {
                data.map(columnData => (
                    <td>{columnData}</td>
                ))
            }
        </tr>
    )
};


function fieldsFromRows(rows: object[]): (keyof object)[] {
    if (rows.length === 0) return [];
    const obj: object = rows[0]
    return (
        Object.keys(obj) as (keyof object)[]
    )
}

const Table = ({columnNames, rows}: { columnNames: string[], rows: nullableString[][] }) => {
    if (columnNames?.length === 0 && rows?.length === 0) {
        return null;
    }

    const headerRow = columnNames?.length > 0 ? <TableHeader fields={columnNames}/> : null;
    return (
        <div className="table-wrapper">
            <table>
                {headerRow}
                <tbody>
                {rows.map(row => (
                    <TableRow data={row}/>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default Table;