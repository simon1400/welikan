
import { gql } from "@apollo/client";


export const filteredInstitutionsListQuery = gql`
  query GetFilteredInstituionss($query: String!) {
    institutions(
      filters: { or: [{ city: { containsi: $query }}, { title: { containsi: $query }}] },
      pagination: { page: 1, pageSize: 4 }
      ) {
      data {
        attributes{
          title,
          slug,
          content,
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
  }`;

