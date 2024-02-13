const initialState = {
    evCharger: {},
  };
  
  const articleReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FEATURED_PRODUCT":
        return {
          ...state,
          evCharger: action.payload,
        };
      case "ARTICLE_CHARGING_DATA":
        return {
          ...state,
          articleChargingData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default articleReducer;
  