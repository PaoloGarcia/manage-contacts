import { combineEpics } from "redux-observable";
import { Observable } from "rxjs";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of"
import { ajax } from "rxjs/observable/dom/ajax";

export const rootEpic = combineEpics();