import { gql } from "@apollo/client";


export const doctorListQuery = gql`
  query {
    doctors {
    data {
      attributes {
        slug,
        title,
        content,
        score,
        address {
          city
        },
        contact {
          email
          phone
        }
        image {
          data {
            attributes {
              name,
              url,
            }
          }
        }
      }
    }
  }
}`;