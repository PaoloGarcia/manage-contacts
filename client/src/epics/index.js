import { combineEpics } from "redux-observable";
import { mergeMap, ofType } from "rxjs/operators";

import {
    GET_CONTACTS, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE,
} from "../actions/types";

function getContactsEpic(action$) {
    return action$
        .pipe(
            // filter(action => action.type === GET_CONTACTS),
            ofType(GET_CONTACTS),
            mergeMap(async () => {
                try {
                    const res = await fetch("http://localhost:5000/contacts");
                    const contacts = await res.json();
                    return {
                        type: GET_CONTACTS_SUCCESS,
                        payload: contacts,
                    };
                } catch (err) {
                    return {
                        type: GET_CONTACTS_FAILURE,
                        payload: err.message,
                    };
                }
            })
        );
}

export const rootEpic = combineEpics(getContactsEpic);