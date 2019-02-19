import gql from "graphql-tag";
import { UserInfoFragment } from "../../user/fragments";
import { CodeReviewInfoFragment } from "../fragments";

export const listCodeReviewsQuery = gql`
  query ListCodeReviewsQuery {
    listCodeReviews {
      ...CodeReviewInfo
      owner {
        ...UserInfo
      }
    }
  }

  ${CodeReviewInfoFragment}
  ${UserInfoFragment}
`;
