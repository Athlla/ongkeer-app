import { Link } from 'react-router-dom';

import Header from 'components/Header';

import styles from './styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.Container}>
        <div className={styles.Tag}>
          <h1 className={styles.Title}>
            Cek ongkos kirim dari berbagai macam ekspedisi ? <br />
            di <span className={styles.Logo}>Ongkeer</span> aja.
          </h1>
          <Link to="/cek-ongkir">
            <button className={styles.Button}>
              Cek sekarang
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.Arrow}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </Link>
        </div>
        <img
          src="undraw-delivery.png"
          alt="delivery"
          className={styles.Image}
        />
      </main>
    </>
  );
};

export default Home;
