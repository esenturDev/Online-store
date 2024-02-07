import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>ПРИЯТНОГО АППЕТИТА!</p>
      <div className="contacts">
        <p>© 2002-2024 Империя Пиццы</p>
        <p>Все права защищены</p>
        <p>ОсОО "Империя пиццы"</p>
        <p>
          пер. Магнитогорский, дом 16, Бишкек, Чуйская область 720031,
          Кыргызстан
        </p>
      </div>
    </div>
  );
};

export default Footer;
