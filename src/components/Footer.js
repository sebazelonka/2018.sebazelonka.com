import React from "react";
import styled from "styled-components";
import SimpleLineIcon from "react-simple-line-icons";

const FooterSection = styled.section`
    background-color: #000;
    display: flex;
    padding: 2rem;
    justify-content: center;
    a {
        margin: 0 2rem;
        opacity: 0.75;
        transition: 0.25s;
        &:hover {
            opacity: 1;
            text-decoration: none;
        }
    }
    [class^="icon-"] {
        font-size: 3rem !important;
        background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    }
`;

export default class Footer extends React.Component {
    render() {
        return (
            <FooterSection>
                <a
                    href="https://www.linkedin.com/in/sebastianzelonka/"
                    target="blank"
                    title="LinkedIn"
                >
                    <SimpleLineIcon name="social-linkedin" />
                </a>
                <a
                    href="https://github.com/sebazelonka"
                    target="blank"
                    title="Github"
                >
                    <SimpleLineIcon name="social-github" />
                </a>
                <a
                    href="https://twitter.com/sebazelonka"
                    target="blank"
                    title="Twitter"
                >
                    <SimpleLineIcon name="social-twitter" />
                </a>
            </FooterSection>
        );
    }
}
