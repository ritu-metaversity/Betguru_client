import useMediaQuery from "@mui/material/useMediaQuery";
import MobileLogin from "./MobileLogin";
import DeskLogin from "./DeskLogin";
import type { FormEvent, ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { useLoginMutation } from "../../store/service/authService";
import { useNavigate } from "react-router-dom";
import { confirm_link } from "../../routes/Links";
import snackbarUtil from "../../utils/Snackbar";

interface FormData {
  userId: string;
  password: string;
  url: string;
}

interface Props {
  getUserBalance:any;
}

const Login: React.FC<Props> = ({ getUserBalance }) => {
  const matches = useMediaQuery("(max-width:480px)");
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    password: "",
    url: window.location.hostname.replace("www.", ""),
  });

  const nav = useNavigate();

  const [trigger, { data }] = useLoginMutation();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginClick = async (e: FormEvent) => {
    e.preventDefault();
    let userId = formData.userId;
    if (userId.startsWith("CC")) {
      userId = userId.substring(1);
    }
    if (!userId.startsWith("C")) {
      userId = "C" + userId;
    }
    try {
      await trigger({ ...formData, userId });
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  useEffect(() => {
    if (data) {
      if (data?.token) {
        localStorage.setItem("client-token", data?.token);
        localStorage.setItem("userId", data?.userId);
        nav(confirm_link);
        getUserBalance();
      } else {
        snackbarUtil.error(data?.message);
      }
    }
  }, [data, getUserBalance, nav]);

  

  return (
    <>
      {matches ? (
        <MobileLogin
          formData={formData}
          onInputChange={handleInputChange}
          onLoginClick={handleLoginClick}
        />
      ) : (
        <DeskLogin
          formData={formData}
          onInputChange={handleInputChange}
          onLoginClick={handleLoginClick}
        />
      )}
    </>
  );
};

export default Login;
