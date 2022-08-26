import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 24px 0 40px;
`

export const Box = styled.div`
  background: #DE9ECE;
  border-radius: 12px;
  height: 75px;
  padding: 24px;
  
`
export const BoxTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 16px;
  letter-spacing: 0.01em;
  margin-bottom: 8px;
  margin-top: 0px;
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(0, 0, 0, 0.7);
`

