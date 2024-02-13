import RepositoryFast from "./RepositoryFast";

const FEATUREDPRODUCT = "/Featured-Products/Get-Featured_product-By-Category";
export default {
  getFeaturedProduct(pagename) {
    return RepositoryFast.get(`${FEATUREDPRODUCT}?Category=${pagename}`);
  },
};
