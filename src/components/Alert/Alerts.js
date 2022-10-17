import React, { useEffect, useState } from "react";
import "./Alerts.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../features/messageSlice";

function Alerts() {

  const alert = useSelector(state => state.message)
  const dispatch = useDispatch()

  const success = (msgSuccess) => {
    toast.success(msgSuccess, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const errorOn = (msgError) => {
    toast.error(msgError, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };


    if(alert.success){
      success(alert.message)
      dispatch(setMessage({
        message: null,
        success: null
      }))
    }else{
      errorOn(alert.message)
      dispatch(setMessage({
        message: null,
        success: null
      }))
    }

  return (
    <>
      <div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Alerts;
