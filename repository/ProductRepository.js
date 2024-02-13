import Repository from "./Repository";
const GETALLPRODUCTCHARGERS = "/getAllProductList?language=";
export default {
  allProductChargers(payload) {
    return Repository.post(`${GETALLPRODUCTCHARGERS}`, payload);
  },
};
