import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
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
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.a`

`;

export const NavLink = styled.a`
  font-size: 1.75rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.6);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;

export const Li = styled.li`
  list-style-type: none;
`;

export const Img1 = styled.img`
  transition: 0.3s ease;
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
      background-color: #212d45;
      transform: scale(1.2);
      cursor: pointer;
      
    }
`;
