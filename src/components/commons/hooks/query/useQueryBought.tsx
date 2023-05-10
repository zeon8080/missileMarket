import { gql } from "@apollo/client";

export const FETCH_BOUGHT = gql`
  query fetchUseditemsIBought($page: Int, $search: String) {
    fetchUseditemsIBought(page: $page, search: $search) {
      _id
      name
      price
      images
      createdAt
    }
  }
`;
