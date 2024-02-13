const initialState = {
  allArticles: [],
  languageName: "",
};

const langaugeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE_NAME":
      return {
        ...state,
        languageName: action.payload,
      };
    case "ALL_ARTICLE":
      return {
        ...state,
        allArticles: action.payload,
      };
    default:
      return state;
  }
};

export default langaugeReducer;
