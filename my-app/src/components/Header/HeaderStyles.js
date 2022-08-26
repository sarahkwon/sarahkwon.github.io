import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 1rem;
`;

export const Span = styled.span`

`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  margin-top: 0.25rem;
  padding-left: 1rem;
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.a`

`;

export const NavLink1 = styled.a`
  font-size: 1.75rem;
  line-height: 32px;
  color: rgba(0,0,0, 0.6);
  transition: 0.4s ease;
  &:hover {
    color: #000;
    opacity: 1;
    cursor: pointer;
    font-size: 1.85rem;
  }
`;

export const NavLink2 = styled.a`
  font-size: 1.75rem;
  line-height: 32px;
  color: rgba(0,0,0, 0.6);
  transition: 0.4s ease;
  &:hover {
    color: #55b02e;
    opacity: 1;
    cursor: pointer;
    font-size: 1.85rem;
  }
`;

export const NavLink3 = styled.a`
  font-size: 1.75rem;
  line-height: 32px;
  color: rgba(0,0,0, 0.6);
  transition: 0.4s ease;
  &:hover {
    color: #000;
    opacity: 1;
    cursor: pointer;
    font-size: 1.85rem;
  }
`;

export const Li = styled.li`
  list-style-type: none;
`;

export const Img1 = styled.img`
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: #000;
  border-radius: 50px;
  &:hover {
      transform: scale(1.2);
      cursor: pointer;
      
    }
`;
