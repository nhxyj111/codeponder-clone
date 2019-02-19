import gql from "graphql-tag";
import { CodeReviewInfoFragment } from "../../code-review/fragments";
import { UserInfoFragment } from "../../user/fragments";

export const receivedOffersQuery = gql`
  query ReceivedOffersQuery {
    receivedOffers {
      accepted
      codeReview {
        ...CodeReviewInfo
      }
      sender {
        ...UserInfo
      }
    }
  }

  ${CodeReviewInfoFragment}
  ${UserInfoFragment}
`;
