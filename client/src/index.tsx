import { StrictMode } from "react"
import { render } from 'react-dom'
import { Provider } from "react-redux"
import store from "./redux/store"
import * as serviceWorker from './serviceWorker'
import App from './App'
import './index.scss'

render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
