import Logo from '../logo/logo';
import { Link } from 'react-router-dom';


function HeaderOnly () {
  return(

    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link className="header__nav-link" to='/'>
                  <span  className="header__nav-item">На главную</span>
                </Link>
                </li>
              <li className="header__nav-item">О сайте</li>
              <li className="header__nav-item">Настроки</li>
              <li className="header__nav-item">Контакты</li>
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to="Favorites">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">ХОЗЯИН-ЛЕСА@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Выйти</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='presentationfavorite' >
      </div>
    </header>
  );
}

export default HeaderOnly;
