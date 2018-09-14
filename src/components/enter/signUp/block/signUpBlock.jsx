import React from 'react';

import Form from './form/form';
import { SignHeader } from './sign-components';

import {
  StyledSection,
  StyledDescription,
  StyledWarning,
  StyledBtn,
  StyledDiv,
  StyledHr,
  StyledSpan,
  StyledLink
} from './styled-components';

const warningLinksData = [
  {
    name: 'Terms',
    link: '/'
  },
  {
    name: 'Data Policy',
    link: '/'
  },
  {
    name: 'Cookies Policy',
    link: '/'
  }
];

const SignUpBlock = ({
  // props
  inputs,
  isDefaultView,
  // actions
  onBlurSignInput,
  onClearInput,
  onResetDefaultView,
  onChangeInput
}) => {
  const form = (
    <Form
      // props
      inputs={inputs}
      isDefaultView={isDefaultView}
      // actions
      onBlurSignInput={onBlurSignInput}
      onResetDefaultView={onResetDefaultView}
      onChangeInput={onChangeInput}
      onClearInput={onClearInput}
    />
  );

  const [terms, dataPolicy, cookiesPolicy] = warningLinksData.map(
    ({ name, link }, index) => (
      <StyledLink key={index} to={link}>
        {name}
      </StyledLink>
    )
  );

  return (
    <StyledSection>
      <SignHeader />
      <StyledDescription>
        Sign up to see photos and videos from your friends
      </StyledDescription>
      <StyledBtn>Log in with Facebook</StyledBtn>
      <StyledDiv>
        <StyledHr />
        <StyledSpan>OR</StyledSpan>
        <StyledHr />
      </StyledDiv>
      {form}
      <StyledWarning>
        By signing up, you agree to our
        {terms},{dataPolicy}
        and
        {cookiesPolicy}.
      </StyledWarning>
    </StyledSection>
  );
};

export default SignUpBlock;
