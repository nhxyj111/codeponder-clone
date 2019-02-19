import { Button, Card } from "semantic-ui-react";
import { ReceivedOffersQueryComponent } from "../components/apollo-components";
import Layout from "../components/Layout";

export default () => (
  <Layout showMenu={true} title="view code review offers">
    <ReceivedOffersQueryComponent>
      {({ data, loading }) =>
        loading ? (
          <div>Loading...</div>
        ) : !data ? null : (
          <Card.Group>
            {data.receivedOffers.map(({ codeReview, sender }, idx) => (
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
                    <Button basic color="green">
                      Approve
                    </Button>
                    <Button basic color="red">
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        )
      }
    </ReceivedOffersQueryComponent>
  </Layout>
);
