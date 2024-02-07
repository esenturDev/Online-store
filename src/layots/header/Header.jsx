import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link to="/">Меню</Link>
        <Link to="/sales">Акции</Link>
        <Link to="/branch"> О компании</Link>
      </nav>
    </div>
  );
};

export default Header;
