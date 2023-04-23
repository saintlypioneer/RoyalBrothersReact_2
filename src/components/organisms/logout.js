import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useEffect } from "react";

function Logout(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    dispatch(logout());
    
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/auth");
        }, 100);
    }, []);

    return(
        <>
            logging out...
        </>
    );
}

export default Logout;