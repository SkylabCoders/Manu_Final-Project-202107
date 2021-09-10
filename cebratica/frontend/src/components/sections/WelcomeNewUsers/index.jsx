import React from 'react';

const WelcomeNewUsers = () => {
  const urlImage = 'https://www.bioenciclopedia.com/wp-content/uploads/2013/12/cebra-800.jpg';
  return (
    <>
      <div>
        <h1>Enjoi Cebratica</h1>
        <p>Add your favorite movies in your oun library</p>
        <img className="cebra-img" src={urlImage} alt="cebra" />
      </div>
    </>
  );
};
export default WelcomeNewUsers;
