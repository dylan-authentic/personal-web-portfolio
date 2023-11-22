import styled, { keyframes } from 'styled-components';
import { device } from './media-breakpoints';

const pixelArtAnimation = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0 0; }
`;

const gradient_secondary = keyframes`
    from { background-position: 0 0; }
    to { background-position: 100% 100%; }
`;

export const RetroBackground = styled.div`
    // background-image: url('/path/to/your/pixel-art-background.png'); // Add your pixel art background image
    background-size: cover;
    animation: ${pixelArtAnimation} 30s linear infinite;
`;

export const GlassCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; // Full viewport height
    padding: 20px; // Optional, for ensuring no overflow of child element
    box-sizing: border-box; // Makes sure padding is included in the height
`;

export const GlassCard = styled.div`
    background: rgba(255, 255, 255, 0.2); // Semi-transparent white
    border-radius: 15px; // Round edges
    margin: 20px 30px; // Adjust the margin as per your requirement
    padding: 20px; // Or any other padding you prefer
    backdrop-filter: blur(4px); // This creates the frosted glass effect
    -webkit-backdrop-filter: blur(10px); // For Safari browser support
    border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
    // max-width: calc(100% - 80px); // Adjusts width with respect to margin
    box-sizing: border-box; // Ensures padding doesn't affect overall width
    height: calc(100vh - 30px); // 20px top margin + 20px bottom margin = 40px

    @media ${device.mobileS} {
      margin: 0px;
      padding: 6px;
    }

    @media ${device.mobileM} {
      
    }
`;

export const Section = styled.div`
    width: auto;
    margin-top: 110px;
    text-align: center;
    @media ${device.mobileS} {
        padding: 0px 0px;
        margin-top: 0px;
    }
    @media ${device.mobileM} {
        margin-top: 130px;
    }
    @media ${device.tablet} {
        padding: 0px 0px;
    }
    @media ${device.laptop} {
        padding: 00px 0px;
    }
    @media ${device.laptopL} {
        padding: 90px 0px;
    }
`;
  
export const IntroHeader = styled.div`
    display: inline-block;
    padding: 0px 50px 15px 50px;
    background: transparent;
    background-size: 400% 400%;
    animation: ${gradient_secondary} 105s ease infinite;
    border-radius: 16px;
    
    h1, p {
      font-family: 'PressStart2P', sans-serif;
      color: green;
      font-size: 63px;
      margin: 0px 0px 10px 0px;
      border-radius: 1px;
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
      &:hover {}
    }
    
    h3 {
      color: #00ff00;
      border: 2px solid #00ff00;
      border-radius: 50px;
      padding: 5px 30px;
      box-shadow: 0 9px #00ff00;
      font-family: 'PressStart2P', sans-serif;
      font-weight: bolditalic;
      font-size: 20px;
      margin: 0px 0px 19px 0px;

      // &:hover { 
      //   background-color: #999; 
      //   color: black;
      // }
    }
    
    img {
      max-width: 100%; // Ensures the image is responsive
      height: auto;
      margin: 0 auto; // Centers the image
    }

    @media ${device.mobileS} {
      padding: 140px 0px 15px 0px;
      p {
        font-size: 30px;
      }
      h1 {
          font-size: 14px;
      }
      h3 {
          font-size: 10px;
          padding: 5px;
          margin: 10px;
      }
    }
    @media ${device.mobileM} {
      padding: 10px 0px 15px 0px;
      h1 {
          font-size: 17px;
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

export const RetroButton = styled.a`
    background: green; // Light green
    border: 3px solid grey; // Darker green for border
    border-radius: 16px;
    color: #00ff00; // Text color for contrast
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-family: 'PressStart2P', sans-serif;
    font-size: 14px;
    margin: 0px 2px;
    cursor: pointer;
    box-shadow: 0 9px #999;

    &:hover { 
      background-color: #999; 
      color: black;
    }
    
    &:active {
      background-color: #ffff00;
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }

    @media ${device.mobileS} {
      font-size: 9px;
    }
`;