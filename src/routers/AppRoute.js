import { Outlet } from "react-router-dom";
import App from "../App";

function AppRoute() {
    return (
        <>
            <App />
            <Outlet/>
        </>
    );
}

export default AppRoute;