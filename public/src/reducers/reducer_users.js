import { SIGNIN_USER, SIGNIN_USER_SUCCES, SIGNIN_USER_ERROR,
         ME_FROM_TOKEN, ME_FROM_TOKEN_SUCCES, ME_FROM_TOKEN_ERROR, LOGOUT_USER } from '../actions/login';

//user = userobj,
// status can be:
// 1. 'storage' ie. localstorage / sessionstorage)
// 2. 'signup' (signing up)
// 3. 'signin' (signing in)
// 4. 'validate'(validate fields)
// 5. 'validate_email' (validating email token)
// 5. 'authenticated'(after signin)
// 6. 'logout' (after logout)

const INITIAL_STATE = { user:null, status:null, error:null, loading:false }

export default function(state=INITIAL_STATE, action) {
  let error;
  switch(action.type) {
    case SIGNIN_USER:
      return { ...state, user: null, status: 'signin', error: null, loading: true }
    case SIGNIN_USER_SUCCES:
      return { ...state, user: action.payload.user, status: 'authenticated', error: null, loading: false}
    case SIGNIN_USER_ERROR:
      error = action.payload.data || { message: action.payload.message }
      return { ...state, user: null, status: 'signin', error: error, loading: false }
    case ME_FROM_TOKEN:
      return { ...state, user: null, status: 'storage', error: null, 'loading': true }
    case ME_FROM_TOKEN_SUCCES:
      return { ...state, user: action.payload, status: 'authenticated', error: null, loading: false }
    case ME_FROM_TOKEN_ERROR:
      error = action.payload.data || { message: action.payload.message }
      return { ...state, user: null, status: 'storage', error: error, loading: false }
    case LOGOUT_USER:
      return {...state, user: null, status: 'logout', error: null, loading: false }
    default:
      return  { ...state };
  }
}
