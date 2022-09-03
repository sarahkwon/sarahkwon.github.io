import styled from 'styled-components'

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  
  margin-bottom: 16px;
`;

export const SectionDivider = styled.div`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #000;


  }
`