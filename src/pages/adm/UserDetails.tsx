import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUsersPageable } from './AdmDataMock';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [followers, setFollowers] = useState('');
  const [industry, setIndustry] = useState('');

  useEffect(() => {
    // Fetch the user details based on the ID
    const allUsers = getUsersPageable(0, 1000); // Mocked large page size to get all users
    const foundUser = allUsers.find(u => u.id.toString() === id);
    if (foundUser) {
      setUser(foundUser);
      setName(foundUser.name);
      setEmail(foundUser.email);
      setFollowers(foundUser.followers || '');
      setIndustry(foundUser.industry || '');
    }
  }, [id]);

  const handleSave = () => {
    // Aqui você poderia enviar os dados atualizados para o servidor
    console.log('User updated:', { name, email, followers, industry });
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      {followers !== '' && (
        <div>
          <label>Followers</label>
          <input type="text" value={followers} onChange={(e) => setFollowers(e.target.value)} />
        </div>
      )}
      {industry !== '' && (
        <div>
          <label>Industry</label>
          <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} />
        </div>
      )}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserDetail;
