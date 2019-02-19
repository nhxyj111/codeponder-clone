import gql from "graphql-tag";
import { UserInfoFragment } from "../fragments";

export const meQuery = gql`
  query MeQuery {
    me {
      ...UserInfo
    }
  }

  ${UserInfoFragment}
`;
