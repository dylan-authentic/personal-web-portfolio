import styled from 'styled-components';
import { device } from './media-breakpoints';

export const ContactWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    font-size: 18px;
    background: rgba(255, 255, 255, 0.3); // Semi-transparent white
    border-radius: 15px; // Round edges
    backdrop-filter: blur(4px); // This creates the frosted glass effect
    -webkit-backdrop-filter: blur(10px); // For Safari browser support
    border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
    box-sizing: border-box; // Ensures padding doesn't affect overall width
    position: relative;
    padding: 60px 70px;
    text-align: center;
    a {
        font-family: 'PressStart2P', sans-serif;
        display: block;
        text-align: center;
        font-size: 20px;
        color: #00ff00;
        border-radius: 20px;
        border: 1px solid #00ff00;
        padding: 9px 15px;
        text-decoration: none;
        transition: .2s;
    }

    a:hover {
        transform: translateY(-5px);
    }
`;

export const LinkWrapper = styled.div`
    text-align: center;
    margin-bottom: 18px;
    @media ${device.tablet} {
        margin: 0px 185px 18px 185px;
    }
`;

export const SectionPressed = styled.div`
    margin: 0px 55px 0px 55px;
    h1 {
    color: white;
    font-family: 'PressStart2P', sans-serif;
    }
    @media ${device.mobileS} {
    margin: 40px 10px 0px 10px;
    }
    @media ${device.laptop} {
        margin: 40px 55px 0px 55px;
    }
`;