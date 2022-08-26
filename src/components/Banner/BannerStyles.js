import styled from 'styled-components';

export const Container = styled.body`
    
`;

export const ImageContainer = styled.body`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    width: 300px;
    background-image: url(../../zelda.png);
`;

export const BgText = styled.body`

    color: white;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    z-index: 2;
    width: 50vw;
    padding: 20px;
    text-align: center;
`;