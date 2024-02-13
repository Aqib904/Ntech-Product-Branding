import { RepositoryFactory } from "../../repository/RepositoryFactory";
var product = RepositoryFactory.get("product");
export const GetProductsChargers = () => async (dispatch) => {
  try {
    const { data } = await product.allProductChargers({
      productType: "CHARGER",
      limit: 1000,
      page: 1,
      isForMarketPlace: true,
    });
    if (data?.success) {
      dispatch({
        type: "ALL_PRODUCTS_CHARGERS",
        payload: data?.data?.result,
      });
    } else {
      alert("Sorry Response Failed!");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
