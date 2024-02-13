import RepositoryFast from "./RepositoryFast";
const GETMAPVIDEOS = "/Videos/Get-Map-Videos";
export default {
  getMapVideos() {
    return RepositoryFast.get(`${GETMAPVIDEOS}`);
  },
};
