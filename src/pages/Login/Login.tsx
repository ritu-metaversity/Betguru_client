
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileLogin from './MobileLogin';
import DeskLogin from './DeskLogin';
import {type ChangeEvent, useState, useEffect, FormEvent } from 'react';
import { useLoginMutation } from '../../store/service/authService';
import { useNavigate } from 'react-router-dom';
import { confirm_link } from '../../routes/Links';


interface FormData {
  userId: string;
  password: string;
  url:string;
}

const Login: React.FC = () => {
  const matches = useMediaQuery('(max-width:480px)');
  const [formData, setFormData] = useState<FormData>({
    userId: '',
    password: '',
    url:'',
  });

  const nav = useNavigate();

  const [trigger, {data}] = useLoginMutation();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginClick = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await trigger(formData);
     
    } catch (error) {
      console.error('Login failed: ', error);
    }
  };

  useEffect(()=>{
    if(data){
      localStorage.setItem("client-token", data?.token);
      localStorage.setItem("userId", data?.userId);
      nav(confirm_link);
    }
  }, [data])

  return (
    <>{matches ? <MobileLogin formData={formData} onInputChange={handleInputChange} onLoginClick={handleLoginClick} /> : <DeskLogin formData={formData} onInputChange={handleInputChange} onLoginClick={handleLoginClick} />}</>
   
  );
};

export default Login;
