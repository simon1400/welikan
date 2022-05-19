import { gql } from "@apollo/client";


export const companyList: string =
`institutions {
  data {
    attributes {
      title,
      slug,
      content,
      address {
        id,
        street,
        houseNr
      },
      contact {
        phone,
        email,
      },
      rating,
      services {
        data {
          attributes {
            title
          }
        }
      },
      images {
        data{
          attributes {
            url
          }
        }
      }
    }
  }
}`;

export const companyListQuery = gql`
  query {
  companyList
}`;