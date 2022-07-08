import { gql } from "@apollo/client";

const createCallRequest = gql`
  mutation CreateCallRequest($input: CallInput!) {
    createCall(data: $input) {
      data{
        id
      }
    }
  }
`

export default createCallRequest