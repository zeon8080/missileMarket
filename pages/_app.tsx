import ApolloSetting from "../src/components/commons/apollo";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../src/components/commons/layout";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
