import { Button, Card } from "semantic-ui-react";
import {
  ReceivedOffersQueryComponent,
  ReceivedOffersQueryQuery,
  UpdateOfferStatusMutationComponent
} from "../components/apollo-components";
import Layout from "../components/Layout";
import { receivedOffersQuery } from "../graphql/offer/query/receivedOffers";

export default () => (
  <Layout showMenu={true} title="view code review offers">
    <UpdateOfferStatusMutationComponent
      update={(store, { data }) => {
        if (!data || !data.updateOfferStatus.offer) {
          return null;
        }
        const { offer } = data.updateOfferStatus;
        const query = store.readQuery<ReceivedOffersQueryQuery>({
          query: receivedOffersQuery
        });
        // console.log(offer);
        // console.log(query);
        if (offer && query) {
          store.writeQuery({
            query: receivedOffersQuery,
            data: {
              ...query,
              receivedOffers: query.receivedOffers.map(x =>
                x.codeReview.id === offer.codeReview.id &&
                x.sender.id === offer.sender.id
                  ? offer
                  : x
              )
            }
          });
        }
        // store.writeQuery({
        //   query: receivedOffersQuery,
        //   data: {
        //     ...query,
        //     receivedOffers: query.receivedOffers.map(x =>
        //       x.codeReview.id === offer.codeReview.id &&
        //       x.sender.id === offer.sender.id
        //         ? offer
        //         : x
        //     )
        //   }
        // });
      }}>
      {mutate => (
        <ReceivedOffersQueryComponent>
          {({ data, loading }) =>
            loading ? (
              <div>Loading...</div>
            ) : !data ? null : (
              <Card.Group>
                {data.receivedOffers.map(
                  ({ codeReview, sender, status }, idx) => (
                    <Card key={idx}>
                      <Card.Content>
                        <Card.Header>{sender.username}</Card.Header>
                        <Card.Meta>
                          <a
                            href={codeReview.codeUrl}
                            style={{ wordBreak: "break-all" }}>
                            {codeReview.codeUrl}
                          </a>
                        </Card.Meta>
                        <Card.Description>{codeReview.notes}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <div className="ui two buttons">
                          <Button
                            basic
                            color="green"
                            disabled={status === "approved"}
                            onClick={() => {
                              mutate({
                                variables: {
                                  input: {
                                    codeReviewId: codeReview.id,
                                    userId: sender.id,
                                    status: "approved"
                                  }
                                }
                              });
                            }}>
                            Approve
                          </Button>
                          <Button
                            basic
                            color="red"
                            disabled={status === "declined"}
                            onClick={() => {
                              mutate({
                                variables: {
                                  input: {
                                    codeReviewId: codeReview.id,
                                    userId: sender.id,
                                    status: "declined"
                                  }
                                }
                                // update: (store, {data}) =>{
                                //   if(!data ){
                                //     return null
                                //   }
                                // }
                              });
                            }}>
                            Decline
                          </Button>
                        </div>
                      </Card.Content>
                    </Card>
                  )
                )}
              </Card.Group>
            )
          }
        </ReceivedOffersQueryComponent>
      )}
    </UpdateOfferStatusMutationComponent>
  </Layout>
);
