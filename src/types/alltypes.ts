


export type MOVING = "MovingServiceDto"
export type PACKING = "PackingServiceDto"
export type CLEANING = "CleaningServiceDto"

export interface MovingService {
    "@type": MOVING
    fromAdr: string,
    toAdr: string
}

export interface PackingService {
    "@type": PACKING,
    adr: string
}

export interface CleaningService {
    "@type": CLEANING,
    adr: string
}

export type ServiceType = MovingService | PackingService | CleaningService

export interface PlaceOrderRequest {
    name: String,
    phone: String,
    email: String,
    serviceType: ServiceType
    date: String
}

export type nullableString = string | null

/*
export interface Order {
    id: number,
    name: String,
    phone: String,
    email: String,
    serviceType: ServiceType
    date: String
}
*/
export interface Order {
    id: string;
    name: string
    email: string;
    phone: string;
    serviceType: ServiceType;
    date: string;
}
