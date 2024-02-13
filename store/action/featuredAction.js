import { RepositoryFactory } from "../../repository/RepositoryFactory";
var featured = RepositoryFactory.get("featured");
export const GetFeaturedProduct = (pagename) => async (dispatch) => {
  try {
    const { data } = await featured.getFeaturedProduct(pagename);
    if (data != undefined) {
      dispatch({
        type: "FEATURED_PRODUCT",
        payload: data,
      });
    } else {
      alert("Sorry Response Failed!");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
