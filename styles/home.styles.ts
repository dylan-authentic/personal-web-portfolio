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
    margin-top: 110px;
    text-align: center;
    @media ${device.mobileS} {
        padding: 50px 0px;
        margin-top: 0px;
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
  
// Assuming you have the same gradient animation defined as in the Wrapper component
const gradient_secondary = keyframes`
  from { background-position: 0 0; }
  to { background-position: 100% 100%; }
`;

export const IntroHeader = styled.div`
    display: inline-block;
    padding: 0px 50px 15px 50px;
    background: transparent;
    background-size: 400% 400%;
    animation: ${gradient_secondary} 105s ease infinite;
    border-radius: 16px;
    
    h3 {
      color: #00ff00;
      // &:hover { background-color: #999; color: black; }
      border: 2px solid #00ff00; // Adjust as needed
    border-radius: 50px; // Adjust as needed
    padding: 5px 30px; // Adjust as needed
    box-shadow: 0 9px #00ff00;
    //     text-shadow:
  // 2px 0 0 #00ff00, // Right
  // 3px 0 0 #00ff00,
  // -2px 0 0 #00ff00, // Left
  // -3px 0 0 #00ff00,
  // 0 2px 0 #00ff00, // Down
  // 0 3px 0 #00ff00,
  // 0 -2px 0 #00ff00, // Up
  // 0 -3px 0 #00ff00,
  // 2px 2px 0 #00ff00, // Diagonal down right
  // 2px -2px 0 #00ff00, // Diagonal up right
  // -2px 2px 0 #00ff00, // Diagonal down left
  // -2px -2px 0 #00ff00;
  font-family: 'PressStart2P', sans-serif;
  font-weight: bolditalic;
  font-size: 20px;
  // padding: 0px 220px;
  margin:0px;
  margin-bottom: 19px;

  }
    h1 {
        font-family: 'PressStart2P', sans-serif;
        color: green;
        font-size: 63px;
        margin: 0px 0px 10px 0px;
        // Create a pixelated border using box-shadow
        border-radius: 1px;

  // Repeat the pattern to create a border as wide as you like
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

    img {
        max-width: 100%; // Ensures the image is responsive
        height: auto;
        margin: 0 auto; // Centers the image
    }

    @media ${device.mobileS} {
        padding: 180px 0px 15px 0px;
        h1 {
            font-size: 23px;
        }
    }
    @media ${device.mobileM} {
        padding: 10px 0px 15px 0px;
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
  &:hover { background-color: #999; color: black;}
  &:active {
    background-color: #ffff00;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const OptionsButton = styled.button`
  background-color: grey; // Choose a bright retro color
  color: white;
  border: 2px solid #FFF; // White border for the retro arcade look
  font-family: 'PressStart2P', cursive; // Retro, pixelated font
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

export const RacewayContainer = styled.div`
  position: absolute;
  top:55%;
  left: 0;
  right: 0;
  height: 50%;
  display: flex;
  justify-content: center;
  background: #000; // A dark background often suits retro styles
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); // Optional: Adds a slight shadow for depth
  border: 4px solid #333; // Adds a solid border for a pixelated look
  image-rendering: pixelated; // Ensures any images inside are rendered in a pixelated style
`;

// Grass with pixelated effect using CSS gradients
export const Grass = styled.div`
  width: 45%;
  background: repeating-linear-gradient(
    45deg,
    #4C9A2A,
    #4C9A2A 1px,
    #397f22 1px,
    #397f22 2px
  ); // Creates a 2x2 pixel pattern
`;

// Road with a similar pixelated effect
export const Road = styled.div`
  width: 10%;
  background: repeating-linear-gradient(
    45deg,
    #707070,
    #707070 1px,
    #585858 1px,
    #585858 2px
  ); // Creates a 2x2 pixel pattern
  position: relative;
`;

// Borders using box-shadow for pixel effect
export const Border = styled.div`
  height: 100%;
  width: 5%;
  background-color: ${props => props.color};
  box-shadow: 0 0 0 1px ${props => props.color}; // Simulates pixelated border
  position: absolute;
  top: 0;
  ${props => props.left ? 'left: 0;' : 'right: 0;'}
`;

// Lane lines using pseudo-elements
export const LaneLine = styled.div`
  height: 100%;
  width: 2px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 10px;
    width: 2px;
    background: white;
    box-shadow: 0 12px white, 0 24px white, 0 36px white, 0 48px white; // Adjust as needed
  }
`;

export const FixedImage = styled.img`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    height: 42%;
    width: 100vw;
    z-index: 999;
`;

export const GlassCard = styled.div`
    background: rgba(255, 255, 255, 0.2); // Semi-transparent white
    border-radius: 15px; // Round edges
    margin: 20px 40px 0px 40px; // Adjust the margin as per your requirement
    padding: 20px; // Or any other padding you prefer
    backdrop-filter: blur(4px); // This creates the frosted glass effect
    -webkit-backdrop-filter: blur(10px); // For Safari browser support
    border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
    max-width: calc(100% - 80px); // Adjusts width with respect to margin
    box-sizing: border-box; // Ensures padding doesn't affect overall width
    height: 90vh;
`;
