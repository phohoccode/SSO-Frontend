import { 
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST
 } from '../action/accountAction';

const INITIAL_STATE = {
    userInfo: {
        username: '',
        email: '',
        access_token: '',
        refresh_token: '',
        groupWithRoles: {}
    },
    isLoading: false,
    errMessage: ''
};

const accountReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }

        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                userInfo: action.user,
                isLoading: false,
                errMessage: ''
            }
        }

        case USER_LOGIN_FAILED: {
            return {
                ...state,
                isLoading: false,
                errMessage: action.error
            }
        }

        default: return state;
    }
};

export default accountReducer;