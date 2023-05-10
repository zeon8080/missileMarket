import { gql } from "@apollo/client";

export const FETCH_PICKED = gql`
  query fetchUseditemsIPicked($page: Int, $search: String) {
    fetchUseditemsIPicked(page: $page, search: $search) {
      _id
      name
      price
      images
      createdAt
    }
  }
`;
