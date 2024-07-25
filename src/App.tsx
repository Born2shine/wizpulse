import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import AppRoute from "./routes"
import { persistor, store } from "./redux/store";


function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
