import * as React from "react";
import { Card, Grid, Icon } from "semantic-ui-react";
import { ListCodeReviewsQueryComponent } from "../components/apollo-components";
import Layout from "../components/Layout";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="list of code reviews">
      <ListCodeReviewsQueryComponent>
        {({ data }) => {
          return (
            <Grid>
              {data!.listCodeReviews.map(cr => (
                <Grid.Column key={cr.id} width={4}>
                  <Card>
                    <Card.Content>
                      <Card.Header>
                        {cr.owner.username} wants a review
                      </Card.Header>
                      <Card.Meta>
                        <span className="date">in {cr.numDays} days</span>
                      </Card.Meta>
                      <Card.Description>
                        {cr.notes.slice(0, 150)}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a href={cr.codeUrl}>
                        <Icon name="user" />
                        Offer Review
                      </a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))}
            </Grid>
          );
        }}
      </ListCodeReviewsQueryComponent>
    </Layout>
  );
};

export default IndexPage;
