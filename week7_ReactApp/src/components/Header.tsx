import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    const state = {};
    const title = '';
    const url = '/about';
    window.history.pushState(state, title, url);
  };

  const navigate = useNavigate();

  const handleClickLogIn = () => {
    navigate('/');
  };

  return (
    <header>
      <nav>
        <ul>
          {/* Web APIs history 사용 */}
          <li>
            <a href="/" onClick={handleClick}>home</a>
          </li>
          <li>
            <a href="/about" onClick={handleClick}>about</a>
          </li>
          <hr />
          {/* Link와 NavLink */}
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <hr />
          {/* redirect를 하는 방법 */}
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
