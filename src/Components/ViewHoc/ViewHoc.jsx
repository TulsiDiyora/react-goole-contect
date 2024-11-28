import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Login from "../Login/Login";
import { loginRec } from "../../Services/Actions/loginAction";

const ViewHOC = (WrappedComponent) => {
    return ({props}) => {

        const dispatch = useDispatch();
        const { isLogin, user } = useSelector((state) => state.loginRedux);

        useEffect(() => {

            const userDataForLogin = localStorage.getItem("user");

            if (userDataForLogin) {
                dispatch(loginRec(userDataForLogin));
            }
            
        }, [dispatch]);

        if (isLogin && user) { 

            return <WrappedComponent />;
        } else {

            return <Login {...props}/>;
        }
    };
};

export default ViewHOC;