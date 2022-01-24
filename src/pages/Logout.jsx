import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { withCookies } from "react-cookie";
import { logoutUser } from "../redux/actions";

const mapStateToProps = (state) => state;
export default withCookies(
  connect(mapStateToProps, { logoutUser })(function Login({
    cookies,
    logoutUser,
  }) {
    const navigate = useNavigate();
    useEffect(() => {
      logoutUser();
      cookies.remove("user");
      navigate("/");
    }, [navigate, logoutUser, cookies]);
    return <></>;
  })
);
