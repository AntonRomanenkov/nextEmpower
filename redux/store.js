import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
  token: "",
  message: ""
}

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_FAILED: 'LOGIN_FAILED',
  REGISTER: 'REGISTER',
  REGISTER_FAILED: 'REGISTER_FAILED'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return Object.assign({}, state, {
        token: action.token,
        message: action.message
      })
    case actionTypes.LOGIN_FAILED:
      return Object.assign({}, state, {
        token: action.token,
        message: action.message
      })
    case actionTypes.REGISTER:
      return Object.assign({}, state, {
        message: action.message
      })
    case actionTypes.REGISTER_FAILED:
      return Object.assign({}, state, {
        message: action.message
      })
    default:
      return state
  }
}

export const LOGIN = () => {
  return { type: actionTypes.LOGIN }
}

export const LOGIN_FAILED = () => {
  return { type: actionTypes.LOGIN_FAILED }
}
export const REGISTER = () => {
  return { type: actionTypes.REGISTER }
}
export const REGISTER_FAILED = () => {
  return { type: actionTypes.REGISTER_FAILED }
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
