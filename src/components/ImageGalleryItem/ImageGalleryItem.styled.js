import styled from 'styled-components';

export const StyledItem = styled.li`
  overflow: hidden;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.item};
`;

export const GalleyImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
