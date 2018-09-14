import React from 'react';
import styled from 'styled-components';
import {
  FLEX_ROW_CENTER,
  RESET,
  BTN_COLOR_HEADER,
  SpinnerStyle
} from '../../../../../const';

const StyledDiv = styled.div`
  ${FLEX_ROW_CENTER};
  margin-bottom: 2rem;
`;

const StyledH2 = styled.h2`
  ${RESET};
  font-size: 4rem;
  font-weight: 500;
  margin-right: 2rem;
`;

const StyledBtn = styled.button`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border: 0;
  border-radius: 3px;
  background-color: ${BTN_COLOR_HEADER};
  color: white;
  cursor: pointer;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  outline: none;
`;

const StyledSpinner = styled(SpinnerStyle)`
  font-size: 0.4rem;
  position: relative;
  top: 0;
  left: 0;
  margin-left: 2rem;
`;

const Profile = ({
  profileName,
  dataForFollowBtn: {
    text,
    style,
    styleForSpinner,
    // actions
    toggleFollowOnUserRequest
  }
}) => (
  <StyledDiv>
    <StyledH2>{profileName}</StyledH2>
    <StyledBtn style={style} onClick={toggleFollowOnUserRequest}>
      {text}
    </StyledBtn>
    <StyledSpinner style={styleForSpinner} />
  </StyledDiv>
);

export default Profile;
