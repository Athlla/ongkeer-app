import ICost from 'Interfaces/Cost';
import styles from './Cost.module.scss';

const Cost = ({
  destination_details,
  origin_details,
  query,
  results,
}: ICost) => {
  return (
    <div className={styles.Cost}>
      <h2 className={styles.Title}>
        {origin_details.city_name} - {destination_details.city_name} |{' '}
        {results[0].code.toUpperCase()}
      </h2>
      <table className={styles.Table}>
        <tr className={styles.HeadingRow}>
          <th>Service</th>
          <th>Deskripsi</th>
          <th>Tarif</th>
          <th>Estimasi</th>
        </tr>
        {results[0].costs.map((res) => (
          <tr className={styles.Row} key={res.service}>
            <td>{res.service}</td>
            <td>{res.description}</td>
            <td>
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
              }).format(res.cost[0].value)}
            </td>
            <td>
              {res.cost[0].etd.toLowerCase()}{' '}
              {results[0].code !== 'pos' && 'hari'}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Cost;
