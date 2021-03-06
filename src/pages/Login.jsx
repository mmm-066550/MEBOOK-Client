import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import OauthForm from "../components/OauthForm";
import UserAuthFormArea from "../components/UserAuthFormArea";
import UserLoginForm from "../components/UserLoginForm";
import { useNavigate } from "react-router-dom";

export default connect((state) => state)(function Login({
  response,
  redirect_to,
  label,
  restrict_to,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "MEBOOK | Login";
  }, []);

  useEffect(() => {
    if (
      response.status === 200 &&
      response.data.msg === "Logged in successfully ✅"
    ) {
      navigate(`/${redirect_to}`);
    }
  }, [response]);

  return (
    <UserAuthFormArea label={label || "Login into your account"}>
      <UserLoginForm restrict_to={restrict_to} />
      {restrict_to && !restrict_to.includes("user") ? null : (
        <>
          <OauthForm label={"Or login with"} />
          <div className="form-link mb-3">
            Don't have an account? <Link to={"/register"}>Register</Link>
          </div>
        </>
      )}
    </UserAuthFormArea>
  );
});
