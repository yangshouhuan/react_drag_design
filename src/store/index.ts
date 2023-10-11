import { combineReducers, createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import user from './reducers/user'
import visible from './reducers/visible'
import chart from './reducers/chart'
import defaultJson from './reducers/default_json'

const totalActions = combineReducers({
	user,
	visible,
	chart,
	defaultJson
})

const store = createStore(totalActions, applyMiddleware(thunk, promiseMiddleware, createLogger))

export default store