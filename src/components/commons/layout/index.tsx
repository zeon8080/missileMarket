import styled from "@emotion/styled";
import LayoutHeader from "./header/layoutHeader";

interface ILayoutPros {
  children: JSX.Element;
}

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
`;

const LayoutBody = styled.div``;

export default function Layout(props: ILayoutPros): JSX.Element {
  return (
    <Container>
      <LayoutHeader />
      <LayoutBody>{props.children}</LayoutBody>
    </Container>
  );
}
