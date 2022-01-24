import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACTS,
    EDIT_CONTACT,
} from "./types";

/**
 * GET CONTACT
 ***************************************/
export const getContacts = () => ({
    type: GET_CONTACTS,
});

/**
 * ADD CONTACT
 ***************************************/
export const addContact = (contact) => ({
    type: ADD_CONTACT,
    payload: contact,
});

/**
 * DELETE CONTACT
 ***************************************/
export const deleteContact = (id) => ({
    type: DELETE_CONTACTS,
    payload: id,
});

/**
 * EDIT CONTACT
 ***************************************/
export const editContact = (id) => ({
    type: EDIT_CONTACT,
    payload: id,
});
