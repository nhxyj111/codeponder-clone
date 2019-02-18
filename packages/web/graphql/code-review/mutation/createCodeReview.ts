import gql from "graphql-tag";

export const createCodeReviewMutation = gql`
  mutation CreateCodeReviewMutation($input: CreateCodeReviewInput!) {
    createCodeReview(input: $input) {
      codeReview {
        id
        numDays
        codeUrl
        techTags
        notes
      }
      errors {
        path
        message
      }
    }
  }
`;
