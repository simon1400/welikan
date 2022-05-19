import { gql } from "@apollo/client";

export const promotionList: string =
  `promotions {
    data {
      attributes{
        title,
        slug,
        content,
        rating,
        metkis {
          data {
            attributes {
              title
            }
          }
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
  }`;

export const promotionListQuery = gql`
  query {
  ${promotionList}
}`;