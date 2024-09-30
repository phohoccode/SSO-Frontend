import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../custom/axios'
import { doLogin } from "../../redux/action/accountAction";

function Code(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const firstRunRef = useRef(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const message = useSelector(state => state.account.errMessage)
    const user = useSelector(state => state.account.userInfo)


    useEffect(() => {
        if (user && user.access_token) {
            navigate('/')
        }
    }, [user])

    useEffect(() => {
        const ssoToken = searchParams.get('ssoToken')
        if (ssoToken && firstRunRef.current === false) {
            firstRunRef.current = true
            dispatch(doLogin(ssoToken))
        }
    }, [])

    return (
        <>
            {message &&
                <div>
                    <span>{message} -
                        <a href={`${process.env.REACT_APP_BACKEND_SSO}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`}>Đăng nhập</a>
                    </span>
                </div>
            }
        </>
    );
}

export default Code