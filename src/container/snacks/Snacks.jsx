import { useEffect, useState } from 'react';
import { perforeRequests } from '../../api/requests';
import SnacksCards from '../../components/snackCards/SnackCards';

const Snacks = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    getSnacks();
  }, []);

  const getSnacks = async () => {
    const response = await perforeRequests('get', 'snacks');
    setSnacks(response);
  };

  return (
    <div>
      <h1>Snacks List</h1>
      <SnacksCards snacks={snacks} />
    </div>
  );
};

export default Snacks;
