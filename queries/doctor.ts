import { gql } from "@apollo/client";

const createDoctor = gql`
  mutation CreateDoctor($input: DoctorInput!) {
    createDoctor(data: $input) {
      data{
        	attributes{
            title
          }
      }
  }
}
`

export default createDoctor