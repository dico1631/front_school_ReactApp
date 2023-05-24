// import { SyntheticEvent } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  // const handleClick = (event: SyntheticEvent) => {
  //   event.preventDefault();
  //   const state = {};
  //   const title = '';
  //   const url = '/about';
  //   window.history.pushState(state, title, url);
  // };

  const navigate = useNavigate();

  const handleClickLogIn = () => {
    navigate('/');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/logout">logout</NavLink>
          </li>
          <li>
            <button type="button" onClick={handleClickLogIn}>login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
