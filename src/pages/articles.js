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
  height: 50vh;
  display: flex;

  h1 {
    font-size: 3rem;
    background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
`;

const Articles = styled.section`
  padding: 5rem 0;
  .article-item {
    padding: 1rem;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    color: #000;
    transition: 0.25s;
    border-bottom: 1px solid #000;
    margin-bottom: 2rem;
    &:hover {
      text-decoration: none;
      background-color: #000;
      color: #fff;
    }
    .title {
      font-size: 1.5rem;
      color: #16a3bc;
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
      sort: { fields: [frontmatter___date], order: DESC }
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
