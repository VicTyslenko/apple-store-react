const authorization = (users, user) => {
  return Boolean(
    users.find(
      (item) => item.email === user.email && item.password === user.password
    )
  );
};
module.exports = authorization;
