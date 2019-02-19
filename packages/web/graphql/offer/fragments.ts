import gql from "graphql-tag";
import { CodeReviewInfoFragment } from "../code-review/fragments";
import { UserInfoFragment } from "../user/fragments";

export const OfferInfoFragment = gql`
  fragment OfferInfo on Offer {
    status
    codeReview {
      ...CodeReviewInfo
    }
    sender {
      ...UserInfo
    }
  }

  ${CodeReviewInfoFragment}
  ${UserInfoFragment}
`;
