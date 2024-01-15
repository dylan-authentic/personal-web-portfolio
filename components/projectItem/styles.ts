import styled from 'styled-components';
import { device } from '../../styles/media-breakpoints';

export const ProjectItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: black;
    // border: 2px solid #00ff00;
    border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
    border-radius: 15px; // Round edges
    width: 30%;
    margin-bottom: 35px;
    font-family: 'PressStart2P', sans-serif;
    font-size: 12px;
    @media ${device.mobileS} {
        width: auto;
    }
    @media ${device.tablet} {
        width: 45%;
    }
    @media ${device.laptop} {
        width: 30%;
    }
`;

export const ProjectItemTop = styled.div`
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background: rgba(255, 255, 255, 0.2); // Semi-transparent white
    // background: rgba(0, 0, 0, 0.6); // Semi-transparent white
    background: grey;
    padding: 12px 30px;
    color: white;
    height: 100%;

    h3 {
        margin: 12px 0px 0px 0px;
        color: #00ff00;
        border-bottom: 1px solid #00ff00;
        display: inline-block;
    }
`;

export const ProjectItemBottom = styled.div`
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    // background-color: white;
    background: rgba(0, 0, 0, 0.6); // Semi-transparent white
    background: rgba(255, 255, 255, 0.2); // Semi-transparent white
    // background: grey;

    color: #203A43;
    padding: 15px 30px 50px 30px;

    a {
        color: white;
        display: block;
        margin-bottom: 10px;
        font-size: 10px;
    }
`;