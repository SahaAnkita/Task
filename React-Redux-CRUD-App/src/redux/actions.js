export const getUsers = () => ({
  type: "GET_USERS",
});

export const addUser = (data) => ({
  type: "ADD_USER",
  payload: data
});

export const editUser = (data,index) => ({
  type: "EDIT_USER",
  payload: data,
  index
});

export const deleteUser = (userId) => ({
  type: "DELETE_USER",
  payload: userId
});

