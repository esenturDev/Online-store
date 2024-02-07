import { perforeRequests } from '../../api/requests';
import CustomButton from '../UI/customButton/CustomButton';

const DeleteForm = ({ closeModal, id }) => {
  console.log('id', id);
  const handleDeleteSnakc = async () => {
    const response = await perforeRequests('delete', `snacks/${id}`);
  };

  return (
    <div>
      <p>Вы действительно хотите удалить</p>
      <div>
        <CustomButton onClick={handleDeleteSnakc} buttonText="Да" />
        <CustomButton onClick={closeModal} buttonText="Отмена" />
      </div>
    </div>
  );
};

export default DeleteForm;
