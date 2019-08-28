import { combineReducers } from 'redux';
import nguoiDung from './nguoiDung';
import errors from './errors';
import khoaHoc from './khoaHoc'
const rootReducer = combineReducers({
    nguoiDung, errors,khoaHoc
})

export default rootReducer;