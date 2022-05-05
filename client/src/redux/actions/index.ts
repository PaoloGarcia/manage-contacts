import { TContact } from "../../types";
import {
   GET_CONTACTS,
   ADD_CONTACT,
   DELETE_CONTACTS,
   EDIT_CONTACT,
} from "./types";

export const getContacts = () => ({
   type: GET_CONTACTS,
});

export const addContact = (contact: TContact) => ({
   type: ADD_CONTACT,
   payload: contact,
});

export const deleteContact = (id: string) => ({
   type: DELETE_CONTACTS,
   payload: id,
});

export const editContact = (id: string) => ({
   type: EDIT_CONTACT,
   payload: id,
});
