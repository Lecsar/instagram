import React from 'react';
import styled from 'styled-components';

import ImgBlock from './blocks/img-block';
import DescriptionBlock from './blocks/description-block';

import { FLEX_ROW } from '../../../const';

const StyledSection = styled.section`
  ${FLEX_ROW};
  padding-top: 6rem;
  padding-bottom: 3rem;
`;

const UserInfo = ({
  // props
  profileName,
  amountPosts,
  followers,
  dataForFollowBtn,
  amountFollowing,
  profilePhoto,
  description
  // actions
}) => (
  <StyledSection>
    <ImgBlock profilePhoto={profilePhoto} />
    <DescriptionBlock
      // props
      profileName={profileName}
      amountPosts={amountPosts}
      followers={followers}
      dataForFollowBtn={dataForFollowBtn}
      amountFollowing={amountFollowing}
      description={description}
      // actions
    />
  </StyledSection>
);

export default UserInfo;
