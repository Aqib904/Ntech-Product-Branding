import { RepositoryFactory } from "../../repository/RepositoryFactory";
var newsFeed = RepositoryFactory.get("newsFeed");
export const GetArticles = (page) => async (dispatch) => {
  try {
    const { data } = await newsFeed.getArticles(page);
    if (data != undefined) {
      console.log(data, "service");
      dispatch({
        type: "NEWSFEED_DATA",
        payload: data,
      });
    } else {
      alert("Sorry Response Failed!");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
export const GetArticlesCharging = () => async (dispatch) => {
  try {
    const { data } = await newsFeed.getArticlesCharging();
    if (data != undefined) {
      dispatch({
        type: "ARTICLE_CHARGING_DATA",
        payload: data,
      });
    } else {
      alert("Sorry Response Failed!");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
export const getAllArticles = () => async (dispatch) => {
  try {
    const { data } = await newsFeed.getArticless();
    if (data != undefined) {
      dispatch({
        type: "ALL_ARTICLE",
        payload: data[0],
      });
    } else {
      alert("Sorry Response Failed!");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};