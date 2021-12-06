import React, { useState, useEffect, RefObject } from 'react';

import ICity from 'Interfaces/City';

import styles from './Input.module.scss';

interface Props {
  placeholder: string;
  onClick?: (id: string) => void;
  wrap?: RefObject<HTMLDivElement>;
}

const Input = ({ placeholder, onClick, wrap }: Props) => {
  const [listKota, setListKota] = useState<ICity[]>([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const fetchKota = async () => {
      try {
        const data = await (
          await fetch('http://localhost:3001/city', {
            method: 'GET',
          })
        ).json();

        setListKota(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchKota();
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  const handleClickOutside = (e: any) => {
    if (wrap?.current && !wrap.current.contains(e.target)) {
      setShowSuggestion(false);
    }
  };

  return (
    <div className={styles.Input}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          e.target.value.length >= 2
            ? setShowSuggestion(true)
            : setShowSuggestion(false);
        }}
      />
      {showSuggestion && (
        <div className={styles.Suggestions}>
          {listKota
            .filter((city) =>
              city.city_name
                .toLowerCase()
                .includes((value as string).toLowerCase())
            )
            .map((city) => (
              <p
                key={city.city_id}
                className={styles.Item}
                onClick={() => {
                  onClick && onClick(city.city_id);
                  setValue(city.city_name);
                  setShowSuggestion(false);
                }}
              >{`${city.type} ${city.city_name}`}</p>
            ))}
        </div>
      )}
    </div>
  );
};

export default Input;
