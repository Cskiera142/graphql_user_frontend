import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(id: $userId) {
      id
    }
  }
`;
