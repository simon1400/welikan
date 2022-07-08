import { gql } from "@apollo/client";

const getDirectionsQuery = gql`
  query getDirections($page: Int!) {
    labels(sort: ["title:asc"], pagination: { page: $page, pageSize: 20 }) {
      data{
        attributes{
          title
          slug
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`

export default getDirectionsQuery