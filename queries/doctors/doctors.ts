import { gql } from "@apollo/client";


export const doctorList: string =
  `doctors {
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
  }`;


export const doctorListQuery = gql`
  query {
   ${doctorList}
}`;

