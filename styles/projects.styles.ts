import styled from 'styled-components';
import { device } from './media-breakpoints';

export const SectionPressed = styled.div`
    margin: 0px 55px 40px 55px;
    h1 {
        margin: 0px;
        color: white;
        font-family: 'PressStart2P', sans-serif;
        padding: 13px 30px;
    }
    @media ${device.mobileS} {
        margin: 0px 10px 40px 10px;
    }
    @media ${device.laptop} {
        margin: 0px 55px 40px 55px;
    }
`;

export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-self: start;
    @media ${device.mobileS} {
        flex-direction: column;
    }
    @media ${device.tablet} {
        flex-direction: row;
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