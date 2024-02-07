import { useState } from 'react';
import CustomInput from '../../components/UI/customInput/CustomInput';
import styles from './Login.module.css';
import CustomButton from '../../components/UI/customButton/CustomButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const userData = {
    userName: 'Nur',
    password: '123',
  };
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleGetUserName = (value) => {
    setUserName(value);
  };

  const handleGetUserPassword = (value) => {
    setUserPassword(value);
  };

  const handleCheckUser = () => {
    if (userName === userData.userName && userPassword === userData.password) {
      navigate('/admin');
      localStorage.setItem('isLogin', 'true');
    } else {
      alert('not correct data');
    }
  };

  return (
    <div className={styles.container}>
      <p>user name</p>
      <CustomInput value={userName} onChange={handleGetUserName} />
      <p>user password</p>
      <CustomInput value={userPassword} onChange={handleGetUserPassword} />
      <CustomButton onClick={handleCheckUser} buttonText="войти" />
    </div>
  );
};

export default Login;
