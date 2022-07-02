import styled from 'styled-components';

export const Searchbars = styled('header')`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.secondary};
  box-shadow: ${p => p.theme.shadows.item};
`;

export const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: ${p => p.theme.borders.none};
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: ${p => p.theme.space[0]}px ${p => p.theme.space[2]}px;
  line-height: ${p => p.theme.lineHeights.body};

  &::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;
