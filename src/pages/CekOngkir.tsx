import { useState, useRef } from 'react';

import Header from 'components/Header';
import Input from 'components/Input';
import Cost from 'components/CostData';

import ICost from 'Interfaces/Cost';
import styles from './styles/CekOngkir.module.scss';

type courierType = 'jne' | 'pos' | 'tiki';

const CekOngkir = () => {
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [weight, setWeight] = useState<number>(1000);
  const [courier, setCourier] = useState<courierType>('jne');

  const [costData, setCostData] = useState<ICost>();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const submitHandler = async () => {
    const data = {
      origin,
      destination,
      weight,
      courier,
    };

    fetch('http://localhost:3001/cost', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.io)',
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        setCostData(JSON.parse(data));
      });
  };

  return (
    <>
      <Header />
      <main className={styles.Container} ref={wrapperRef}>
        <div className={styles.Main}>
          <img src="undraw-search.png" alt="search" className={styles.Image} />
          <div className={styles.Content}>
            <h2 className={styles.asdfas}>Cek Ongkos Kirim</h2>
            <Input placeholder="Asal" onClick={setOrigin} wrap={wrapperRef} />
            <Input
              placeholder="Tujuan"
              onClick={setDestination}
              wrap={wrapperRef}
            />
            <div className={styles.Berat}>
              <input
                type="number"
                placeholder="Berat"
                value={weight}
                onChange={(e) => setWeight(+e.target.value)}
              />
              <span>gram</span>
            </div>
            <select onChange={(e) => setCourier(e.target.value as courierType)}>
              <option value="jne">JNE</option>
              <option value="pos">Pos Indonesia</option>
              <option value="tiki">TIKI</option>
            </select>
            <button
              type="submit"
              className={styles.Submit}
              onClick={submitHandler}
              disabled={origin === '' || destination === ''}
            >
              Cek
            </button>
          </div>
        </div>
        {costData && <Cost {...costData} />}
      </main>
    </>
  );
};

export default CekOngkir;
