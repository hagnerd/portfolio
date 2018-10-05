import React from 'react';
import Nav from '../components/nav';
import styled from 'react-emotion';

const LinearGradient = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #334444;
`;

const Layout =  ({ children }) => (
  <LinearGradient>
    {children}
    <Nav />
  </LinearGradient>
);

export default Layout;
