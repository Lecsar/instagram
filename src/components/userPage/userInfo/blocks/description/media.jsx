import React from 'react';
import styled from 'styled-components';
import { FLEX_ROW_CENTER } from '../../../../../const';

const StyledMedia = styled.div`
  ${FLEX_ROW_CENTER};
  margin-bottom: 2rem;
`;

const StyledInfo = styled.div`
  margin-right: 2rem;
  font-size: 2.3rem;
`;

const StyledSpan = styled.span`
  margin-right: 0.5rem;
  font-weight: 700;
`;

const Media = ({ amountPosts, followers, amountFollowing }) => {
  const mediaSpans = [
    {
      id: 1,
      amount: amountPosts,
      name: 'posts'
    },
    {
      id: 2,
      amount: followers.length,
      name: 'followers'
    },
    {
      id: 3,
      amount: amountFollowing,
      name: 'following'
    }
  ];

  const mediaInfoArr = mediaSpans.map(({ id, amount, name }) => (
    <StyledInfo key={id}>
      <StyledSpan>{amount}</StyledSpan>
      {name}
    </StyledInfo>
  ));

  return <StyledMedia>{mediaInfoArr}</StyledMedia>;
};

export default Media;
