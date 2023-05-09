import styled from "@emotion/styled";
import LayoutHeader from "./header/layoutHeader";
import { useRouter } from "next/router";
import LayoutRecent from "./recent";

interface ILayoutPros {
  children: JSX.Element;
}

const Container = styled.div`
  width: 100%;
`;

const LayoutBody = styled.div`
  padding-top: 100px;
`;

export default function Layout(props: ILayoutPros): JSX.Element {
  const router = useRouter();
  const HIDDEN_RECENT = ["/join", "/login"];
  const isHiddenRecent = HIDDEN_RECENT.includes(router.asPath);
  return (
    <Container>
      <LayoutHeader />
      {!isHiddenRecent && <LayoutRecent />}
      <LayoutBody>{props.children}</LayoutBody>
    </Container>
  );
}
