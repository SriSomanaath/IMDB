import React from 'react';

const ProfilePage = () => {

  const dummyProfilePictureUrl = 'https://cdn.icon-icons.com/icons2/2108/PNG/512/imdb_icon_130907.png';

  return (
    <div>
      <div>
        <img
          src={dummyProfilePictureUrl}
          alt="Profile Picture"
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold">User Name</h1>
        <p className="text-3xl font-bold">Email: user@example.com</p>
      </div>
    </div>
  );
};

export default ProfilePage;