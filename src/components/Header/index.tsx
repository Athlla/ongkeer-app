import { NavLink, Link } from 'react-router-dom';

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
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { borderBottom: '2px dashed black' }
                  : { borderBottom: '2px dashed transparent' }
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={styles.NavItem}>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { borderBottom: '2px dashed black' }
                  : { borderBottom: '2px dashed transparent' }
              }
              to="/cek-ongkir"
            >
              Cek Ongkir
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
