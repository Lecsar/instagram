import React from 'react';
import PropTypes from 'prop-types';

import { StyledErrorSpan } from './styled-components';

const ErrorSpan = ({ isError, onClearInput }) => (
  <StyledErrorSpan onClick={isError && onClearInput} theme={isError} />
);

export default ErrorSpan;

ErrorSpan.propTypes = {
  isError: PropTypes.bool,
  onClearInput: PropTypes.func
};
