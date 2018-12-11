import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { Container, Row, Col } from "reactstrap";

import styled from "styled-components";

const Title = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  height: 35vh;
  display: flex;

  background: -moz-radial-gradient(#666 10%, transparent 10%),
    -moz-radial-gradient(#666 10%, transparent 10%), black;
  background: -webkit-radial-gradient(#666 10%, transparent 10%),
    -webkit-radial-gradient(#666 10%, transparent 10%), black;
  background-position: 0 0, 80px 80px;

  background-size: 10px 10px;

  h1 {
    font-size: 3rem;
    background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
`;

const Articles = styled.section`
  margin: 2rem 0;
  .article-item {
    /* background-color: #000; */
    padding: 1rem;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    color: #000;
    border-radius: 15px;
    transition: 0.25s;
    margin-bottom: 1rem;
    &:hover {
      text-decoration: none;
      background-color: #333;
      color: #fff;
    }
    .title {
      font-size: 1.5rem;
      color: #00c6d1;
    }
    .date {
      font-size: 0.75rem;
      margin: auto 0 0;
    }
  }
`;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout background="red">
        <Title>
          <h1>Some Thoughts</h1>
        </Title>
        <Articles>
          <Container>
            <Row>
              {posts.map(({ node: post }) => (
                <Col key={post.frontmatter.date} md="4">
                  <Link to={post.fields.slug} className="article-item">
                    <h2 className="title">{post.frontmatter.title}</h2>
                    <p className="description">
                      {post.frontmatter.description}
                    </p>
                    <p className="date">{post.frontmatter.date}</p>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </Articles>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query ArticlesQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
