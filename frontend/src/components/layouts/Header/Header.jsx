import React, { useState, useEffect } from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import UserServices from '../../../services/UserServices';

export default function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await UserServices.getUserData();
      setUserData(response);
    }

    fetchData(); // Invoke the fetchData function to fetch user data
  }, []);

  const goSearch = (e) => {
    e.preventDefault();
    navigate(`/search/?search=${searchValue}`);
    window.location.reload();
  };

  const logout = async () => {
    const data = await UserServices.logout();
    navigate('/auth');
  };

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo logo">MORENT</div>

        <form className="search" onSubmit={goSearch}>
          <img src="/image/header/search.svg" alt="" />
          <input
            type="text"
            id="searchInput"
            placeholder="Введите текст для поиска"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>
      <div className="header__right">
        <a href="#" className="header__icon">
          <img src="/image/header/setting-2.svg" alt="" />
        </a>
        {userData && (
          <a href="#" className="header__profile">
            <img src={userData.avatar}></img> 
          </a>
        )}
        <a className="header__logout" onClick={logout}>
          <img src="/image/header/logout.svg" alt="" />
        </a>
      </div>
    </header>
  );
}