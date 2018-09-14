import React from 'react';

import linksData from './linksData';

import {
 Li, StyledLink, FooterStyled, Ul, H2 
} from './styled-components';

const Footer = () => {
  const links = linksData.map(({ name, link }, index) => (
    // eslint-disable-next-line
    <Li key={index}>
      <StyledLink to={link}>{name}</StyledLink>
    </Li>
  ));

  return (
    <FooterStyled>
      <Ul>{links}</Ul>
      <H2>&copy; 2018 Instagram</H2>
    </FooterStyled>
  );
};

export default Footer;
