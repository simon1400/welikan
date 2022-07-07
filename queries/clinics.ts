import { gql } from "@apollo/client";

const getClinicsQuery = gql`
  query getInstitution($slug: String!) {
    institutions(filters: { slug: { eq: $slug } }) {
      data{
        attributes{
          title
          content
          address
          doctors{
            data{
              attributes{
                title
                slug
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
                labels{
                  data{
                    attributes{
                      title
                    }
                  }
                }
                slug
                address
                content
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
          promotions{
            data{
              attributes{
                title
                content
                metkis{
                  data{
                    attributes{
                      title
                    }
                  }
                }
                slug
                image{
                  data{
                    attributes{
                      url
                    }
                  }
                }
              }
            }
          }
          images{
            data{
              attributes{
                url
              }
            }
          }
          licences{
            data{
              attributes{
                url
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
          open{
            days
            time
          }
          services{
            data{
              attributes{
                title
                price
              }
            }
            
          }
          # labels{
          #   data{
          #     attributes{
          #       title
          #     }
          #   }
          # }
        }
      }
    }
  }
`

export default getClinicsQuery