import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import App from "./App";
import "./index.css";

render(
   <StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </StrictMode>,
   document.getElementById("root")
);
