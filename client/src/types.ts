export type TContact = {
   id: string;
   name: string;
   phone: string;
   email: string;
};

export type TValidationError = {
   name?: string;
   phone?: string;
   email?: string;
};
