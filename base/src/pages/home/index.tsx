import React from 'react';
import { useFetch } from '../../hooks/useFetch';

const Home: React.FC = () => {
  const { data } = useFetch(
    'repo',
    'https://api.github.com/repos/TanStack/query'
  );

  console.log(data);
  return (
    <>
      <p>teste</p>
    </>
  );
};

export default Home;
