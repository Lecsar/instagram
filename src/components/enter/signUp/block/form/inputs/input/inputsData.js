import {
  EMAIL,
  PASSWORD,
  USER_NAME,
  FULL_NAME
} from '../../../../../../../const';
import {
  checkErrorEmail,
  checkErrorPassword,
  checkErrorInName,
  checkErrorInUserName
} from './checks';

const inputsData = [
  {
    placeholder: 'Email',
    checkError: checkErrorEmail,
    name: EMAIL
  },
  {
    placeholder: 'Full name',
    checkError: checkErrorInName,
    name: FULL_NAME
  },
  {
    placeholder: 'Username',
    checkError: checkErrorInUserName,
    name: USER_NAME
  },
  {
    placeholder: 'Password',
    checkError: checkErrorPassword,
    name: PASSWORD
  }
];

export default inputsData;
