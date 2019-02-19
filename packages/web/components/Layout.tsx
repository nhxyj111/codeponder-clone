import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import * as React from "react";
import { Container, Menu } from "semantic-ui-react";
import { meQuery } from "../graphql/user/query/me";
import { LogoutMutationComponent, MeQueryComponent } from "./apollo-components";

type Props = {
  title?: string;
  showMenu?: boolean;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
  showMenu
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {showMenu && (
      <LogoutMutationComponent>
        {mutate => (
          <MeQueryComponent>
            {({ data }) => {
              return (
                <Menu>
                  <Link href="/home">
                    <Menu.Item>Home</Menu.Item>
                  </Link>
                  <Menu.Item onClick={() => Router.push("/create-code-review")}>
                    Request a Code Review
                  </Menu.Item>
                  {data && data.me ? (
                    <>
                      <Menu.Item onClick={() => Router.push("/view-offers")}>
                        Offers
                      </Menu.Item>
                      <Menu.Item position="right">{data.me.username}</Menu.Item>
                      <Menu.Item
                        onClick={async () => {
                          await mutate({
                            update: store => {
                              store.writeQuery({
                                query: meQuery,
                                data: {
                                  me: null
                                }
                              });
                            }
                          });
                          Router.push("/home");
                        }}>
                        Logout
                      </Menu.Item>
                    </>
                  ) : (
                    <>
                      <Menu.Item
                        position="right"
                        onClick={() => Router.push("/register")}>
                        Register
                      </Menu.Item>
                      <Menu.Item onClick={() => Router.push("/login")}>
                        Login
                      </Menu.Item>
                    </>
                  )}
                </Menu>
              );
            }}
          </MeQueryComponent>
        )}
      </LogoutMutationComponent>
    )}
    {children}
  </Container>
);

export default Layout;
