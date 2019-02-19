import Router from "next/router";
import * as React from "react";
import { Grid, Loader, Message } from "semantic-ui-react";
import {
  CreateOfferMutationComponent,
  ListCodeReviewsQueryComponent,
  MeQueryComponent
} from "../components/apollo-components";
import CodeReviewCard from "../components/CodeReviewCard";
import Layout from "../components/Layout";

export default class Home extends React.Component<{}, { offerSentTo: string }> {
  state = {
    offerSentTo: ""
  };
  render() {
    const { offerSentTo } = this.state;

    return (
      <Layout title="list of code reviews" showMenu={true}>
        {offerSentTo && (
          <Message positive>
            <Message.Header>Success</Message.Header>
            <p>Your offer has been sent to {offerSentTo}</p>
          </Message>
        )}
        <MeQueryComponent>
          {({ data, loading }) => {
            if (!data || loading) {
              return <div>loading...</div>;
            }
            // console.log(data);
            const meData = data;
            return (
              <CreateOfferMutationComponent>
                {mutate => (
                  <ListCodeReviewsQueryComponent>
                    {({ data, loading }) => {
                      if (!data || loading) {
                        return <Loader active inline="centered" />;
                      }

                      return (
                        <Grid>
                          {data.listCodeReviews.map(cr => (
                            <CodeReviewCard
                              cr={cr}
                              key={cr.id}
                              onOfferClick={async () => {
                                if (meData.me) {
                                  await mutate({
                                    variables: {
                                      input: {
                                        codeReviewId: cr.id,
                                        userId: meData.me.id
                                      }
                                    }
                                  });
                                  this.setState({
                                    offerSentTo: cr.owner.username
                                  });
                                } else {
                                  Router.push("/login");
                                }
                              }}
                              showOfferButton={
                                meData.me && meData.me.id === cr.owner.id
                                  ? false
                                  : true
                              }
                            />
                          ))}
                          {/* {meData.me && meData.me.username} */}
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
  }
}
