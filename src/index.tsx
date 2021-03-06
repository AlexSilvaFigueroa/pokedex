import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
import reportWebVitals from './reportWebVitals'
import App from './presentation/views'

const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine()

const engine = new Styletron()

ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <App />
  </StyletronProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
