import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
  margin-right: 0.5rem;
  font-weight: 700;
`;

const ProfileLink = ({ value, handler, styles }) => (
    <StyledLink to={`/profile/${value}`} onClick={handler} style={styles}>
        {value}
    </StyledLink>
);

export default ProfileLink;
