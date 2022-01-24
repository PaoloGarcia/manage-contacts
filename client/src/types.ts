export interface IContact {
    id: string,
    name: string,
    phone: string,
    email: string,
}

export interface IValidationError {
    name?: string,
    phone?: string,
    email?: string
}
