import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import formReducer from './reducer_form';
import usersReducer from './reducer_users';

const rootReducer = combineReducers({
  devices: formReducer,
  users: usersReducer,
  form: reduxFormReducer
})

export default rootReducer;
