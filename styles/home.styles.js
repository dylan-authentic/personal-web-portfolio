import styled, { keyframes } from 'styled-components';
import { device } from './media-breakpoints';

const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    30% {
        background-position: 60% 20%;
    }
    60% {
      background-position: 100% 40%;
    }
    100% {
        background-position: 0% 50%;
    }
`;
  
export const Section = styled.div`
    width: auto;
    height: auto;
    margin-top: 110px;
    text-align: center;
    @media ${device.mobileS} {
        padding: 50px 0px;
        margin-top: 0px;
    }
    @media ${device.tablet} {
        padding: 80px 0px;
    }
    @media ${device.laptop} {
        padding: 80px 0px;
    }
    @media ${device.laptopL} {
        padding: 120px 0px;
    }
`;
  
export const IntroHeader = styled.div`
    display: inline-block;
    padding: 0px 50px 15px 50px;
    background: linear-gradient(-45deg, #0F2027, #203A43, #2C5364, #1d1d1d);
    background-size: 400% 400%;
    animation: ${gradient} 15s ease infinite;
    border-radius: 16px;

    h1 {
        font-family: 'Fraunces', sans-serif;
        font-size: 63px;
        color: white;
        margin: 20px 0px 10px 0px;
    }

    @media ${device.mobileS} {
        padding: 0px 20px 15px 20px;
        margin: 0px 18px;
        h1 {
            font-size: 28px;
        }
    }
    @media ${device.tablet} {
        h1 {
            font-size: 38px;
        }
    }
    @media ${device.laptopL} {
        padding: 0px 50px 15px 50px;
        margin: 0px;
        h1 {
            font-size: 58px;
        }
    }
`;
  
export const CoffeeMug = styled.span`
    margin: 0px;
    font-size: 50px;
    @media ${device.mobileS} {
        font-size: 24px;
    }
    @media ${device.tablet} {
        font-size: 33px;
    }
    @media ${device.laptopL} {
        font-size: 45px;
    }
`;
  
export const MenuLink = styled.a`
    padding: 3px 15px;
    color: white;
    font-size: 15px;
    font-family: 'Inconsolata', sans-serif;
    cursor: pointer;
`;
  
export const IntroContent = styled.div`
    padding-top: 40px;
    text-align: center;
    font-family: 'Inconsolata', sans-serif;
    font-size: 18px;

    p {
        display: inline-block;
        text-align: left;
        width: 55%;
    }
    @media ${device.mobileS} {
        padding-top: 12px;
        p {
            width: auto;
            padding: 0px 20px;
            font-size: 16px;
        }
    }
    @media ${device.tablet} {
        p {
            width: 75%;
        }
    }
    @media ${device.laptop} {
        p {
            width: 60%;
            font-size: 18px;
        }
    }
    @media ${device.laptopL} {
        p {
            width: 50%;
        }
    }
`;

export const LinkBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;