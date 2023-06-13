import React, { useState } from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const goSearch = (e) => {
    e.preventDefault()
    navigate(`/search/?search=${searchValue}`);
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo logo">MORENT</div>

        <form className="search" onSubmit={goSearch}>
          <img src="/header/search.svg" alt="" />
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
        {/* <a href="#" className="header__icon">
          <img src="/image/header/heart.svg" alt="" />
        </a> */}
        {/* <a href="#" className="header__icon">
          <img src="/image/header/notification.svg" alt="" />
        </a> */}
        <a href="#" className="header__icon">
          <img src="/image/header/setting-2.svg" alt="" />
        </a>
        <a href="#" className="header__profile">
          <img src="/image/test_profile.jpg" alt="" />
        </a>
        <a href="#" className="header__logout">
          <img src="/image/header/logout.svg" alt="" />
        </a>
      </div>
    </header>
  );
}