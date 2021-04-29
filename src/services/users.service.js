const ENDPOINT = "http://localhost:3004/api/users";

const getAllUsers = async () => {
  try {
    const resp = await fetch(ENDPOINT);
    const users = await resp.json();

    return users;
  } catch (error) {
    throw Error(error);
  }
};

const getUser = async (id) => {
  try {
    const resp = await fetch(`${ENDPOINT}/${id}`);
    const user = await resp.json();

    return user;
  } catch (error) {
    throw Error(error);
  }
};

const createUser = (user) => {
  return user;
};

export { getAllUsers, getUser, createUser };
