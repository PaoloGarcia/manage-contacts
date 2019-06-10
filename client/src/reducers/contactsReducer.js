
import {
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE,
} from "../actions/types";

const initialState = {
    contacts: [],
    isLoading: false,
    error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        case GET_CONTACTS_SUCCESS:
            return {
                contacts: [...action.payload],
                isLoading: false,
                error: null,
            };
        case GET_CONTACTS_FAILURE:
            return {
                contacts: [],
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};