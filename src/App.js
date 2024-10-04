import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { doGetAccount } from "./redux/action/accountAction";
import { ScaleLoader } from 'react-spinners'
import axios from "./custom/axios";


function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.account.userInfo)
    const isLoading = useSelector(state => state.account.isLoading)

    useEffect(() => {
        console.log(window.location)
        if (window.location.pathname === '/') return 

        (user && !user.access_token) && dispatch(doGetAccount())
    }, [])

   
    return (
        <div className="">
            {isLoading &&
                <div className="d-flex align-items-center justify-content-center min-vh-100">
                    <ScaleLoader />
                </div>
            }
            {!isLoading && <Header />}
        </div>
    );
}

export default App;
