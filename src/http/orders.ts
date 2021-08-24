import {BASE_URL, deleteRequest, getRequest, postRequest} from "./requests";
import {PlaceOrderRequest} from "../types/alltypes";

export const SEARCH_ORDERS_URL = (filter?: string) => `${BASE_URL}/order/search?filter=${filter || ""}`;
export const PLACE_ORDER_URL = `${BASE_URL}/order/place`;
export const DELETE_ORDER_URL = (orderId: string) => `${BASE_URL}/order/delete?id=${orderId}`;

export const deleteOrder = (orderId: string) => {
    return deleteRequest(DELETE_ORDER_URL(orderId));
};

export const placeOrder = (order: PlaceOrderRequest) => {
    return postRequest(PLACE_ORDER_URL, order)
};

export const searchOrders = (filter: string) => {
    return getRequest(SEARCH_ORDERS_URL(filter))
        .then(data => {
            return data.text()
        })
        .then((text: string) => {
            return JSON.parse(text);
        })
};

