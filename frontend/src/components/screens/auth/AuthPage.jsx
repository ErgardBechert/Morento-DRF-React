import React, { useEffect, useState } from 'react'
import MainButton from '../../UI/button/mainButton/MainButton'
import FormInput from '../../UI/input/FormInput'
import style from './login.module.scss'
import { useNavigate } from 'react-router-dom'
import UserServices from '../../../services/UserServices'

export default function AuthPage() {

    const navigate = useNavigate()

    const [ formState, setFormState ] = useState(true)

    const switchLodin = () => {
        setFormState(true)
    }
    const switchReg = () => {
        setFormState(false)
    }

    useEffect(() => {
        
    }, [])


    const login = async (user) => {
        const response = await UserServices.login(user);
        navigate('/')
    }

    const registration = async (user) => {
        const data = await UserServices.register(user)
    }

    const [ user, setUser ] = useState({email: '',user_name: '', password: ''})

  return (
    <div className={style.login}>
        <h1>{formState?'Вход':'Регистрация'}</h1>
        {formState?
        <div className={style.loginForm}>
            <FormInput 
                placeholder={'email'}
                onChangeFunc={(e) => setUser({...user, email: e.target.value})}
                value={user.email}
            />
            <FormInput 
                placeholder={'пароль'}
                onChangeFunc={(e) => setUser({...user, password: e.target.value})}
                value={user.password}
            />
        </div>
        :
        <div className={style.loginForm}>
     
            <FormInput 
                placeholder={'придумайте email'}
                onChangeFunc={(e) => setUser({...user, email: e.target.value})}
                value={user.email}
            />
            <FormInput 
                placeholder={'придумайте логин'}
                onChangeFunc={(e) => setUser({...user, user_name: e.target.value})}
                value={user.user_name}
            />
            <FormInput 
                placeholder={'придумайте пароль'}
                onChangeFunc={(e) => setUser({...user, password: e.target.value})}
                value={user.password}
            />
        </div>
        }
        <div className={style.switchBlock}>
            <MainButton onClickFunk={switchLodin}>Вход</MainButton>
            <MainButton onClickFunk={switchReg}>Регистрация</MainButton>
        </div>
        {
            formState ?
                <MainButton onClickFunk={() => login(user)}>Войти</MainButton>:
                <MainButton onClickFunk={() => registration(user)}>Создать</MainButton>
        }
        {/* {
            formState ?
                status === 'rejected' && <p className={style.message}>Неверные данные</p>:
                (
                    (user.password !== user.repPassword && user.password && user.repPassword) ? <p className={style.message}>пароль не совпадают</p>:
                    status === 'rejected' && <p className={style.message}>Имя занято</p>
                )
                
        } */}
    
    </div>
  )
}