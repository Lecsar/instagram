import React from 'react';

import {
  StyledUl,
  StyledLi,
  StyledLink,
  StyledImg,
  StyledDiv,
  StyledH3,
  StyledName,
  StyledInputBlock,
  StyledInput,
  StyledSpinner
} from './styled-components';

const Search = ({
  searchField: { value: inputValue, profilesList, isRequest },
  onChangeSearchInput,
  onResetSearchInput
}) => {
  const profileList = (
    <StyledUl>
      {profilesList.map(
        ({
 profilePhoto, profileName, _id, description: { name } 
}) => (
          <StyledLi key={_id} onClick={onResetSearchInput}>
            <StyledLink to={`${profileName}`}>
              <StyledImg src={profilePhoto} alt={name} />
              <StyledDiv>
                <StyledH3>{profileName}</StyledH3>
                <StyledName>{name}</StyledName>
              </StyledDiv>
            </StyledLink>
          </StyledLi>
        )
      )}
    </StyledUl>
  );

  return (
    <StyledInputBlock>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={({ target: { value } }) => onChangeSearchInput(value)}
      />
      {inputValue && profileList}
      {isRequest && <StyledSpinner />}
    </StyledInputBlock>
  );
};

export default Search;
