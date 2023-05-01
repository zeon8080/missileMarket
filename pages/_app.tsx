import ApolloSetting from "../src/components/commons/apollo";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          {/* <Layout> */}
          <Component />
          {/* </Layout> */}
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
