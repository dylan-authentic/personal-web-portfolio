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
    height: 100vh;
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
  
// Assuming you have the same gradient animation defined as in the Wrapper component
const gradient_secondary = keyframes`
  from { background-position: 0 0; }
  to { background-position: 100% 100%; }
`;

export const IntroHeader = styled.div`
    display: inline-block;
    padding: 0px 50px 15px 50px;
    background: 
    transparent;
    background-size: 400% 400%;
    animation: ${gradient_secondary} 105s ease infinite;
    border-radius: 16px;
    
    h1 {
        font-family: 'Fraunces', sans-serif;
        font-size: 63px;
        color: white;
        margin: 20px 0px 10px 0px;
    }

    img {
        max-width: 100%; // Ensures the image is responsive
        height: auto;
        margin: 0 auto; // Centers the image
    }

    @media ${device.mobileS} {
        padding: 180px 20px 15px 20px;
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
  
export const MenuLink = styled.div`
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

const pixelArtAnimation = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0 0; }
`;

export const RetroBackground = styled.div`
  background-image: url('/path/to/your/pixel-art-background.png'); // Add your pixel art background image
  background-size: cover;
  animation: ${pixelArtAnimation} 30s linear infinite;
`;

export const RetroButton = styled.button`
  background-color: #FF00FF; // Bright, contrasting color
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 0 9px #999;
  &:hover { background-color: #DD00DD }
  &:active {
    background-color: #DD00DD;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const OptionsButton = styled.button`
  background-color: #00A0FF; // Choose a bright retro color
  color: white;
  border: 2px solid #FFF; // White border for the retro arcade look
  font-family: 'Press Start 2P', cursive; // Retro, pixelated font
  font-size: 1rem;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0px 4px #008CBA; // Shadow for a 3D effect
  transition: all 0.3s ease;

  &:hover {
    background-color: #008CBA;
    box-shadow: 0px 2px #666;
    transform: translateY(2px);
  }

  &:active {
    transform: translateY(4px);
    box-shadow: 0 2px #333;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 8px 16px;
  }
`;