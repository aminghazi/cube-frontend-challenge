export const createUser = async (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user, token: 'sample.token' });
    }, 1000);
  });
};