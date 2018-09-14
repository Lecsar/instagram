import React from 'react';
import styled from 'styled-components';

import Input from './inputs/input/Input';

import inputsData from './inputs/input/inputsData';
import SignUpBtn from './sign-up-btn/btn';

const Form = ({
  // props
  inputs,
  isDefaultView,
  // actions
  onBlurSignInput,
  onClearInput,
  onResetDefaultView,
  onChangeInput
}) => {
  const inputsField = inputsData.map((data, index) => {
    const { name } = data;
    const { isError, value } = inputs[name];

    return (
      <Input
        key={index}
        // props
        isError={isError}
        value={value}
        data={data}
        isDefaultView={isDefaultView}
        // actions
        onBlurSignInput={onBlurSignInput}
        onChangeInput={({ target: { value } }) => onChangeInput({ name, value })
        }
        onClearInput={() => onClearInput(name)}
      />
    );
  });

  const StyledForm = styled.form`
    margin-top: 1.5rem;
    width: 100%;
    position: relative;
  `;

  return (
    <StyledForm>
      {inputsField}
      <SignUpBtn onResetDefaultView={onResetDefaultView} />
    </StyledForm>
  );
};

export default Form;
