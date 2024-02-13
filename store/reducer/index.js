// Root Reducer

import { combineReducers } from "redux";
import productReducer from "./productReducer";
import mapReducer from "./mapReducer";
import articleReducer from "./ArticleReducer";
import featuredReducer from "./featuredReducer";
import langaugeReducer from "./languageReducer";
import NewsFeedReducer from './NewsFeedReducer'

export let rootReducer = combineReducers({
  product: productReducer,
  map: mapReducer,
  article: articleReducer,
  featured: featuredReducer,
  language: langaugeReducer,
  newsFeed: NewsFeedReducer
});

export default rootReducer;
