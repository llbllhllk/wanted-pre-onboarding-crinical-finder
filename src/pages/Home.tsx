import styled from 'styled-components';
import SearchBar from 'components/common/SearchBar';
import SearchButton from 'components/common/SearchButton';
import { useRef, useState, ChangeEvent, FormEvent } from 'react';
import SearchSuggestion from 'components/SearchSuggestion';
import useClickOutside from 'hooks/useClickOutside';
import { search } from 'api/sick';
import { Sick } from 'types';
import useKeyDown from 'hooks/useKeyDown';
import useDebounce, { DEFAULT_DELAY } from 'hooks/useDebounce';

const Home = () => {
  const [value, setValue] = useState('');
  const [sicks, setSicks] = useState<Sick[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchBarRef = useRef<HTMLInputElement | null>(null);
  const [activeIdx, handleKeyDown] = useKeyDown(sicks || []);

  useClickOutside(searchBarRef, () => setIsFocused(false));
  useDebounce(value, () => fetchResults(), DEFAULT_DELAY);

  const fetchResults = async () => {
    value !== '' ? setSicks((await search(value.trim())).slice(0, 10)) : setSicks([]);
  };

  return (
    <HomeLayout>
      <Title>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </Title>
      <SearchContainer onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <SearchBar
          name="search"
          onKeyDown={handleKeyDown}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          placeholder="질환명을 입력해주세요."
          onFocus={() => setIsFocused(true)}
          ref={searchBarRef}
        />
        <SearchButton />
        {isFocused && <SearchSuggestion sicks={sicks} activeIndex={activeIdx} />}
      </SearchContainer>
    </HomeLayout>
  );
};

export default Home;

const HomeLayout = styled.section`
  background-color: #cae9ff;
  padding: 80px 0 180px 0;
`;

const Title = styled.h1`
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  text-align: center;
`;

const SearchContainer = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
