import axios from "../../custom/axios"

// login
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'

// logout
export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST'
export const USER_LOGOUT_FAILED = 'USER_LOGOUT_FAILED'
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'

export const doLogin = (ssoToken) => {
    return async (dispatch, getState) => {
        dispatch({ type: USER_LOGIN_REQUEST })

        const response = await axios.post(
            process.env.REACT_APP_BACKEND_SSO_VERIFY_TOKEN,
            { ssoToken }
        )

        if (response && +response.EC === 0) {
            dispatch({ type: USER_LOGIN_SUCCESS, user: response.DT })
        } else {
            dispatch({ type: USER_LOGIN_FAILED, error: response.EM })
        }
    }
}


export const doLogout = () => {
    return async (dispatch, getState) => {
        dispatch({ type: USER_LOGOUT_REQUEST })

        const response = await axios.post(
            process.env.REACT_APP_BACKEND_SSO_LOGOUT
        )

        if (response && +response.EC === 0) {
            dispatch({ type: USER_LOGOUT_SUCCESS })
        } else {
            dispatch({ type: USER_LOGOUT_FAILED, error: response.EM })
        }
    }
}

export const doGetAccount = () => {
    return async (dispatch, getState) => {
        dispatch({ type: USER_LOGIN_REQUEST })

        const response = await axios.get(
            process.env.REACT_APP_BACKEND_SSO_GET_ACCOUNT
        )

        if (response && +response.EC === 0) {
            dispatch({ type: USER_LOGIN_SUCCESS, user: response.DT })
        } else {
            dispatch({ type: USER_LOGIN_FAILED, error: response.EM })
        }
    }
}