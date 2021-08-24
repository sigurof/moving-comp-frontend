import React from "react";
import {Order} from "../types/alltypes";
import {deleteOrder} from "../http/orders";
import {serviceTypeToString} from "../app/App";


const DeleteButton = ({id, onDelete}: { id: string, onDelete: Function }) => {
    return (
        <button onClick={() => {
            console.log(`deleting ${id}`);
            deleteOrder(id)
                .then(result => onDelete())
        }}>
            Delete
        </button>
    )
};

const EditAndDeletableOrder = ({order, onDelete}: { order: Order, onDelete: Function }) => {
    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.name}</td>
            <td>{order.phone}</td>
            <td>{order.email}</td>
            <td>{order.date}</td>
            <td>{serviceTypeToString(order.serviceType)}</td>
            <td>
                Edit
            </td>
            <td>
                <DeleteButton id={order.id} onDelete={onDelete}/>
            </td>
        </tr>
    )
};

export default EditAndDeletableOrder;
