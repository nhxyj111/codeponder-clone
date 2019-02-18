import * as React from "react";
import { Grid, Loader } from "semantic-ui-react";
import {
  CreateOfferMutationComponent,
  ListCodeReviewsQueryComponent,
  MeQueryComponent
} from "../components/apollo-components";
import CodeReviewCard from "../components/CodeReviewCard";
import Layout from "../components/Layout";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="list of code reviews">
      <MeQueryComponent>
        {({ data, loading }) => {
          if (!data || loading) {
            return <div>loading...</div>;
          }
          console.log(data);
          const meData = data;
          return (
            <CreateOfferMutationComponent>
              {() => (
                <ListCodeReviewsQueryComponent>
                  {({ data, loading }) => {
                    if (!data || loading) {
                      return <Loader active inline="centered" />;
                    }

                    return (
                      <Grid>
                        {data.listCodeReviews.map(cr => (
                          <CodeReviewCard cr={cr} key={cr.id} />
                        ))}
                        {meData.me && meData.me.username}
                      </Grid>
                    );
                  }}
                </ListCodeReviewsQueryComponent>
              )}
            </CreateOfferMutationComponent>
          );
        }}
      </MeQueryComponent>
    </Layout>
  );
};

export default IndexPage;
