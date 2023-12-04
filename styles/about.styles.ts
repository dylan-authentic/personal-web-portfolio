import styled from 'styled-components';
import { device } from './media-breakpoints';

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
    padding: 20px 50px;
    margin: 15px 155px 0px 155px; 
    border: 1px solid #00ff00;
    border-radius: 12px;
    color: white;
    font-family: 'PressStart2P', sans-serif;

    h1 {
        margin: 0px;
        color: white;
        font-family: 'PressStart2P', sans-serif;
    }

    @media ${device.mobileS} {
        margin: 8px 10px 25px 10px;
        padding: 16px 33px;
        p {
            font-size: 12px;
        }
    }
    @media ${device.tablet} {
        margin: 8px 55px 25px 55px;
        p {
            font-size: 14px;
        }
    }
    @media ${device.laptop} {
        margin: 8px 110px 25px 110px;
    }
`;