import {
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE,
    ADD_CONTACT,
    DELETE_CONTACTS,
    EDIT_CONTACT
} from "./types";

export const getContacts = () => {
    return {
        type: GET_CONTACTS,
    };
};

export const getContactsSuccess = contacts => {
    return {
        type: GET_CONTACTS_SUCCESS,
        payload: contacts,
    };
};

export const getContactsFailure = error => {
    return {
        type: GET_CONTACTS_FAILURE,
        payload: error,
    };
};

export const addContact = user => { };

export const deleteContact = id => { };

export const editContact = id => { };