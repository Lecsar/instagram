import React from 'react';
import styled from 'styled-components';
import createPureStatelessComponent from 'react-pure-stateless-component';

import btnData from './data';
import { FLEX_ROW } from '../../../const';

const StyledDiv = styled.div`
  ${FLEX_ROW};
  justify-content: space-between;
  width: 40rem;
  height: 4rem;
`;

const StyledImg = styled.img`
  height: 100%;
  max-width: 140px;
`;

const AppBtns = () => {
  const btns = btnData.map(({
 name, img, link, id 
}) => (
    <a key={id} href={link}>
      <StyledImg src={img} alt={name} />
    </a>
  ));

  return <StyledDiv>{btns}</StyledDiv>;
};

export default createPureStatelessComponent(AppBtns);
