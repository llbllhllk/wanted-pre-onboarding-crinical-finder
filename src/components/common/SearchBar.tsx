import React from "react";
import styled from "styled-components";
import { ChangeEvent, KeyboardEvent, forwardRef } from "react";

interface Props {
  name: string;
  value: string;
  placeholder: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  onKeyDown(e: KeyboardEvent<HTMLInputElement>): void;
  onFocus?(): void;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
}

const SearchBar = forwardRef<HTMLInputElement, Props>(
  (
    { name, value, onChange, placeholder, onFocus, onKeyDown, ...props },
    ref,
  ) => {
    return (
      <SearchBarContainer
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        ref={ref}
        {...props}
      />
    );
  },
);

export default SearchBar;

const SearchBarContainer = styled.input`
  display: block;
  box-sizing: border-box;
  min-width: 490px;
  height: 69.7px;
  border-radius: 42px;
  border: 2px solid;
  background-color: #fff;
  border: none;
  padding: 20px 10px 20px 24px;
  font-size: 1.125rem;
  margin-right: 24px;

  &:focus {
    border-color: 2px solid #007be9;
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #ccc;
    opacity: 0.7;
  }
`;
