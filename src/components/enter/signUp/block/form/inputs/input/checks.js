import {
  EMAIL_REG_EXP,
  MIN_PASSWORD_LENGTH,
  MIN_NAME_LENGTH
} from '../../../../../../../const';

export const checkErrorEmail = value => value.search(EMAIL_REG_EXP) === -1;

export const checkErrorPassword = value => value.length < MIN_PASSWORD_LENGTH;

export const checkErrorInName = value => value.length < MIN_NAME_LENGTH;

export const checkErrorInUserName = value => value.length < MIN_NAME_LENGTH;
