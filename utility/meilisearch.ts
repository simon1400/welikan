import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

// const SEARCH_API = "http://search.wellikan.com"
const SEARCH_API = "http://localhost:7700"

const searchClient = instantMeiliSearch(
  SEARCH_API,
  "kuhlsfgkhuisfdkgnhafsdshklfujhafl"
);

export default searchClient