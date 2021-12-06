import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        <Link to="/">Ongkeer</Link>
      </div>
      <nav className={styles.Nav}>
        <ul className={styles.NavList}>
          <li className={styles.NavItem}>
            <Link to="/cek-ongkir">Cek Ongkir</Link>
          </li>
          <li className={styles.NavItem}>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
