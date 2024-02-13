import RepositoryFast from "./RepositoryFast";
const GETARTICLES = "/News_Feed/Get-Article-ServicePRO";
const GETARTICLESCHARGING = "/News_Feed/Get-Article-Charging-Resiliency";
const GETALLARTICLES = "News_Feed/Get-All-Articles-For-Search"
export default {
  getArticles(page) {
    return RepositoryFast.get(`${GETARTICLES}?PageNo=${page}`);
  },
  getArticlesCharging() {
    return RepositoryFast.get(`${GETARTICLESCHARGING}`);
  },
  getArticless() {
    return RepositoryFast.get(`${GETALLARTICLES}`);
  },
};
