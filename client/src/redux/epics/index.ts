import { combineEpics } from "redux-observable";
import { mergeMap, filter } from "rxjs/operators";
import {
   GET_CONTACTS,
   GET_CONTACTS_SUCCESS,
   GET_CONTACTS_FAILURE,
   ADD_CONTACT,
   ADD_CONTACT_SUCCESS,
   ADD_CONTACT_FAILURE,
} from "../actions/types";

function getContactsEpic(action$: any) {
   return action$
      .pipe(
         filter((action: any) => action.type === GET_CONTACTS),
         mergeMap(async () => {
            try {
               const res = await fetch("http://localhost:5000/contacts");
               const contacts = await res.json();
               return {
                  type: GET_CONTACTS_SUCCESS,
                  payload: contacts,
               };
            } catch (error: unknown) {
               return {
                  type: GET_CONTACTS_FAILURE,
                  payload: (error as Error).message,
               };
            }
         })
      );
}

function addContactEpic(action$: any) {
   return action$
      .pipe(
         filter((action: any) => action.type === ADD_CONTACT),
         mergeMap(async (action: any) => {
            try {
               const response = await fetch("http://localhost:5000/contacts", {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json"
                  },
                  body: JSON.stringify(action.payload),
               });
               const contacts = await response.json();
               return {
                  type: ADD_CONTACT_SUCCESS,
                  payload: contacts,
               };
            } catch (error: unknown) {
               return {
                  type: ADD_CONTACT_FAILURE,
                  payload: (error as Error).message,
               };
            }
         })
      );
}

export const rootEpic = combineEpics(getContactsEpic, addContactEpic);
