import * as React from "react";
import { Grid, Segment } from "semantic-ui-react";
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
                <Grid.Column key={cr.id} width={3}>
                  <Segment>{cr.notes.slice(0, 150)}</Segment>
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
