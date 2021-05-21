import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './state/store'
import Register from './components/pages/Register'

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Register} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </StoreProvider>
  )
}

export default App
