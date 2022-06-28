import { gql } from "@apollo/client";

const allStockQuery = gql`
  query AllStock {
    promotions {
      data{
        attributes{
          title
          content
          slug
          from
          to
          image{
            data{
              attributes{
                url
              }
            }
          }
          metkis{
            data{
              attributes{
                title
              }
            }
          }
        }
      }
    }
  }
`

export const getStockQuery = gql`
  # Write your query or mutation here
  query getStock($slug: String!) {
    promotions(filters: { slug: { eq: $slug } }) {
      data{
        attributes{
          title
          content
          slug
          from
          to
          image{
            data{
              attributes{
                url
              }
            }
          }
          metkis{
            data{
              attributes{
                title
              }
            }
          }
        }
      }
    }
  }
`

export default allStockQuery