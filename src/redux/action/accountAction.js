import axios from "../../custom/axios"

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'


export const doLogin = (ssoToken) => {
    return async (dispatch, getState) => {
        dispatch({ type: USER_LOGIN_FAILED })

        const response = await axios.post(
            process.env.REACT_APP_BACKEND_VERIFY_TOKEN,
            { ssoToken },
            { withCredentials: true }
        )

        if (response && +response.EC === 0) {
            dispatch({ type: USER_LOGIN_SUCCESS, user: response.DT })
        } else {
            dispatch({ type: USER_LOGIN_FAILED, error: response.EM })
        }
    }
}