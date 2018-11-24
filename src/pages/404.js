import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Row>
        <Col>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default NotFoundPage;
