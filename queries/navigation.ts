import { gql } from "@apollo/client";


export const navigationQuery = gql`
  query {
    navigation {
      data {
        attributes {
          headerLinks {label, link},
          footerSeoLinks {label, link},
          footerIconLinks {label, link, iconLink},
          menuLinks {
            menuTitle,
            links {
              label,
              link
            }
          }
        }
      }
    }
  }`;
