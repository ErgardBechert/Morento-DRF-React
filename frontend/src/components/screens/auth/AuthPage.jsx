import React, { useEffect, useState } from 'react';
import MainButton from '../../UI/button/mainButton/MainButton';
import FormInput from '../../UI/input/FormInput';
import style from './login.module.scss';
import { useNavigate } from 'react-router-dom';
import UserServices from '../../../services/UserServices';

const AuthPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState(true);
  const [user, setUser] = useState({ email: '', user_name: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const switchLogin = () => {
    setFormState(true);
    setErrorMessage('');
    setValidationErrors({});
    setSuccessMessage('');
  };

  const switchReg = () => {
    setFormState(false);
    setErrorMessage('');
    setValidationErrors({});
    setSuccessMessage('');
  };

  const login = async (user) => {
    try {
      setErrorMessage('');
      await UserServices.login(user, setErrorMessage, setSuccessMessage);
      setTimeout(() => {
        navigate('/');
      }, 2000); // Задержка в 2 секунды (2000 миллисекунд)
    } catch (error) {
      console.error('Вход не удался:', error);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const registration = async (user) => {
    try {
      setErrorMessage('');
      setValidationErrors({});
      setSuccessMessage('');

      if (!validateEmail(user.email)) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Введите действительный адрес электронной почты',
        }));
        return;
      }

      if (!validatePassword(user.password)) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          password: 'Пароль должен содержать не менее 8 символов и хотя бы 1 специальный символ',
        }));
        return;
      }

      await UserServices.register(user, setErrorMessage, setSuccessMessage);
      setTimeout(() => {
        navigate('/');
      }, 2000); // 
    } catch (error) {
      console.error('Регистрация не удалась:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formState) {
      login(user);
    } else {
      registration(user);
    }
  };

  useEffect(() => {
    setValidationErrors({});
    setSuccessMessage('');
  }, [formState]);

  return (
    <div className="auth-form">
      <h1>{formState ? 'Вход' : 'Регистрация'}</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        {formState ? (
          <div className={style.loginForm}>
            <FormInput
              placeholder={'email'}
              onChangeFunc={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
            />
            <FormInput
              placeholder={'пароль'}
              onChangeFunc={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
          </div>
        ) : (
          <div>
            <FormInput
              placeholder={'придумайте email'}
              onChangeFunc={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
            />
            <FormInput
              placeholder={'придумайте логин'}
              onChangeFunc={(e) => setUser({ ...user, user_name: e.target.value })}
              value={user.user_name}
            />
            <FormInput
              placeholder={'придумайте пароль'}
              onChangeFunc={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
          </div>
        )}
        <div className="buttons">
          <MainButton onClickFunk={switchLogin}>Вход</MainButton>
          <MainButton onClickFunk={switchReg}>Регистрация</MainButton>
        </div>
        {formState ? (
          <MainButton type="submit">Войти</MainButton>
        ) : (
          <MainButton type="submit">Создать</MainButton>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {validationErrors.email && <p className="error-message">{validationErrors.email}</p>}
        {validationErrors.password && <p className="error-message">{validationErrors.password}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default AuthPage;