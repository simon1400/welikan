
import { gql } from "@apollo/client";


export const filteredDoctorListQuery = gql`
  query GetFilteredDoctors($query: String!) {
    doctors(
      filters: { or: [{ city: { containsi: $query }}, { title: { containsi: $query }}] },
      pagination: { page: 1, pageSize: 4 }) {
      data {
        attributes{
          title,
          city,
          content
          contact {phone},
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
  }`;

