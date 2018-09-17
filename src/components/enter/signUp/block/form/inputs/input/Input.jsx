import React from 'react';
import PropTypes from 'prop-types';

import { PASSWORD } from '../../../../../../../const';
import Icon from '../icon/icon';

import { StyledInput } from './styled-components';

const Input = ({
  // props
  data: { placeholder, checkError, name },
  isError,
  value,
  isDefaultView,
  onBlurSignInput,
  onChangeInput,
  onClearInput
}) => {
  const icon = <Icon isError={isError} onClearInput={onClearInput} />;

  return (
    <div style={{ position: 'relative' }}>
      <StyledInput
        type={name !== PASSWORD ? 'text' : PASSWORD}
        placeholder={placeholder}
        value={value}
        onBlur={({ target: { value } }) => onBlurSignInput({ name, value, isError: checkError(value) })
        }
        onChange={onChangeInput}
      />
      {isDefaultView || icon}
    </div>
  );
};

export default Input;

Input.propTypes = {
  isError: PropTypes.bool,
  value: PropTypes.string,
  isDefaultView: PropTypes.bool,
  onBlurSignInput: PropTypes.func,
  onChangeInput: PropTypes.func,
  onClearInput: PropTypes.func
};
