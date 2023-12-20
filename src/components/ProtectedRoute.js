//import { message } from "antd";
import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "../pages/Home/Home";

//API
import { GetCurrentUser } from "../apicalls/user";

//Actions
import { SetUser } from "../redux/usersSlice";
import { HideLoading, ShowLoading } from "../redux/loadersSlice";

function ProtectedRoute({ children }) {
  console.log("Inside Protected Route")
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getpresentUser = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetCurrentUser();
      console.log("Inside Protected Route current user",response)
      dispatch(HideLoading());
      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        dispatch(SetUser(null));
        console.log(response.message)
        //window.alert(response.message);
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      dispatch(HideLoading());
      dispatch(SetUser(null));
      window.alert(error.message);
    }
 };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getpresentUser(); // Get User Info from server
    } else {
      navigate("/login");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    user && 
    <Home/>
    );
}

export default ProtectedRoute;