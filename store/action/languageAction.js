export const updateLanguage = (language) => async (dispatch) => {
    try {
      dispatch({
        type: "SET_LANGUAGE_NAME",
        payload: language,
      });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };