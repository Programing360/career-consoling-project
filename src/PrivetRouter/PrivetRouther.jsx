import { useContext } from "react";
import { AuthContextData } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PrivetRouther = ({ children }) => {
    // const navigate = useNavigate()
    const { user,loading} = useContext(AuthContextData)
    console.log(user)
    const location = useLocation()
    // console.log(location)
   
    if ( user) {
        return children
    }

    return (
        <>
        <Helmet>
            <title>Privet Router - Career Counseling</title>
        </Helmet>
            {
                loading ? <span className="loading loading-infinity loading-xl flex justify-center mx-auto mt-60"></span> : <Navigate state={location} to='/login'></Navigate>
            }
        </>
        
    );
};

export default PrivetRouther;