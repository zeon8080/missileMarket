import { gql } from "@apollo/client";

export const FETCH_USER_ITEMS = gql`
  query fetchUseditemsISold($page: Int, $search: String) {
    fetchUseditemsISold(page: $page, search: $search) {
      _id
      name
      price
      images
      createdAt
    }
  }
`;

export const FETCH_USER_ITEMS_COUNT = gql`
  query {
    fetchUseditemsCountISold
  }
`;
