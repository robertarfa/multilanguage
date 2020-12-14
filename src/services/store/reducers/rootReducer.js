/* eslint no-shadow: ["error", { "allow": ["location"] }] */
import { combineReducers } from 'redux'

import { languageAction } from './languageReducer'

const reducers = combineReducers({
  languageAction,

})

export default reducers

