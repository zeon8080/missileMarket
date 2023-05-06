import { gql } from "@apollo/client";

export const FETCH_ITEMS_LIST = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      name
      remarks
      contents
      price
      createdAt
      images
      seller {
        name
      }
    }
  }
`;
