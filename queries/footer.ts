import { gql } from "@apollo/client";

const footerQuery = gql`
  query Footer {
    global {
      data{
        attributes{
          footerNav{
            title
            item{
              title
              url
            }
          }
          techLinks{
            title
            url
          }
        }
      }
    }
  }
`

export default footerQuery