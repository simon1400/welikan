import { gql } from "@apollo/client";

export const homePageQuery = gql`
  query {
    homePage {
      data {
        attributes{
          title,
          doctors {
            data {
              attributes {
                slug,
                title,
                content
                address {
                  id,
                  city
                }
                score,
                services {
                  id,
                  title,
                }
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
      }
    }
  }
}`;