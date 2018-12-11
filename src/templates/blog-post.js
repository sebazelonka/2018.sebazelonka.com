import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const TopArticle = styled(Row)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  h1 {
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: 300;
    font-family: "exo 2", sans-serif;
    color: #999;
  }
  .date {
    font-family: "exo 2", sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
  }
`;

const ContentArticle = styled(Row)`
  .gatsby-resp-image-link {
    .gatsby-resp-image-wrapper {
      .gatsby-resp-image-background-image {
        padding-bottom: 0 !important;
        img {
          width: 100% !important;
          height: initial !important;
          position: relative !important;
        }
      }
    }
  }

  .tags {
    margin-top: 5rem;
    padding-left: 0;
    li {
      display: inline-block;
      margin-right: 1rem;
      font-size: 0.9rem;
      background-color: #eee;
      padding: 5px 10px;
      border-radius: 5px;
      line-height: 1;
      a {
        font-family: "exo 2", sans-serif;
        color: #333;
      }
    }
  }
`;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      {helmet || ""}
      <Container>
        <TopArticle>
          <Col md={{ size: 8, offset: 2 }}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p className="date">Published {date}</p>
          </Col>
        </TopArticle>
        <ContentArticle>
          <Col md={{ size: 8, offset: 2 }}>
            <PostContent content={content} />
            <div class="sharethis-inline-share-buttons mt-5" />
            {tags && tags.length ? (
              <ul className="tags">
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </Col>
        </ContentArticle>
      </Container>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  date: PropTypes.any,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="Sebastian Zelonka | %s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@sebazelonka" />
            <meta
              property="og:url"
              content={"https://sebazelonka.com" + `${post.fields.slug}`}
            />
            <meta property="og:title" content={post.frontmatter.title} />
            <meta
              property="og:description"
              content={post.frontmatter.description}
            />
            <meta
              property="og:image"
              content={
                "https://sebazelonka.com" +
                `${post.frontmatter.image.childImageSharp.original.src}`
              }
            />
            <script
              type="text/javascript"
              src="//platform-api.sharethis.com/js/sharethis.js#property=5c0fe0f87b0b4500110a1c1a&product=inline-share-buttons"
              async="async"
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        image {
          childImageSharp {
            original {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`;
