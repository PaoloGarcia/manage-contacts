import { combineEpics } from "redux-observable";
import { Observable } from "rxjs";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of"
import { ajax } from "rxjs/observable/dom/ajax";

import {
    GET_CONTACTS,
} from "../actions/types";

import {
    getContactsSuccess,
    getContactsFailure,
} from "../actions";

const getContactsEpic = (action$) => {
    return action$
        .ofType(GET_CONTACTS)
        .switchMap(() => {
            return ajax
                .getJSON("http://localhost:5000/contacts")
                .map(data => data)
        })
        .map(contacts => {
            return getContactsSuccess(contacts);
        })
        .catch(error => Observable.of(getContactsFailure(error.message)));
}

export const rootEpic = combineEpics(getContactsEpic);