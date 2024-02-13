const initialState = {
  mapVideos: [],
  Videos: {},
  languageName: "",
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MAP_VIDEOS":
      return {
        ...state,
        mapVideos: action.payload,
      };
    case "DASHBOARD_VIDEOS":
      return {
        ...state,
        Videos: action.payload,
      };
	case "UTILITY_VIDEOS":
		return {
		  ...state,
		  utilityVideos: action.payload,
		};

    case "CPOS_VIDEOS":
		return {
		  ...state,
		  cposVideos: action.payload,
		};

    case "GOV_VIDEOS":
		return {
		  ...state,
		  govVideos: action.payload,
		};

    case "SET_LANGUAGE_NAME":
      return {
        ...state,
        languageName: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
