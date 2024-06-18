const generateUser = (id, type) => ({
    id,
    name: `${type.charAt(0).toUpperCase() + type.slice(1)} ${id}`,
    email: `${type}${id}@example.com`,
    type,
  });
  
  const generateUsers = (type, count) => {
    const users = [];
    for (let i = 1; i <= count; i++) {
      users.push(generateUser(i, type));
    }
    return users;
  };
  
  const getUsersPageable = (page, pageSize, searchTerm = '', userType = 'influencer') => {
    const totalUsers = 1000; 
    const start = page * pageSize;
    const end = start + pageSize;
  
    const filteredUsers = generateUsers(userType, totalUsers).filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return filteredUsers.slice(start, end);
  };
  
  export { getUsersPageable };
  