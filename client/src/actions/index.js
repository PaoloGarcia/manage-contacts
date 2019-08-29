import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACTS,
    EDIT_CONTACT,
} from "./types";

/**
 * GET CONTACT
 ********************************************************************/

export const getContacts = () => {
    return {
        type: GET_CONTACTS,
    };
};

/**
 * ADD CONTACT
 ********************************************************************/

export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact,
    };
};

/**
 * DELETE CONTACT
 ********************************************************************/

export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACTS,
        payload: id,
    };
};

/**
 * EDIT CONTACT
 ********************************************************************/

export const editContact = (id) => {
    return {
        type: EDIT_CONTACT,
        payload: id,
    };
};