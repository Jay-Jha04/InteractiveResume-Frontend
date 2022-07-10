import { useState, useEffect } from "react";
import Input from "./common/input";
import { WarningOutlined } from "@ant-design/icons";
import {
  loginViewModel,
  validateLogin,
  validateProperty,
} from "../models/login";
import { authenticate, getToken } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ state }) => {
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [authenticationError, setAuthenticationError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;
    const { error } = validateProperty(name, value);

    if (error) {
      setErrors((prevState) => {
        return { ...prevState, [name]: error.details[0].message };
      });
    } else {
      errors[name] && delete errors[name];
    }

    setPayload((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { error: loginPayloadErrors } = validateLogin(payload);

    if (loginPayloadErrors) {
      let err = { ...loginPayloadErrors };
      loginPayloadErrors.details.map(
        (detail) => (err[detail.path[0]] = detail.message)
      );
      return setErrors(err);
    }

    try {
      await authenticate(payload);
      setPayload(loginViewModel);
      setErrors({});
      return (window.location = "/");
    } catch ({ response }) {
      return setAuthenticationError(response.data);
    }
  };

  useEffect(() => {
    if (getToken()) {
      return navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="row w-50 g-0 mt-5 mb-5">
        {authenticationError !== "" && (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <WarningOutlined style={{ fontSize: "1.5rem" }} />
            <div className="ms-3">{authenticationError}</div>
          </div>
        )}
        <h1 className="text-center">Please Login</h1>
        <Input
          label="Username"
          name="username"
          error={errors["username"]}
          value={payload["username"]}
          onChange={(e) => handleChange(e)}
        />
        <Input
          label="Username"
          name="password"
          type="password"
          error={errors["password"]}
          value={payload["password"]}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="btn btn-outline-primary"
          onClick={(e) => handleClick(e)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
