import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { Container, Row, Col } from "reactstrap";

import styled from "styled-components";

const MainButton = styled(Link)`
  font-family: "Exo 2", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 15px;
`;

const Articles = styled.section`
  .article-item {
    background-color: #000;
    padding: 1rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    color: #000;
    border-radius: 15px;
    transition: 0.25s;
    &:hover {
      text-decoration: none;
      border-radius: 0;
    }
    .title {
      font-size: 1.5rem;
      background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
    .description {
      color: #fff;
    }
    .date {
      color: #fff;
      margin: auto 0 0;
    }
  }
`;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <Articles>
          <Container>
            <Row>
              <Col>
                <h1>Articles</h1>
              </Col>
            </Row>
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
