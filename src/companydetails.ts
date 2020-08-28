export interface Companydetails{
    id:number;
    name: string;
    email_primary: string;
    phone_primary: number;
    gstin: string;
    pan: string;
    owner:number;
}

export interface ClientDetails{
    id:number;
    first_name: string;
    email_primary: string;
    phone_primary: number;
    company: string;
}

export interface Allregion{
    id:number;
    name: string;
    
}


export interface Users{
    id:number;
    name: string;
}


export interface LeadSource{
    id:number;
    name: string;
}
