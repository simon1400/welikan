import { gql } from "@apollo/client";

const topNavQuery = gql`
  query TopNav {
    global {
      data{
        attributes{
          topNav{
            title
            url
          }
          phone
        }
      }
    }
  }
`

export default topNavQuery