import { RepositoryFactory } from "../../repository/RepositoryFactory";
var article = RepositoryFactory.get("article");
export const GetArticles = (page) => async (dispatch) => {
  try {
    const { data } = await article.getArticles(page);
    if (data != undefined) {
      console.log(data, "service");
      dispatch({
        type: "ARTICLE_DATA",
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
    const { data } = await article.getArticlesCharging();
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
    const { data } = await article.getArticless();
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
// export const setArticleId = (id, onSuccess) => async (dispatch) => {
//   console.log(id, "id");
//   try {
//     await dispatch({
//       type: "ARTICLE_ID",
//       payload: id,
//     });
//     onSuccess();
//   } catch (error) {
//     console.error("Error logging out:", error);
//   }
// };
