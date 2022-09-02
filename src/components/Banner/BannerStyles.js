import styled from 'styled-components';

export const Container = styled.body`
    
`;

export const ImageContainer = styled.body`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../../zelda.png);
`;

export const BgText = styled.body`
    color: white;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -70%);
    z-index: 2;
    width: 30vw;
    padding: 20px;

    font-size: 65px;
    display: block;
    background-color: transparent;
`;

export const TxtRotateSpan = styled.span`
    font-size: 65px;
    font-weight: 700;
`;

export const AboutMeText = styled.p`
    color: white;
    position: absolute;
    top: 62%;
    left: 25%;
    transform: translate(-50%, -70%);
    z-index: 2;
    width: 30vw;
    padding: 20px;

    font-size: 16px;
    display: block;
`;