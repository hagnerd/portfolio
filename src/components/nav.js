import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';

const Ul = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style: none;
  align-items: center;
`;

const StickyNav = styled.nav`
  bottom: 0;
  left: 0;
  margin-bottom: 15px;
  position: fixed;
  width: 100%;
`;
const H2 = styled.h2`
  color: #24A0DF;
  &:hover {
    color: #9FC7D2;
  }
`

function Nav() {
  return (
    <StickyNav>
      <Ul>
        <li><Link to="/"><H2>Home</H2></Link></li>
        <li><Link to="/about"><H2>About</H2></Link></li>
        <li><Link to="/blog"><H2>Blog</H2></Link></li>
        <li><Link to="/portfolio"><H2>Portfolio</H2></Link></li>
      </Ul>
    </StickyNav>
  )
}

export default Nav;
