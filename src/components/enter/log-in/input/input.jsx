import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Input = styled.input`
  margin-top: 1rem;
  padding-left: 1rem;
  width: calc(100% - 1rem);
  border: 1px solid #dbd9d9;
  border-radius: 3px;
  height: 3.4rem;
  outline: none;
  background-color: #fafafa;
  font-size: 1.5rem;
`;

const LoginInput = ({
 value, placeholder, type, onChange 
}) => (
  <Input
    value={value}
    placeholder={placeholder}
    type={type}
    onChange={onChange}
  />
);

export default LoginInput;

LoginInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
