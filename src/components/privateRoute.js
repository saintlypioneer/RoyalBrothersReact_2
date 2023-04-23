import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function PrivateRoute(props){

    const {token} = useSelector(state=>state.user);
    console.log(token);
    const navigate = useNavigate();

    useEffect(()=>{
        if (token==""){
            window.alert('please login to book a vehicle');
            navigate("/auth");
        }
    }, [token, navigate])

    return (props.children);
}

export default PrivateRoute