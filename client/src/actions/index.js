import {
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE,
    ADD_CONTACT,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_FAILURE,
    DELETE_CONTACTS,
    DELETE_CONTACTS_SUCCESS,
    DELETE_CONTACTS_FAILURE,
    EDIT_CONTACT,
    EDIT_CONTACT_SUCCESS,
    EDIT_CONTACT_FAILURE,
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

export const getContactsFailure = message => {
    return {
        type: GET_CONTACTS_FAILURE,
        payload: message,
    };
};

export const addContact = () => {
    return {
        type: ADD_CONTACT,
    };
};

export const addContactSuccess = user => {
    return {
        type: ADD_CONTACT_SUCCESS,
        payload: user,
    };
};

export const addContactFailure = message => {
    return {
        type: ADD_CONTACT_FAILURE,
        payload: message,
    };
};

export const deleteContact = () => {
    return {
        type: DELETE_CONTACTS,
    };
};

export const deleteContactSuccess = id => {
    return {
        type: DELETE_CONTACTS_SUCCESS,
        payload: id,
    };
};

export const deleteContactFailure = message => {
    return {
        type: DELETE_CONTACTS_FAILURE,
        payload: message,
    };
};

export const editContact = () => {
    return {
        type: EDIT_CONTACT,
    };
};

export const editContactSuccess = id => {
    return {
        type: EDIT_CONTACT_SUCCESS,
        payload: id,
    };
};

export const editContactFailure = message => {
    return {
        type: EDIT_CONTACT_FAILURE,
        payload: message,
    };
};