const initialState = {
    newsFeedData: {},
    articleChargingData: [],
    allArticles: [],
    // articleId: "",
  };
  
  const articleReducer = (state = initialState, action) => {
    switch (action.type) {
      case "NEWSFEED_DATA":
        return {
          ...state,
          newsFeedData: action.payload,
        };
      case "ARTICLE_CHARGING_DATA":
        return {
          ...state,
          articleChargingData: action.payload,
        };
      case "ALL_ARTICLE":
        return {
          ...state,
          allArticles: action.payload,
        };
      // case "ARTICLE_ID":
      //   return {
      //     ...state,
      //     articleId: action.payload,
      //   };
      default:
        return state;
    }
  };
  
  export default articleReducer;
  