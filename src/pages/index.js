import React from "react";
import Layout from "../layouts/default-layout";
import styled from "react-emotion";
import { Transition, config } from "react-spring";

const PerfectlyCentered = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

const Highlight = styled.span`
color: #F7B300;
` 
const H1 = styled.h1`
color: #FDFDF7;
`

export default () => (
  <Layout>

    <Transition
      config={config.molasses}
      from={{ opacity: 0, y: 0.5}}
      enter={{ opacity: 1, y: 1}}
      leave={{ opacity: 0, y: 0.5}}
    >
    {( styles ) => (
      <PerfectlyCentered
        style={{ 
          opacity: styles.opacity,
          transform: `scale(${styles.y})` 
        }}
      >
        <H1>
          Hi, I'm <Highlight>Matt Hagner</Highlight>.
          <br />
          I'm a full-stack web developer.
        </H1>
      </PerfectlyCentered>
    )}
  </Transition>

  </Layout>
)
