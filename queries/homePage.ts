import { gql } from "@apollo/client";
import { companyList } from './companies/companies';
import { doctorList } from './doctors/doctors';
import { promotionList } from './promotions/promotions';

export const homePageQuery = gql`
  query {
    homePage {
      data {
        attributes {
          title,
          ${doctorList},
          ${promotionList},
          ${companyList}
        }
      }
    }
}`;