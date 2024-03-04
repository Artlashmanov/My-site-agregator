import { Link } from 'react-router-dom';

function Logo (): JSX.Element {
  return (

    <Link className="header__logo-link" to="/">
      <img className="header__logo"
        src="src/components/images/logo192.png"
        alt="my-site-agregator"
        width="81"
        height="41"
      />
    </Link>

  );
}

export default Logo;
