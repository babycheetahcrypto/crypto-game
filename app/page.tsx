import React from 'react';
import CryptoGame from '../components/crypto-game'; // Ensure this matches the exported name

const MainPage: React.FC = () => {
  return (
    <div>
      <CryptoGame /> {/* Use the imported component */}
    </div>
  );
};

export default MainPage;