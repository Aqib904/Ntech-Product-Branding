import ProductRepository from "./ProductRepository";
import MapRepository from "./MapRepository";
import ArticleRepository from "./ArticleRepository";
import FeaturedRepository from "./FeaturedRepository";
import NewsFeedRepository from './NewsFeedRepository'

const repositories = {
  product: ProductRepository,
  map: MapRepository,
  article: ArticleRepository,
  featured: FeaturedRepository,
  newsFeed: NewsFeedRepository
};
export const RepositoryFactory = {
  get: (name) => repositories[name],
};
