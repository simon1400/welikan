import { gql } from "@apollo/client";

const homepageQuery = gql`
  query Homepage {
    homePage {
      data{
        attributes{
					title
          institutions {
						data{
              attributes{
                title
                content
                images{
                  data{
                    attributes{
                      url
                    }
                  }
                }
                address {
                  street
                  houseNr
                  city
                  zip
                  country
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
              }
            }
          }
          doctors{
            data{
              attributes{
                title
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
                slug
                address {
                  street
                  houseNr
                  city
                  zip
                  country
                }
                content
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
        }
      }
    }
  }
`

export default homepageQuery