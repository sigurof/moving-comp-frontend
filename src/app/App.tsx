import React, {useEffect, useState} from 'react';
import {CleaningService, MovingService, Order, PackingService, ServiceType} from "../types/alltypes";
import ComponentTable from "../components/ComponentTable";
import EditAndDeletableOrder from "../components/EditAndDeletableRow";
import {defaultPlaceOrderReq} from "../data/default-data";
import {placeOrder, searchOrders} from "../http/orders";

const myState = {
    filter: ""
};

function debounce2(func: Function, wait: number): Function {
    let timeout: any;
    return function (this: any, ...args: any[]) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait)
    }
}

const useFilter = () => {
    return useState("")
};

const useOrders = (filter: string): [Order[], Function] => {
    const [orders, setOrders] = useState([]);
    const fetchOrders = () => {
        searchOrders(filter)
            .then(response => setOrders(response))
    };
    return [orders, fetchOrders];
};


function App() {
    const [filter, setFilter]: [string, Function] = useFilter();

    const [orders, fetchOrders]: [Order[], Function] = useOrders(filter)

    useEffect(() => {
        fetchOrders()
    }, [filter]);

    const columnNames: string[] = ["Id", "Name", "Phone", "E-Mail", "Service Date", "Type of Service", "Edit", "Delete"];
    const rows = orders.map((order: Order, idx: number) => {
            return (<EditAndDeletableOrder key={idx} order={order} onDelete={() => fetchOrders()}/>)
        }
    );
    return (
        <div className={"App"}>
            <h1>Moving & Comp</h1>
            <input onChange={event => setFilter(event.target.value)}/>
            <br/>
            <button onClick={() => fetchOrders()}>
                Fetch Orders
            </button>
            <button onClick={() => placeOrder(defaultPlaceOrderReq)}>Lag rad</button>
            <ComponentTable columnNames={columnNames} rows={rows}/>
        </div>
    )

}

export default App;


export function serviceTypeToString(serviceType: ServiceType) {
    let type = serviceType["@type"];
    if (type === "MovingServiceDto") {
        const movingService = (serviceType as MovingService);
        return `Moving between addresses: ${movingService.fromAdr} to ${movingService.toAdr}`
    } else if (type === "PackingServiceDto") {
        const packingService = (serviceType as PackingService);
        return `Packing on address: ${packingService.adr}`;
    } else if (type === "CleaningServiceDto") {
        const cleaningService = (serviceType as CleaningService);
        return `Cleaning on address: ${cleaningService.adr}`;

    } else {
        throw Error("Ikke implementert!");
    }
}
