import {CleaningService, MovingService, PlaceOrderRequest} from "../types/alltypes";


const movingService: MovingService = {
    "@type": "MovingServiceDto",
    fromAdr: "Oslo",
    toAdr: "Ski"
};
const cleaningService: CleaningService = {
    "@type": "CleaningServiceDto",
    adr: "Myrvoll"
};
export const defaultPlaceOrderReq : PlaceOrderRequest = {
    name: "Ola",
    phone: "123456789",
    email: "olanordmann@gmail.com",
    serviceType: cleaningService,
    date: "2012.02.20"
};
