import styled from 'styled-components';

export const StyledErrorSpan = styled.span`
  display: block;
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 1.4rem;
  left: 90%;
  background-size: cover;
  background-image: ${({ theme }) =>
    theme
      ? "url('http://s1.iconbird.com/ico/0612/vistabasesoftwareicons/w128h1281339252558DeleteRed2.png')"
      : "url('https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_icon-icons.com_69146.png')"}
  cursor: ${({ theme }) => theme && 'pointer'};
`;
