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

export const GlassCardContainer = styled.div`
    display: inline;
    height: 100vh; // Full viewport height
`;

export const GlassCard = styled.div`
    background: rgba(255, 255, 255, 0.2); // Semi-transparent white
    border-radius: 15px; // Round edges
    backdrop-filter: blur(4px); // This creates the frosted glass effect
    -webkit-backdrop-filter: blur(10px); // For Safari browser support
    border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
    box-sizing: border-box; // Ensures padding doesn't affect overall width
    position: relative;

    @media ${device.mobileS} {
      height: calc(100vh - 65px);
      margin: 25px 10px;
    }
    @media ${device.mobileL} {
      margin: 15px 8px;
    }
    @media ${device.tablet} {
      margin: 20px 30px;
    }
    @media ${device.laptop} {
      height: calc(100vh - 115px);
      margin: 45px 40px;
    }
    @media ${device.laptopL} {
      height: calc(100vh - 95px);
      margin: 35px 75px;
    }
    @media ${device.desktop} {
      height: calc(100vh - 180px);
      margin: 65px 125px;
    }
`;

export const Section = styled.div`
    width: auto;
    text-align: center;
    @media ${device.mobileS} {
      margin-top: 160px;
    }
    @media ${device.laptop} {
      margin-top: 120px;
    }
    @media ${device.laptopL} {
      margin-top: 185px;
    }
    @media ${device.desktop} {
        margin-top: 340px;
    }
`;


  
export const IntroHeader = styled.div`
    display: inline-block;
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
      box-shadow: 0 9px #00ff00;
      font-family: 'PressStart2P', sans-serif;
      font-weight: bolditalic;
      font-size: 20px;
      margin: 0px 0px 19px 0px;
      padding: 5px 30px;

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
      p {
        font-size: 34px;
      }
      h1 {
          font-size: 15px;
      }
      h3 {
          font-size: 10px;
          padding: 5px;
          margin: 10px;
      }
    }
    @media ${device.mobileM} {
      h1 {
          font-size: 17px;
      }
      h3 {
        font-size: 10px;
      }
    }
    @media ${device.mobileL} {
      h1 {
          font-size: 20px;
      }
      h3 {
          font-size: 11px;
          padding: 8px;
          margin: 16px 10px;
      }
    }
    @media ${device.tablet} {
      p {
        font-size: 42px;
      }
      h1 {
        font-size: 36px;
      }
      h3 {
        font-size: 15px;
      }
    }
    @media ${device.laptopL} {
      h1 {
        font-size: 58px;
      }
      h3 {
        font-size: 20px;
      }
    }
    @media ${device.laptopL} {
    
    }
    @media ${device.desktop} {
      p {
        font-size: 50px;
      }
    }
`;
  
export const IntroContent = styled.div`
    position: relative;
    text-align: center;
    font-family: 'Inconsolata', sans-serif;
    font-size: 18px;
    p {
        display: inline-block;
        text-align: left;
        width: 55%;
    }
    @media ${device.mobileS} {
      margin-top: 20px;
        p {
            width: auto;
            padding: 0px 20px;
            font-size: 16px;
        }
    }
    @media ${device.mobileL} {

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
    margin: 0px 2px 0px 2px;
    cursor: pointer;
    box-shadow: 0 9px #999;

    &:hover { 
      background-color: black; 
      color: #00ff00;
      text-decoration: none;
    }
    
    &:active {
      background-color: black;
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }

    @media ${device.mobileS} {
      font-size: 9px;
    }
    @media ${device.mobileM} {
      font-size: 11px;
    }
    @media ${device.mobileL} {
      font-size: 10px;
    }
    @media ${device.desktop} {
      font-size: 20px;
    }
`;

// export const DropdownMenu = styled.div`
//   display: ${props => props.isOpen ? 'block' : 'none'};
//   position: absolute;
//   left: 50%; // Center horizontally relative to the parent
//   transform: translateX(-50%); // Adjust for the exact center
//   background-color: #f9f9f9; // Adjust according to your theme
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   z-index: 1;
//   border-radius: 16px;
//   font-family: 'PressStart2P', sans-serif;

//   a {
//     color: green;
//     padding: 12px 16px;
//     text-decoration: none;
//     display: block;
//     text-align: left;

//     &:hover {
//       background-color: #ddd;
//     }
//   }
// `;

export const MainMenuOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(255, 255, 255, 0.3); // Adjust for your theme
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  // backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 2; // Ensure it's above the GlassCard
  color: green;
  

  h1 {
    font-family: 'PressStart2P', sans-serif;
    color: green;
    font-size: 32px; // Smaller than the main header
    margin-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li, button {
    cursor: pointer;
    background: none;
    border: none;
    margin: 10px 0;
    font-family: 'PressStart2P', sans-serif;
    color: green;
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

        a {
          color: green;
        }
  }

  button:hover {
    text-decoration: underline; /* Underlines the text on hover */
  }

  .home-button {
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
  }

  @media ${device.mobileS} {
    h1 {
      font-size: 15px; // Smaller font size for mobile devices
    }
    h2 {
      font-size: 16px;
    }
    ul {
      margin-top: 15px;
    }
    li{
      // margin: 0px;
    }
    button {
      font-size: 14px;
      margin: 8px 0px;
    }
    .home-button {
      font-size: 11px;
    }
  }
  @media ${device.mobileL} {
    h1 {
      font-size: 18px;
    }
    ul {
      margin-top: 8px;
    }
    button {
      font-size: 15px;
    }
  }

  @media ${device.tablet} {
    h1 {
      font-size: 26px; // Slightly larger for tablets
    }
    h2 {
      font-size: 20px;
    }
    li, button {
      font-size: 19px;
    }
    .home-button {
      font-size: 14px;
    }
  }
  @media ${device.laptop} {
    h1 {
      font-size: 28px;
    }
    li, button {
      font-size: 20px;
    }
    .home-button {
      font-size: 16px;
    }
  }
  @media ${device.laptopL} {
    h1 {
      font-size: 32px;
    }
    li, button {
      font-size: 24px;
    }
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1; // Fully visible
  }
  50% {
    opacity: 0; // Fully invisible
  }
`;

export const TransitionScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black; // or any other creative background
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} .2s ease forwards;
  // animation: ${fadeIn} .2s ease forwards;
  z-index: 10;
  background: rgba(255, 255, 255, 0.2); // Semi-transparent white
  background: black; // or any other creative background

  border-radius: 15px; // Round edges
  backdrop-filter: blur(4px); // This creates the frosted glass effect
  -webkit-backdrop-filter: blur(10px); // For Safari browser support
  border: 1px solid rgba(255, 255, 255, 0.3); // Optional: adds a light border
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
  box-sizing: border-box; // Ensures padding doesn't affect overall width

  h1 {
    color: white;
    font-size: 2em;
    font-family: 'PressStart2P', sans-serif;
  }

  h1 span {
    animation: ${blink} 1s infinite;
  }

  @media ${device.mobileS} {
    h1 {
      font-size: 1.5em; // Adjust font size for smaller screens
    }
  }

  @media ${device.tablet} {
    h1 {
      font-size: 2em; // Adjust for tablet screens
    }
  }
`;

export const FullScreenFadeIn = styled.div`
  display: block;
  position: fixed; // Covers the entire viewport
  top: 0;
  left: 0;
  background-color: black;
  height: 100vh; // Covers full viewport height
  width: 100vw; // Covers full viewport width
  opacity: 0; // Start invisible if using fadeIn
  animation: ${fadeIn} 0.2s ease forwards;
  z-index: 1000000000;
`;