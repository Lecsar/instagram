import React from 'react';

import {
  StyledDiv,
  StyledImg,
  StyledH3,
  StyldeInfoGroup,
  StyledH5
} from './styled-components';

const Profile = ({ profileName, profilePhoto, place }) => (
  <StyledDiv>
    <StyledImg src={profilePhoto} alt="" />
    <div>
      <StyldeInfoGroup>
        <StyledH3>{profileName}</StyledH3>
      </StyldeInfoGroup>
      <StyledH5>{place}</StyledH5>
    </div>
  </StyledDiv>
);

export default Profile;
