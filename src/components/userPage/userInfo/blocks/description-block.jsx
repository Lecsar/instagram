import React from 'react';
import styled from 'styled-components';

import Profile from './description/profile';
import Media from './description/media';
import Text from './description/text';

import { FLEX_COLUMN } from '../../../../const';

const StyledDiv = styled.div`
  ${FLEX_COLUMN};
  margin-left: 10rem;
`;

const DescriptionBlock = ({
  profileName,
  amountPosts,
  followers,
  dataForFollowBtn,
  amountFollowing,
  description
}) => (
  <StyledDiv>
    <Profile profileName={profileName} dataForFollowBtn={dataForFollowBtn} />
    <Media
      amountPosts={amountPosts}
      followers={followers}
      amountFollowing={amountFollowing}
    />
    <Text description={description} />
  </StyledDiv>
);

export default DescriptionBlock;
