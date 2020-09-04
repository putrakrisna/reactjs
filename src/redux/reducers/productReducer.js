const initalState = {
    product: null
  };
  
  const productReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_TO_CART":
        return {
          ...state,
          user: payload
        };
      
      default:
        return state;
    }
  };
  
  export default productReducer;
  