const initialState = {
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case "EDIT_USER":
      return{
        ...state,
        users:state.users.map((content)=> parseInt(content.id)===parseInt(action.index)?{
          ...content,
          name:action.payload.name,
          age:action.payload.age,
          address:action.payload.address,
          gender:action.payload.gender,
          about:action.payload.about,
          image:action.payload.image,
        }:content)
      }
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
