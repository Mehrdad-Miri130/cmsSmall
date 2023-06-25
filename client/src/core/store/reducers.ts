import { combineReducers } from 'redux';

import mainInfoStore from './slice/mainInfo/mainInfoSlice';

const rootReducer = combineReducers({ mainInfoStore });

export default rootReducer;
