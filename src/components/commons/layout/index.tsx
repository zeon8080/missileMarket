import styled from "@emotion/styled";
import LayoutHeader from "./header/layoutHeader";

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
  return (
    <Container>
      <LayoutHeader />
      <LayoutBody>{props.children}</LayoutBody>
    </Container>
  );
}
