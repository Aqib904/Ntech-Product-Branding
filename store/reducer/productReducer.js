
const initialState = {
  allProductsChargers: {},
};

const procuctReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS_CHARGERS":
      return {
        ...state,
        allProductsChargers: action.payload,
      };
    default:
      return state;
  }
};

export default procuctReducer;
