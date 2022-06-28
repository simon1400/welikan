import { gql } from "@apollo/client";

const getDoctorQuery = gql`
  # Write your query or mutation here
  query getDoctor($slug: String!) {
    doctors(filters: { slug: { eq: $slug } }) {
      data{
        attributes{
          title
          content
          image{
            data{
              attributes{
                url
              }
            }
          }
          contact{
            phone
            email
          }
          specialisations{
            data{
              attributes{
                title
              }
            }
          }
          reviews{
            data{
              attributes{
                userName
                content
                rating
              }
            }
          }
          education
          experience
          galery{
            data{
              attributes{
                url
              }
            }
          }
          licence{
            data{
              attributes{
                url
              }
            }
          }
          services{
            title
            price
          }
          address
          labels{
            data{
              attributes{
                title
              }
            }
          }
          institutions{
            data{
              attributes{
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`

export default getDoctorQuery