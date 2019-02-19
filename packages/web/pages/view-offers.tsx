import { ReceivedOffersQueryComponent } from "../components/apollo-components";
import Layout from "../components/Layout";

export default () => (
  <Layout showMenu={true} title="view code review offers">
    <ReceivedOffersQueryComponent>
      {({ data }) => <div>{JSON.stringify(data)}</div>}
    </ReceivedOffersQueryComponent>
  </Layout>
);
