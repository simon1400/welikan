import { gql } from '@apollo/client';

export const promotionQuery = gql`
  query getPromotion($slug: String!) {
    promotions(filters: { slug: { eq: $slug } }) {
      data {
      attributes{
        title,
        slug,
        content,
        rating,
        createdAt,
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
  }
}`