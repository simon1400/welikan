import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const SEARCH_API = "https://search.wellikan.com"
// const SEARCH_API = "http://0.0.0.0:7700"

const searchClient = instantMeiliSearch(
  SEARCH_API,
  "kuhlsfgkhuisfdkgnhafsdshklfujhafl"
);

export default searchClient