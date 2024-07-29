import { createContext, useReducer } from "react";
import axios from "axios";
import { apiURL_USER } from "../../../utils/apiURL";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./authActionTypes";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const INITIAL_STATE = {
  userAuth: JSON.parse(localStorage.getItem("userAuth")),
  profile: null,
  error: null,
};

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("userAuth", JSON.stringify(payload));
      return {
        ...state,
        userAuth: payload,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        error: payload,
      };

    case LOGOUT:
      return {
        ...state,
        userAuth: null,
        error: null,
        loading: false,
        profile: null,
      };

    default:
      return state;
  }
};

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const navigate = useNavigate();
  const loginUserAction = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(`${apiURL_USER}/login`, formData, config);
      if (res?.data?.status === "success") {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        toast.success("Login Successful", {
          onClose: () => navigate("/recipe"),
          autoClose: 1000,
        });
        navigate("/recipe");
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED,
        payload: error?.response?.data?.message,
      });
      toast.error(error?.response?.data?.message || "Login failed", {
        onClose: () => navigate("/login"),
        autoClose: 1000,
      });
    }
  };

  const logoutUserAction = async () => {
    dispatch({ type: LOGOUT, payload: null });

    localStorage.removeItem("userAuth");
    toast.success("Log out Successfull !!", {
      onClose: () => navigate("/"),
      autoClose: 1000,
    });
  };

  const userCreateAction = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(`${apiURL_USER}/register`, formData, config);
      console.log(res);
      if (res?.data?.status === "success") {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        toast.success("Registration Successful", {
          onClose: () => navigate("/login"),
          autoClose: 1000,
        });
      }
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error?.response?.data?.message,
      });
      toast.error(error?.response?.data?.message || "Registration failed", {
        onClose: () => navigate("/signup"),
        autoClose: 1000,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        loginUserAction,
        logoutUserAction,
        userCreateAction,
        token: state?.userAuth?.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
