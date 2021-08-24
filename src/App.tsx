import React, {useState} from 'react';


const BASE_URL = "http://localhost:8080";
const GET_URL = (filter?: string) => `${BASE_URL}/order/search?filter=${filter || ""}`;
const PLACE_URL = `${BASE_URL}/order/place`;

function useOrders(initialValue: string): [string, Function] {
    const [orders, setOrders]: [string, Function] = useState(initialValue)
    const fetchOrders: Function = function (url: string) {
        return fetch(url)
            .then(data => data.text())
            .then((text: string) => setOrders(text))
    };
    return [orders, fetchOrders]
}

type MOVING = "MovingServiceDto"
type PACKING = "PackingServiceDto"
type CLEANING = "CleaningServiceDto"

interface MovingService {
    "@type": MOVING
    fromAdr: string,
    toAdr: string
}

interface PackingService {
    type: PACKING,
    adr: string
}

interface CleaningService {
    type: CLEANING,
    adr: string
}

type ServiceType = MovingService | PackingService | CleaningService

interface PlaceOrderRequest {
    name: String,
    phone: String,
    email: String,
    serviceType: ServiceType
    date: String
}

function App() {
    const [orders, fetchOrders]: [string, Function] = useOrders("");
    const filter = "";
    const movingService: MovingService = {
        "@type": "MovingServiceDto",
        fromAdr: "Oslo",
        toAdr: "Ski"
    };
    const body = {
        name: "Ola",
        phone: "123456789",
        email: "olanordmann@gmail.com",
        serviceType: movingService,
        date: "2012.02.20"
    };

    const creator = () => fetch(PLACE_URL, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
    });


    return (
        <div className={"App"}>
            <h1>Moving & Comp</h1>
            <button onClick={() => fetchOrders(GET_URL(filter))}>Fetch orders</button>
            <button onClick={() => creator()}>Lag rad</button>
            <div>{orders.toString()}</div>
        </div>
    )

}


export default App;
