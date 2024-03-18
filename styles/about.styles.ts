import styled, { keyframes } from 'styled-components';
import { device } from './media-breakpoints';
import { GlassCard } from './home.styles';

export { GlassCardContainer } from './home.styles';

export const GlassCardDark = styled(GlassCard)`
    margin-top: 23px;
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 0.3); // Semi-transparent black
    position: relative;
    height: 75vh;
    @media ${device.mobileS} {
      margin: 5px 0px;
      padding: 25px 1px;
    }
    @media ${device.mobileL} {
      margin: 5px 12px;
      padding: 25px 1px;
    }
    @media ${device.laptop} {
      margin: 7px 12px;
      padding: 20px 1px;
    }
    @media ${device.laptopL} {
      margin: 10px 75px;
      padding: 25px 1px;
      height: auto;
    }
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
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100%; // This will make the container's height not exceed the viewport height
    height: 100%;
    width: 100%;


    h1 {
        margin: 0px;
        color: white;
        font-family: 'PressStart2P', sans-serif;
    }

    p {
      margin: 0px;
    }

    @media ${device.mobileS} {
        // margin: 8px 10px 25px 10px;
        padding: 0px 23px;
        h1 {
          font-size: 25px;
        }
        p {
            font-size: 12px;
        }
    }
    @media ${device.mobileM} {
        // margin: 8px 10px 25px 10px;
        padding: 16px 30px;
        p {
            font-size: 12px;
        }
    }
    @media ${device.tablet} {
        // margin: 8px 55px 25px 55px;
        padding: 20px 75px;
        p {
            font-size: 13px;
        }
    }
    @media ${device.laptop} {
        padding: 10px 80px;
        // margin: 8px 110px 25px 110px;
    }
    @media ${device.laptopL} {
      padding: 40px 130px;
      // margin: 8px 110px 25px 110px;
      height: auto;
    }
    @media ${device.desktop} {
      padding: 100px 400px;
      // margin: 8px 110px 25px 110px;
      height: auto;
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
    color: green;
    text-align: center;

    // @media ${device.mobileS} {}

    @media ${device.laptop} {
        position: absolute; // Position it absolutely
        bottom: 0; // Align to the bottom
        left: 50%; // Center horizontally
        transform: translateX(-50%); // Adjust for exact centering
        padding-bottom: 50px;
    }
`;

const scrollLeft = keyframes`
  0%, 50% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const scrollRight = keyframes`
  0%, 30% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export const TickerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: auto; // Adjust as needed, enough to fit both lines
  margin-bottom: 30px;
  margin-top: 12px;
`;

export const TickerLine = styled.div`
  white-space: nowrap;
  display: flex;
  position: relative; // Changed to relative
  width: max-content; // Ensure it's as wide as its content
  animation: ${props => props.direction === 'left' ? scrollLeft : scrollRight} 90s linear infinite;
`;

export const TickerLineTwo = styled(TickerLine)`
  animation: ${props => props.direction === 'left' ? scrollLeft : scrollRight} 90s linear infinite;
`;

export const TickerText = styled.span`
  padding: 0px 50px; // Space between repetitions
  border: solid 2px white;
//   border-radius: 20px;
  &:hover {
    transform: translateY(-20px);
  }
`;

export const ControllerContainer = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 20px; // Space between buttons
  padding: 20px;
  // Additional styling...

  @media ${device.mobileS} {
    margin-top: 10px;
  }
`;

export const ControllerButton = styled.button`
  background-color: green; // Red color, adjust as needed
  color: white;
  border: none;
  border-radius: 50%; // Circular buttons
  width: 60px; // Button size, adjust as needed
  height: 60px;
  font-family: 'PressStart2P', sans-serif; // Retro font
  cursor: pointer;
  box-shadow: 0 4px grey; // Shadow for "pushed" effect

  &:hover {
    background-color: #00ff00; // Darker on hover
  }

  &:active {
    box-shadow: 0 2px #600; // Adjust shadow for clicked effect
    transform: translateY(2px); // Pushed effect
  }

  // Additional styling...
`;

export const ControllerButtonTwo = styled.a`
// margin: 0px;
color: green;
// font-family: 'Fraunces', sans-serif;
// font-weight: 700;
font-family: 'PressStart2P', sans-serif;
font-size: 15px;
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

export const OffscreenDiv = styled.div`
  position: absolute;
  left: -9999px; // Position it off-screen
  visibility: hidden; // Make sure it's not visible
  white-space: nowrap; // Prevent line breaks
`;

export const ExpandCollapseButton = styled.button`
  background-color: transparent; // Assuming a transparent background
  color: green; // Green text color
  font-family: 'PressStart2P', sans-serif; // Retro font
  font-size: 15px; // Adjust size as needed
  cursor: pointer;
  border: none; // No border for a text-like button
  margin-top: 20px; // Spacing from the content above
  text-shadow:
    2px 0 0 #00ff00, // Right
    -2px 0 0 #00ff00, // Left
    0 2px 0 #00ff00, // Down
    0 -2px 0 #00ff00, // Up
    2px 2px 0 #00ff00; // Diagonal down right

  &:hover {
    color: white; // white on hover
  }

  @media ${device.mobileS} {
    font-size: 11px;
  }
  @media ${device.tablet} {
    font-size: 15px;
  }
`;
