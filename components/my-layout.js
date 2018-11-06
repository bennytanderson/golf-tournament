import {
  Button,
  Container,
  Row,
  Col
} from "@farvisionllc/emotion-react-bootstrap";

import Header from "./header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <Container>
    <Row>
      <Col>
        <div style={layoutStyle}>
          <Header />

          {props.children}
        </div>
      </Col>
    </Row>
  </Container>
);

export default Layout;
