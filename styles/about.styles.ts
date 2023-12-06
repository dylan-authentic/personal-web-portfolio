import styled from 'styled-components';
import { device } from './media-breakpoints';
import { GlassCard } from './home.styles';

export const GlassCardDark = styled(GlassCard)`
    background: rgba(0, 0, 0, 0.6); // Semi-transparent black
`;

export const Wrapper = styled.div`
    padding-bottom: 20px;

    h1 {
        color: #1d1d1d;
        font-family: 'Inconsolata', sans-serif;
    }
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    a {
        padding: 15px;
        font-size: 14px;
        font-family: 'Inconsolata', sans-serif;
        text-decoration: underline;
        color: #014c8d;
    }
    @media ${device.mobileS} {
        margin-top: 5px;
        a {
            text-align: center;
        }
    }
`;

export const ContentWrapper = styled.div`
    padding: 20px 15px;
    // margin: 15px 155px 0px 155px; 
    // border: 1px solid #00ff00;
    border-radius: 12px;
    color: white;
    font-family: 'PressStart2P', sans-serif;
    position: fixed;
    overflow-y: scroll;
    max-height: 100vh; // This will make the container's height not exceed the viewport height


    h1 {
        margin: 0px;
        color: white;
        font-family: 'PressStart2P', sans-serif;
    }

    @media ${device.mobileS} {
        // margin: 8px 10px 25px 10px;
        padding: 26px 28px;
        p {
            font-size: 12px;
        }
    }
    @media ${device.mobileM} {
        // margin: 8px 10px 25px 10px;
        padding: 16px 40px;
        p {
            font-size: 12px;
        }
    }
    @media ${device.tablet} {
        // margin: 8px 55px 25px 55px;
        p {
            font-size: 14px;
        }
    }
    @media ${device.laptop} {
        // margin: 8px 110px 25px 110px;
    }
`;

export const BackButton = styled.div`
    font-family: 'PressStart2P', sans-serif;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
    text-shadow:
        2px 0 0 #00ff00, // Right
        3px 0 0 #00ff00,
        -2px 0 0 #00ff00, // Left
        -3px 0 0 #00ff00,
        0 2px 0 #00ff00, // Down
        0 3px 0 #00ff00,
        0 -2px 0 #00ff00, // Up
        0 -3px 0 #00ff00,
        2px 2px 0 #00ff00, // Diagonal down right
        2px -2px 0 #00ff00, // Diagonal up right
        -2px 2px 0 #00ff00, // Diagonal down left
        -2px -2px 0 #00ff00;
`;

export { GlassCardContainer } from './home.styles';