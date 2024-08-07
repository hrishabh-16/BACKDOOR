// DTO :: VANDOR 
export interface CreateVandorInput {
    name: string,
    ownerName: string,
    foodType: [string],
    pincode: string,
    address: string,
    phone: string,
    email: string,
    password: string
}

// DTO :: VANDOR - LOGIN 
export interface VandorLoginInputs {
    email: string,
    password: string
}

// DTO :: VANDOR - PAYLOAD 
export interface VandorPayload {
    _id: string,
    email: string,
    name: string,
    foodTypes: [string];
}

// DTO :: VANDORO - EDIT
export interface EditVandorInput{
    name: string;
    address: string;
    phone: string;
    foodType:[string]
}