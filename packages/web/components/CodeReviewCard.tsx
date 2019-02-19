import { Card, Grid, Icon } from "semantic-ui-react";
import { ListCodeReviewsQueryListCodeReviews } from "./apollo-components";

export default ({
  cr,
  onOfferClick,
  showOfferButton
}: {
  cr: ListCodeReviewsQueryListCodeReviews;
  onOfferClick: () => void;
  showOfferButton: boolean;
}) => (
  <Grid.Column key={cr.id} width={4}>
    <Card>
      <Card.Content>
        <Card.Header>{cr.owner.username} wants a review</Card.Header>
        <Card.Meta>
          <span className="date">in {cr.numDays} days</span>
        </Card.Meta>
        <Card.Description>{cr.notes.slice(0, 150)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {showOfferButton ? (
          <a onClick={onOfferClick}>
            <Icon name="user" />
            Offer Review
          </a>
        ) : (
          <div>Your code review</div>
        )}
      </Card.Content>
    </Card>
  </Grid.Column>
);
