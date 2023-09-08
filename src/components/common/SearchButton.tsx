import styled from "styled-components";

const SearchButton = ({ ...props }) => {
  return (
    <SearchButtonContainer type="button" {...props}>
      <SearchIcon>
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
        </svg>
      </SearchIcon>
    </SearchButtonContainer>
  );
};

export default SearchButton;

const SearchButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  background-color: #007be9;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const SearchIcon = styled.div`
  width: 25px;
  height: 25px;
  color: #fff;
`;
