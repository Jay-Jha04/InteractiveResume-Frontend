import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../services/auth";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate("/login", { replace: false });
    }
  }, []);
  return children;
};

export default ProtectedRoute;
