import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 180px;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.secondary};
  padding: ${prop => prop.theme.space[3]}px ${prop => prop.theme.space[5]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.item};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover{
    background-color: ${p => p.theme.colors.hover};
  }
`;
