import { createStore, applyMiddleware, compose } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from './reducers/rootReducer'

export default function configureStore() {

  const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
  }

  const middlewares = []

  const composeEnhancers =
    typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
      compose


  const pReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    pReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}



