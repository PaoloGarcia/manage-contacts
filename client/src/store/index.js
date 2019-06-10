import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

import rootReducer from "../reducers";
import { rootEpic } from "../epics";

const epic = createEpicMiddleware();

// const initialState = {};
const middlewares = [epic,];

const store = createStore(
    rootReducer,
    // initialState,
    compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

epic.run(rootEpic);

export default store;