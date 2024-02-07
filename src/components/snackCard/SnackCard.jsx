import { useLocation } from 'react-router-dom';
import styles from './SnackCard.module.css';
import CustomButton from '../UI/customButton/CustomButton';
const SnackCard = ({ snack, deleteClick }) => {
  const { name, image, price, _id, ingredients } = snack;
  const { pathname } = useLocation();

  return (
    <div className={styles.container} id={_id}>
      <img className={styles.img} src={image} alt="photo" />
      <p className={styles.name}>{name}</p>
      <p>цена: {price}</p>
      <p className={styles.ingredients}>{ingredients}</p>
      {pathname === '/admin' ? (
        <>
          <CustomButton
            id={_id}
            onClick={(event) => {
              deleteClick(event);
            }}
            buttonText="удалить"
          />
          <CustomButton onClick={() => {}} buttonText="редактировать" />
        </>
      ) : null}
    </div>
  );
};

export default SnackCard;
