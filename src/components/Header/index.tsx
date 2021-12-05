import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>Ongkeer</div>
      <nav className={styles.Nav}>
        <ul className={styles.NavList}>
          <li className={styles.NavItem}>Cek Ongkir</li>
          <li className={styles.NavItem}>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
