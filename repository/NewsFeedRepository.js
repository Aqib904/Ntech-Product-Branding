import RepositoryFast from "./RepositoryFast";
const GETARTICLES = "/News_Feed/Get-Articles";

export default {
  getArticles(page) {
    return RepositoryFast.get(`${GETARTICLES}?PageNo=${page}&Category=Utilities`);
  }
};
