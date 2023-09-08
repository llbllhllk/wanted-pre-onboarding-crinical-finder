import styled from "styled-components";
import { Sick } from "types";

interface Props {
  sicks: Sick[];
  activeIndex: number;
}

const SearchSuggestion = ({ sicks, activeIndex }: Props) => {
  return (
    <SearchSuggestionLayout>
      <Title>추천 검색어</Title>
      <SuggestionContainer>
        {sicks.length === 0 ? (
          <Empty>검색어 없음</Empty>
        ) : (
          sicks.map((sick: Sick, idx) => (
            <Suggestion key={sick.sickCd} isActive={activeIndex === idx}>
              {sick.sickNm}
            </Suggestion>
          ))
        )}
      </SuggestionContainer>
    </SearchSuggestionLayout>
  );
};

export default SearchSuggestion;

const SearchSuggestionLayout = styled.div`
  position: absolute;
  top: 80px;
  box-sizing: border-box;
  width: 580px;
  background-color: #fff;
  border-radius: 14px;
  padding: 24px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 12px;
  color: #b1b1b1;
`;

const Empty = styled.strong`
  font-size: 16px;
  font-weight: 400;
  color: #b1b1b1;
`;

const SuggestionContainer = styled.ul`
  list-style: none;
  padding-left: 0;
  max-height: 250px;
  overflow: scroll;
  margin: 0;
`;

const Suggestion = styled.li<{ isActive: boolean }>`
  margin-bottom: 12px;
  cursor: pointer;

  background-color: ${(props) => (props.isActive ? "#7fffffd2" : "#fff")};

  &:last-of-type {
    margin-bottom: 0;
  }
`;
