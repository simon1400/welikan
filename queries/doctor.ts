import { gql } from "@apollo/client";


export const doctorQuery = gql`
  query getDoctor($slug: String!) {
    doctors(filters: { slug: { eq: $slug } }) {
      data {
        attributes{
          title,
          content,
          contact {phone},
          score,
          education,
          experience,
          address {
            id,
            city,
            zip,
            houseNr,
            country,
            street
          }
          reviews {
            data {
              attributes {
                userName,
                publishedAt,
                content,
                rating
              }
            }
          }
          services {
            id,
            title,
            price
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